"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LOCALES, localeFlags, type Locale } from "@/lib/i18n";

function swapLocale(pathname: string, nextLocale: Locale): string {
  const segments = pathname.split("/");
  // segments[0] = "" (leading /), segments[1] = current locale
  if (segments.length < 2) return `/${nextLocale}`;
  segments[1] = nextLocale;
  const rest = segments.join("/");
  return rest || `/${nextLocale}`;
}

export function LanguageToggle({
  currentLocale,
  variant = "default",
}: {
  currentLocale: Locale;
  variant?: "default" | "compact";
}) {
  const pathname = usePathname() ?? `/${currentLocale}`;

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-1 rounded-md border border-border p-0.5">
        {LOCALES.map((loc) => (
          <Link
            key={loc}
            href={swapLocale(pathname, loc)}
            aria-label={`Switch to ${loc.toUpperCase()}`}
            className={cn(
              "rounded px-2 py-1 text-[11px] font-mono font-medium transition-colors",
              loc === currentLocale
                ? "bg-primary/15 text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {localeFlags[loc]}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <Button variant="ghost" size="icon" asChild aria-label="Toggle language">
      <Link
        href={swapLocale(
          pathname,
          currentLocale === "pt" ? "en" : "pt"
        )}
      >
        <Languages className="h-4 w-4" />
      </Link>
    </Button>
  );
}
