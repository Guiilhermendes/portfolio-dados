import { Briefcase } from "lucide-react";

import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import type { Dictionary } from "@/lib/i18n";

type RoleKey = keyof Dictionary["experience"]["roles"];

const companies: Record<RoleKey, { company: string; tags: string[] }> = {
  brq: {
    company: "BRQ Digital Solutions",
    tags: [
      "AWS Glue",
      "Lambda",
      "S3",
      "Athena",
      "Databricks",
      "Terraform",
      "FICO DMPS",
      "PySpark",
    ],
  },
  ms: {
    company: "Management Solutions",
    tags: ["Python", "PySpark", "HiveQL", "Azure Databricks", "Cosmos DB"],
  },
  mobicity: {
    company: "Mobicity",
    tags: ["Node.js", "React", "AWS", "MongoDB"],
  },
  permute: {
    company: "Permute",
    tags: ["ASP.NET Core", "SQL", "jQuery"],
  },
};

const order: RoleKey[] = ["brq", "ms", "mobicity", "permute"];

export function Experience({ dict }: { dict: Dictionary }) {
  return (
    <Section
      id="experiencia"
      eyebrow={dict.experience.eyebrow}
      title={dict.experience.title}
      description={dict.experience.description}
    >
      <div className="relative mx-auto max-w-3xl">
        <div
          aria-hidden
          className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/50 via-border to-transparent md:left-6"
        />

        <ol className="space-y-10">
          {order.map((key) => {
            const role = dict.experience.roles[key];
            const meta = companies[key];
            return (
              <li
                key={key}
                className="relative pl-12 md:pl-16"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border border-primary/40 bg-background text-primary md:left-2"
                >
                  <Briefcase className="h-4 w-4" />
                </span>

                <div className="rounded-xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/50">
                  <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-primary">
                        {meta.company}
                      </p>
                      <h3 className="text-lg font-semibold">{role.title}</h3>
                    </div>
                    <div className="text-right text-xs text-muted-foreground">
                      <p>{role.period}</p>
                      <p>{role.location}</p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {role.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {meta.tags.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="font-mono text-[11px]"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
