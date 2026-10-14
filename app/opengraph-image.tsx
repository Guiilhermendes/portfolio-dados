import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(ellipse at top left, #0f2d2a 0%, #0a0a0b 55%)",
          color: "#e8f0ef",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "rgba(45, 212, 191, 0.15)",
              color: "#2dd4bf",
              fontSize: 32,
            }}
          >
            {"{ }"}
          </div>
          <div
            style={{
              fontFamily: "ui-monospace, monospace",
              color: "#2dd4bf",
              letterSpacing: 4,
              textTransform: "uppercase",
              fontSize: 20,
            }}
          >
            Senior Data Engineer
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
            {site.shortName}
          </div>
          <div style={{ fontSize: 28, color: "#9ca3af", maxWidth: 900 }}>
            Python · PySpark · Databricks · AWS Glue · Lambda · S3 · Athena
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#6b7280",
            fontSize: 20,
          }}
        >
          <div>{site.location}</div>
          <div style={{ fontFamily: "ui-monospace, monospace" }}>
            portfolio.dados
          </div>
        </div>
      </div>
    ),
    size
  );
}
