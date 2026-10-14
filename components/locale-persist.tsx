"use client";

import * as React from "react";

import type { Locale } from "@/lib/i18n";

const COOKIE_NAME = "NEXT_LOCALE";
const ONE_YEAR = 60 * 60 * 24 * 365;

/**
 * Keeps the NEXT_LOCALE cookie in sync with the current URL locale.
 *
 * This runs on every page under /[locale]/*. When the user navigates to
 * `/pt` or `/en` (via the language toggle, a shared link, or search engine),
 * we persist that choice so the next visit to `/` sends them straight to the
 * same locale, overriding what the browser's Accept-Language header suggests.
 */
export function LocalePersist({ locale }: { locale: Locale }) {
  React.useEffect(() => {
    document.cookie = [
      `${COOKIE_NAME}=${locale}`,
      "path=/",
      "SameSite=Lax",
      `max-age=${ONE_YEAR}`,
    ].join("; ");
  }, [locale]);

  return null;
}
