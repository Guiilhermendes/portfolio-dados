import { NextResponse, type NextRequest } from "next/server";

import { LOCALES, type Locale } from "@/lib/i18n";

const COOKIE_NAME = "NEXT_LOCALE";

function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/**
 * Detects the preferred locale for a request:
 * 1. Explicit user choice persisted in a cookie (set by the language toggle)
 * 2. Browser Accept-Language header (reflects the OS/system language)
 *    - Any Portuguese variant (pt, pt-BR, pt-PT, ...) → "pt"
 *    - Anything else → "en"
 */
function detectLocale(req: NextRequest): Locale {
  const cookieLocale = req.cookies.get(COOKIE_NAME)?.value;
  if (isLocale(cookieLocale)) return cookieLocale;

  const header = req.headers.get("accept-language") ?? "";
  // Accept-Language: "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
  const languages = header
    .split(",")
    .map((entry) => entry.split(";")[0].trim().toLowerCase())
    .filter(Boolean);

  for (const lang of languages) {
    if (lang === "pt" || lang.startsWith("pt-")) return "pt";
    if (lang === "en" || lang.startsWith("en-")) return "en";
  }

  // Fallback: English, as requested.
  return "en";
}

export function middleware(req: NextRequest) {
  const locale = detectLocale(req);
  const url = new URL(`/${locale}`, req.url);
  const response = NextResponse.redirect(url);
  // Persist the detected locale so repeated visits to "/" stay consistent
  // even if the user later switches languages (handled by the toggle).
  response.cookies.set(COOKIE_NAME, locale, {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365, // 1 year
  });
  return response;
}

/**
 * Only runs on the root URL. All other routes (/pt, /en, /api/*, assets, ...)
 * are served normally.
 */
export const config = {
  matcher: "/",
};
