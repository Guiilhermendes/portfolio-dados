export type CVVariant = {
  id: "pt" | "en";
  language: "Português" | "English";
  label: string;
  file: string | null;
  available: boolean;
  updatedAt?: string;
};

/**
 * Para habilitar o CV em inglês:
 * 1. Coloque o PDF em `public/cv/CV_Guilherme_Mendes_EN.pdf`.
 * 2. Troque `available: false` por `available: true` no item 'en' abaixo.
 * 3. Preencha `file` com o caminho relativo em /public.
 */
export const cvs: CVVariant[] = [
  {
    id: "pt",
    language: "Português",
    label: "CV em Português (ATS-friendly)",
    file: "/cv/CV_Guilherme_Mendes_PT.pdf",
    available: true,
    updatedAt: "2026-10-14",
  },
  {
    id: "en",
    language: "English",
    label: "CV in English",
    file: null,
    available: false,
  },
];
