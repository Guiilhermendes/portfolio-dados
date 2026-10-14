import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Calendar } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getNotebook, notebooks } from "@/content/notebooks";
import {
  LOCALES,
  getDictionary,
  isLocale,
  type Locale,
} from "@/lib/i18n";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    notebooks.map((n) => ({ locale, slug: n.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale as Locale);
  const nb = getNotebook(slug);
  if (!nb) return { title: dict.notebooks.notFoundTitle };
  return {
    title: nb.title,
    description: nb.description,
  };
}

function formatDate(iso: string, locale: Locale): string {
  try {
    return new Date(iso).toLocaleDateString(locale === "pt" ? "pt-BR" : "en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export default async function NotebookPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);
  const nb = getNotebook(slug);
  if (!nb) notFound();

  return (
    <div className="container py-10">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link href={`/${l}/#notebooks`}>
          <ArrowLeft className="h-4 w-4" />
          {dict.notebooks.back}
        </Link>
      </Button>

      <header className="mb-6 max-w-3xl">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {nb.platform && (
            <Badge variant="muted" className="font-mono text-[10px]">
              {nb.platform}
            </Badge>
          )}
          {nb.tags.map((t) => (
            <Badge key={t} variant="secondary" className="font-mono text-[10px]">
              {t}
            </Badge>
          ))}
        </div>
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {nb.title}
        </h1>
        <p className="mt-3 text-muted-foreground">{nb.description}</p>
        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(nb.date, l)}
          </span>
          {nb.sourceUrl && (
            <a
              href={nb.sourceUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              {dict.notebooks.viewOriginal}
              <ArrowUpRight className="h-3 w-3" />
            </a>
          )}
          <a
            href={nb.htmlPath}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1 text-primary hover:underline"
          >
            {dict.notebooks.openInNewTab}
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </header>

      <div className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
        <iframe
          src={nb.htmlPath}
          title={nb.title}
          sandbox="allow-same-origin allow-scripts allow-popups"
          className="h-[80vh] w-full"
        />
      </div>
    </div>
  );
}
