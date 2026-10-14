export type Notebook = {
  /** Slug na URL: /notebooks/[slug] */
  slug: string;
  title: string;
  description: string;
  tags: string[];
  /** Caminho público do HTML exportado do Databricks/Jupyter (em /public). */
  htmlPath: string;
  /** Data de publicação no formato YYYY-MM-DD. */
  date: string;
  /** (Opcional) Link para o notebook original (Databricks share, GitHub, etc.). */
  sourceUrl?: string;
  /** (Opcional) Plataforma onde o notebook foi criado. */
  platform?: "Databricks" | "Jupyter" | "Google Colab" | "Kaggle";
};

/**
 * Como adicionar um novo notebook:
 * 1. No Databricks: File → Export → HTML (ou Jupyter: File → Download as → HTML).
 * 2. Salve o arquivo em `public/notebooks/<slug>.html`.
 * 3. Adicione uma entrada aqui com o mesmo slug.
 *
 * O slug precisa ser único (minúsculas, sem espaços, usar hífen).
 */
export const notebooks: Notebook[] = [
  // Exemplo (remover quando adicionar o primeiro notebook real):
  // {
  //   slug: "etl-decisao-financeira",
  //   title: "ETL para motor de decisão financeira",
  //   description:
  //     "Pipeline PySpark no Databricks que ingere eventos de decisão, aplica regras de validação e grava no S3 particionado por data.",
  //   tags: ["PySpark", "Databricks", "ETL", "AWS S3"],
  //   htmlPath: "/notebooks/etl-decisao-financeira.html",
  //   date: "2026-01-15",
  //   platform: "Databricks",
  // },
];

export function getNotebook(slug: string): Notebook | undefined {
  return notebooks.find((n) => n.slug === slug);
}
