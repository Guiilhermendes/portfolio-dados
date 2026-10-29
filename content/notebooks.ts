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
    slug: "Quality_Delta",
    title: "Delta Lake Data Quality & Constraints",
    description:
      "Explores Delta Lake data quality and governance features, including Schema Enforcement, Schema Evolution with mergeSchema, adding CHECK constraints for data validation, and auditing table changes using DESCRIBE HISTORY.",
    tags: ["Delta Lake", "Databricks", "PySpark", "Spark", "Data Quality", "Schema Evolution", "Constraints", "SQL"],
    htmlPath: "/notebooks/Quality_Delta.html",
    date: "2026-10-29",
    platform: "Databricks",
  },
  {
    slug: "Optimization_Delta",
    title: "Delta Lake Table Optimization & Z-Ordering",
    description:
      "Demonstrates Delta Lake performance tuning techniques, including table compaction with OPTIMIZE, file co-locating via Z-ORDER BY, small file problem mitigation, and measuring query execution performance improvements.",
    tags: ["Delta Lake", "Databricks", "PySpark", "Spark", "Optimization", "Z-Order", "SQL", "Volumes"],
    htmlPath: "/notebooks/Optimization_Delta.html",
    date: "2026-10-28",
    platform: "Databricks",
  },
  {
    slug: "Optimization",
    title: "Spark Optimization, Shuffling & Data Skew Techniques",
    description:
      "Explores PySpark performance optimization strategies, including execution plan analysis (.explain), understanding narrow vs. wide transformations, repartitioning vs. coalescing, Broadcast Joins, and handling data skew using salting techniques.",
    tags: ["Databricks", "PySpark", "Spark", "Optimization", "Explain", "Partitioning", "Broadcast Join", "Salting", "Volumes"],
    htmlPath: "/notebooks/Optimization.html",
    date: "2026-10-27",
    platform: "Databricks",
  },
  {
    slug: "Build_DeltaLake",
    title: "Building Delta Lake Tables & Pipelines",
    description:
      "Demonstrates building a full Delta Lake pipeline by loading CSV sources into Delta format, handling schema creation, appending new data, performing upserts via MERGE operations, and executing SQL joins across multiple tables.",
    tags: ["Delta Lake", "Databricks", "PySpark", "Spark", "SQL", "Merge", "Upsert", "Volumes"],
    htmlPath: "/notebooks/Build_DeltaLake.html",
    date: "2026-10-23",
    platform: "Databricks",
  },
  {
    slug: "Partition_knowledge",
    title: "Databricks Partitioning with partitionBy",
    description:
      "Demonstrates how to optimize Spark table storage using the partitionBy method to organize data into directories by column values, improving query performance with partition pruning.",
    tags: ["Databricks", "PySpark", "Spark", "Partitioning", "partitionBy", "Data Lake", "Volumes"],
    htmlPath: "/notebooks/Partition_knowledge.html",
    date: "2026-10-21",
    platform: "Databricks",
  },
  {
    slug: "Deltalake_knowledge_3",
    title: "Delta Lake Schema Evolution & History - Part 3",
    description:
      "Demonstrates Delta Lake schema evolution using the mergeSchema option to dynamically add new columns, alongside inspecting version history and querying historical table snapshots.",
    tags: ["Delta Lake", "Databricks", "PySpark", "Spark", "Schema Evolution", "Time Travel", "Volumes"],
    htmlPath: "/notebooks/Deltalake_knowledge_3.html",
    date: "2026-10-21",
    platform: "Databricks",
  },
  {
    slug: "Deltalake_knowledge_2",
    title: "Delta Lake Merge & Upsert Operations - Part 2",
    description:
      "Focuses on advanced Delta Lake operations using the Delta Table API, demonstrating how to perform Merge and Upsert operations (whenMatchedUpdate and whenNotMatchedInsert) to sync source DataFrames with target tables.",
    tags: ["Delta Lake", "Databricks", "PySpark", "Spark", "Tables", "Merge", "Upsert", "Volumes"],
    htmlPath: "/notebooks/Deltalake_knowledge_2.html",
    date: "2026-10-21",
    platform: "Databricks",
  },
  {
    slug: "Deltalake_knowledge_1",
    title: "Delta Lake Operations & Time Travel - Part 1",
    description:
      "Demonstrates core Delta Lake functionalities using PySpark, including table creation, format conversions, updating column data with conditional logic, viewing version history, and performing time travel rollbacks.",
    tags: ["Delta Lake", "Databricks", "PySpark", "Spark", "Tables", "SQL", "Volumes", "Time Travel"],
    htmlPath: "/notebooks/Deltalake_knowledge_1.html",
    date: "2026-10-21",
    platform: "Databricks",
  },
  {
    slug: "Pyspark_pandas_koalas_knowledge",
    title: "Churn Analysis with PySpark Pandas (Koalas)",
    description:
      "Explore this Databricks notebook demonstrating how to read, filter, and group churn data from Churn.csv using pandas and pyspark.pandas (formerly Koalas).",
    tags: ["Pandas", "Pyspark.pandas", "Python", "Databricks", "PySpark", "Spark", "Koalas"],
    htmlPath: "/notebooks/Pyspark_pandas_koalas_knowledge.html",
    date: "2026-10-22",
    platform: "Databricks",
  },
  {
    slug: "Sql_Dataframes_knowledge",
    title: "SQL and DataFrames Knowledge",
    description:
      "Demonstrates combining PySpark DataFrame operations with Spark SQL queries for tabular data analysis, including custom CSV loading, table persistence, grouped aggregations, and query filtering.",
    tags: ["DataFrame", "Databricks", "PySpark", "Spark", "Tables", "SQL", "Volumes", "Catalogs"],
    htmlPath: "/notebooks/Sql_Dataframes_knowledge.html",
    date: "2026-10-19",
    platform: "Databricks",
  },
  {
    slug: "Dataframe_knowledge_2",
    title: "DataFrame & Catalog Operations - Part 2",
    description:
      "Covers Unity Catalog and Volume management, reading external datasets with explicit vs. inferred schemas, row transformations, timestamp conversions, actions, and exporting tables in multiple formats.",
    tags: ["DataFrame", "Delta Lake", "Databricks", "PySpark", "Spark", "Tables", "SQL", "Volumes", "Catalogs"],
    htmlPath: "/notebooks/Dataframe_knowledge_2.html",
    date: "2026-10-18",
    platform: "Databricks",
  },
  {
    slug: "DataFrame_knowledge_1",
    title: "PySpark DataFrame Fundamentals - Part 1",
    description:
      "Demonstrates fundamental operations for creating and manipulating PySpark DataFrames, registering temporary views for SQL execution, applying column expressions, and executing group-by aggregations.",
    tags: ["DataFrame", "Delta Lake", "Databricks", "PySpark", "Spark"],
    htmlPath: "/notebooks/DataFrame_knowledge_1.html",
    date: "2026-10-16",
    platform: "Databricks",
  }
];

export function getNotebook(slug: string): Notebook | undefined {
  return notebooks.find((n) => n.slug === slug);
}
