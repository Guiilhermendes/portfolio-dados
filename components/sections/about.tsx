import { Gauge, TrendingDown, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import type { Dictionary } from "@/lib/i18n";

const metricIcons: LucideIcon[] = [Zap, Gauge, TrendingDown];

export function About({ dict }: { dict: Dictionary }) {
  return (
    <Section
      id="sobre"
      eyebrow={dict.about.eyebrow}
      title={dict.about.title}
      description={dict.about.description}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {dict.about.metrics.map((m, i) => {
          const Icon = metricIcons[i] ?? Zap;
          return (
            <Card
              key={m.label}
              className="group relative overflow-hidden transition-colors hover:border-primary/50"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {dict.about.impactLabel}
                  </span>
                </div>
                <div>
                  <p className="text-4xl font-semibold tracking-tight text-primary">
                    {m.value}
                  </p>
                  <p className="mt-1 text-base font-medium">{m.label}</p>
                </div>
                <p className="text-sm text-muted-foreground">{m.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-border bg-card/40 p-6 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {dict.about.focusLabel}
        </p>
        <p className="mt-2 text-balance text-muted-foreground">
          {dict.about.focusText}
          <span className="text-foreground">{dict.about.focusHighlight1}</span>
          {dict.about.focusTextMiddle}
          <span className="text-foreground">{dict.about.focusHighlight2}</span>
          {dict.about.focusTextEnd}
        </p>
      </div>
    </Section>
  );
}
