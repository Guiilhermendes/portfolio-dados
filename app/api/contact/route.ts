import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/contact-schema";
import { site } from "@/lib/site";

export const runtime = "nodejs";

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Corpo inválido" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? "Dados inválidos";
    return NextResponse.json({ error: first }, { status: 400 });
  }

  const { name, email, subject, message, website } = parsed.data;

  // Honeypot: bot preencheu? Finge sucesso.
  if (website && website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY ausente");
    return NextResponse.json(
      { error: "Serviço de e-mail não configurado" },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const subjectLine =
    subject && subject.trim().length > 0
      ? `[Portfolio Dados] ${subject.trim()}`
      : `[Portfolio Dados] Nova mensagem de ${name}`;

  const text = [
    `Nome: ${name}`,
    `E-mail: ${email}`,
    subject ? `Assunto: ${subject}` : null,
    "",
    "Mensagem:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 560px; margin: 0 auto; color: #0a0a0a;">
      <h2 style="margin: 0 0 16px; color: #0d9488;">Nova mensagem do portfólio</h2>
      <table style="width:100%; border-collapse:collapse; font-size:14px;">
        <tr><td style="padding:4px 0; color:#555; width:90px;">Nome</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:4px 0; color:#555;">E-mail</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        ${subject ? `<tr><td style="padding:4px 0; color:#555;">Assunto</td><td>${escapeHtml(subject)}</td></tr>` : ""}
      </table>
      <hr style="border:none; border-top:1px solid #e5e7eb; margin:16px 0;" />
      <p style="white-space:pre-wrap; line-height:1.5; font-size:14px;">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      subject: subjectLine,
      replyTo: email,
      text,
      html,
    });

    if (error) {
      console.error("[contact] Resend error", error);
      return NextResponse.json(
        { error: "Falha ao enviar a mensagem" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error", err);
    return NextResponse.json(
      { error: "Erro inesperado ao enviar a mensagem" },
      { status: 500 }
    );
  }
}
