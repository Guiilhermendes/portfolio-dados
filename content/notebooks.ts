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
  {
    slug: "DataFrame_knowledge_1",
    title: "DataFrame and Delta Lake knowledge - Part 1",
    description:
      "Notebook about DataFrame and Delta Lake knowledge",
    tags: ["DataFrame", "Delta Lake", "Databricks", "PySpark", "Spark"],
    htmlPath: "/notebooks/DataFrame_knowledge_1.html",
    date: "2026-10-16",
    platform: "Databricks",
  },
  {
    slug: "Dataframe_knowledge_2",
    title: "DataFrame and Delta Lake knowledge - Part 2",
    description:
      "Notebook about DataFrame and Delta Lake knowledge",
    tags: ["DataFrame", "Delta Lake", "Databricks", "PySpark", "Spark", "Tables", "SQL", "Volumes", "Catalogs"],
    htmlPath: "/notebooks/Dataframe_knowledge_2.html",
    date: "2026-10-18",
    platform: "Databricks",
  },
  {
    slug: "Sql_Dataframes_knowledge",
    title: "SQL and Dataframes knowledge",
    description:
      "Notebook about SQL and Dataframes knowledge",
    tags: ["DataFrame", "Databricks", "PySpark", "Spark", "Tables", "SQL", "Volumes", "Catalogs"],
    htmlPath: "/notebooks/Sql_Dataframes_knowledge.html",
    date: "2026-10-19",
    platform: "Databricks",
  },
];

export function getNotebook(slug: string): Notebook | undefined {
  return notebooks.find((n) => n.slug === slug);
}
