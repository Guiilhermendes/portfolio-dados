import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome (ao menos 2 caracteres)")
    .max(80, "Nome muito longo"),
  email: z.string().trim().email("E-mail inválido"),
  subject: z
    .string()
    .trim()
    .max(120, "Assunto muito longo")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "A mensagem precisa ter ao menos 10 caracteres")
    .max(4000, "Mensagem muito longa"),
  /** Honeypot (campo oculto). Precisa vir vazio. */
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
