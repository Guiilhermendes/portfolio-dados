import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20 border-t border-border py-20", className)}
      {...props}
    >
      <div className="container">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          {eyebrow && (
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </p>
          )}
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-balance text-muted-foreground">
              {description}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
