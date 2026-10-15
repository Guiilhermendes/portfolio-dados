import {
  SiApacheairflow,
  SiApachekafka,
  SiApachespark,
  SiClaude,
  SiCursor,
  SiDatabricks,
  SiDatadog,
  SiDocker,
  SiGithubactions,
  SiGithubcopilot,
  SiGrafana,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";
import { FaAws, FaMicrosoft } from "react-icons/fa6";
import {
  Bot,
  Cloud,
  Database,
  FileCode2,
  HardDrive,
  KeyRound,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

import { Section } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Dictionary } from "@/lib/i18n";

type TechIcon = IconType | LucideIcon;

type Item = { name: string; icon: TechIcon };

const items: Record<string, Item[]> = {
  dataPlatforms: [
    { name: "Databricks", icon: SiDatabricks },
    { name: "Apache Spark", icon: SiApachespark },
    { name: "PySpark", icon: SiApachespark },
    { name: "AWS Glue", icon: FaAws },
    { name: "Airflow", icon: SiApacheairflow },
  ],
  storage: [
    { name: "Amazon S3", icon: HardDrive },
    { name: "Athena", icon: Database },
    { name: "DynamoDB", icon: Database },
    { name: "Cosmos DB", icon: Database },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
  ],
  languages: [
    { name: "Python", icon: SiPython },
    { name: "SQL", icon: FileCode2 },
    { name: "HiveQL", icon: FileCode2 },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
  ],
  cloud: [
    { name: "AWS", icon: FaAws },
    { name: "Azure", icon: FaMicrosoft },
    { name: "AWS Lambda", icon: Zap },
    { name: "Secrets Manager", icon: KeyRound },
  ],
  streaming: [
    { name: "Kafka", icon: SiApachekafka },
    { name: "AWS SQS", icon: Workflow },
    { name: "Event-driven", icon: Cloud },
  ],
  devops: [
    { name: "Terraform", icon: SiTerraform },
    { name: "Docker", icon: SiDocker },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "GitHub Actions", icon: SiGithubactions },
    { name: "Grafana", icon: SiGrafana },
    { name: "Datadog", icon: SiDatadog },
  ],
  ai: [
    { name: "GitHub Copilot", icon: SiGithubcopilot },
    { name: "Cursor", icon: SiCursor },
    { name: "Claude Code", icon: SiClaude },
    { name: "Amazon Q", icon: FaAws },
    { name: "Codeium", icon: Sparkles },
    { name: "MCP / Agents", icon: Bot },
  ],
};

const groupOrder: Array<keyof Dictionary["techStack"]["groups"]> = [
  "dataPlatforms",
  "storage",
  "languages",
  "cloud",
  "streaming",
  "devops",
  "ai",
];

export function TechStack({ dict }: { dict: Dictionary }) {
  return (
    <Section
      id="stack"
      eyebrow={dict.techStack.eyebrow}
      title={dict.techStack.title}
      description={dict.techStack.description}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groupOrder.map((key) => {
          const group = dict.techStack.groups[key];
          const groupItems = items[key] ?? [];
          return (
            <Card
              key={key}
              className="transition-colors hover:border-primary/50"
            >
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between">
                  <span>{group.title}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {groupItems.length} {dict.techStack.itemsSuffix}
                  </span>
                </CardTitle>
                <p className="text-sm text-muted-foreground">{group.caption}</p>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="grid grid-cols-2 gap-2">
                  {groupItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li
                        key={item.name}
                        className="flex items-center gap-2 rounded-md border border-border/60 bg-background/40 px-3 py-2 text-sm transition-colors hover:border-primary/50 hover:text-primary"
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        <span className="truncate">{item.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
