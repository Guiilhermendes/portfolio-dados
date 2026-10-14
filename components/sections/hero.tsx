import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Terminal,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { site } from "@/lib/site";
import type { Dictionary, Locale } from "@/lib/i18n";

const stack = [
  "Python",
  "PySpark",
  "Apache Spark",
  "Databricks",
  "AWS Glue",
  "AWS Lambda",
  "S3",
  "Athena",
  "SQL",
  "Kafka",
];

export function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-to-b from-primary/10 via-transparent to-transparent"
      />

      <div className="container flex flex-col items-start gap-10 py-24 md:py-32 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-7">
          <Badge variant="outline" className="gap-2 font-mono">
            <span className="h-2 w-2 rounded-full bg-primary" />
            {dict.hero.badge}
          </Badge>

          <div className="space-y-4">
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">
              {dict.hero.role}
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {dict.hero.titleBefore}{" "}
              <span className="text-primary">{dict.hero.titleHighlight}</span>{" "}
              {dict.hero.titleAfter}
            </h1>
            <p className="max-w-2xl text-balance text-lg text-muted-foreground">
              {dict.hero.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href={`/${locale}#contato`}>
                {dict.hero.ctaContact}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={
                  locale === "en"
                    ? "/cv/CV_Guilherme_Mendes_EN.pdf"
                    : "/cv/CV_Guilherme_Mendes_PT.pdf"
                }
                download
              >
                <Download className="h-4 w-4" />
                {dict.hero.ctaDownload}
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a
                href={site.fullStackPortfolio}
                target="_blank"
                rel="noreferrer noopener"
              >
                {dict.hero.ctaFullStack}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a
              href={`mailto:${site.email}`}
              aria-label={dict.contact.channels.email}
              className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="h-4 w-4" />
            </a>
            <span className="ml-2 font-mono text-xs text-muted-foreground">
              {site.location}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {stack.map((t) => (
              <Badge key={t} variant="secondary" className="font-mono">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        <div className="w-full max-w-md flex-shrink-0 lg:w-[460px]">
          <PipelineCard dict={dict} />
        </div>
      </div>
    </section>
  );
}

function PipelineCard({ dict }: { dict: Dictionary }) {
  return (
    <div className="relative rounded-xl border border-border bg-card/60 p-5 shadow-xl backdrop-blur">
      <div className="mb-4 flex items-center gap-2 border-b border-border pb-3">
        <span className="h-3 w-3 rounded-full bg-destructive/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-primary/70" />
        <div className="ml-3 flex items-center gap-2 text-xs text-muted-foreground">
          <Terminal className="h-3.5 w-3.5" />
          <span className="font-mono">{dict.hero.terminalTitle}</span>
        </div>
      </div>

      <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed">
        <code>
          <span className="text-muted-foreground">
            {dict.hero.ingestComment}
          </span>
          {"\n"}
          <span className="text-primary">source</span>:{" "}
          <span className="text-foreground">s3://raw/decision-events</span>
          {"\n"}
          <span className="text-primary">transform</span>:{" "}
          <span className="text-foreground">pyspark @ databricks</span>
          {"\n"}
          <span className="text-primary">validate</span>:{" "}
          <span className="text-foreground">rules.yaml</span>
          {"\n"}
          <span className="text-primary">sink</span>:{" "}
          <span className="text-foreground">athena://analytics.policies</span>
          {"\n"}
          <span className="text-primary">schedule</span>:{" "}
          <span className="text-foreground">0 */4 * * *</span>
          {"\n\n"}
          <span className="text-muted-foreground">
            {dict.hero.outcomesComment}
          </span>
          {"\n"}
          <span className="text-primary">latency</span>:{" "}
          <span className="text-foreground">-30%</span>
          {"\n"}
          <span className="text-primary">accuracy</span>:{" "}
          <span className="text-foreground">+20%</span>
          {"\n"}
          <span className="text-primary">incidents</span>:{" "}
          <span className="text-foreground">-25%</span>
        </code>
      </pre>

      <svg viewBox="0 0 400 60" className="mt-6 w-full" aria-hidden>
        <defs>
          <linearGradient id="pipe" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="1" />
          </linearGradient>
        </defs>
        <line
          x1="20"
          y1="30"
          x2="380"
          y2="30"
          stroke="hsl(var(--border))"
          strokeWidth="2"
        />
        <line
          x1="20"
          y1="30"
          x2="380"
          y2="30"
          stroke="url(#pipe)"
          strokeWidth="2"
          strokeDasharray="8 6"
          className="animate-pipeline-flow"
        />
        {[
          { x: 20, label: "S3" },
          { x: 140, label: "Glue" },
          { x: 260, label: "Spark" },
          { x: 380, label: "Athena" },
        ].map((n) => (
          <g key={n.label}>
            <circle
              cx={n.x}
              cy={30}
              r={8}
              fill="hsl(var(--background))"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
            />
            <text
              x={n.x}
              y={54}
              textAnchor="middle"
              className="fill-muted-foreground font-mono"
              fontSize="10"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
