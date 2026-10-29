export type Certificate = {
  /** Unique id used as React key. */
  id: string;
  /** Localized titles. */
  title: { pt: string; en: string };
  /** Localized short descriptions. */
  description: { pt: string; en: string };
  /** Issuing organization (e.g. Udemy, AWS, Databricks). */
  issuer: string;
  /** Instructor / author when relevant. */
  instructor?: string;
  /** Completion date in YYYY-MM-DD. */
  date: string;
  /** Course length, e.g. "7.5h". */
  hours?: string;
  tags: string[];
  /** Public path to the PDF under /public. */
  pdfPath: string;
  /** External verification URL (optional). */
  credentialUrl?: string;
  /** Credential / certificate number (optional). */
  credentialId?: string;
};

/**
 * How to add a new certificate:
 * 1. Save the PDF to `public/certificates/<slug>.pdf`.
 * 2. Add an entry below with a unique `id`.
 */
export const certificates: Certificate[] = [
  {
    id: "databricks-basico-avancado-2026",
    title: {
      pt: "Formação Completa DataBricks: do Básico ao Avançado 2026",
      en: "Complete DataBricks Training: From Beginner to Advanced 2026",
    },
    description: {
      pt: "Formação completa em Databricks cobrindo fundamentos até tópicos avançados de processamento e plataforma.",
      en: "Complete Databricks training covering fundamentals through advanced processing and platform topics.",
    },
    issuer: "Udemy",
    instructor: "Fernando Amaral",
    date: "2026-10-29",
    hours: "7.5h",
    tags: ["Databricks", "PySpark", "Delta Lake", "Spark"],
    pdfPath: "/certificates/UC-Databricks-Basico-Ao-Avancado-2026.pdf",
    credentialUrl: "https://ude.my/UC-47c3ff68-680a-4ab2-9e89-884ea56ae8c3",
    credentialId: "UC-47c3ff68-680a-4ab2-9e89-884ea56ae8c3",
  },
];
