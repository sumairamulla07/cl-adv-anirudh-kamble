"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/servicesData";

const GOLD   = "hsl(38,52%,51%)";
const BORDER = "rgba(184,149,80,0.18)";

export default function ServiceOtherLinks({ currentSlug }: { currentSlug: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
      {services.filter(s => s.slug !== currentSlug).slice(0, 4).map(s => (
        <Link
          key={s.slug}
          href={`/services/${s.slug}`}
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "0.5rem 0",
            borderBottom: `1px solid ${BORDER}`,
            fontFamily: "'Jost', sans-serif", fontSize: "0.75rem",
            color: "hsl(38,28%,35%)", textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
          onMouseLeave={e => (e.currentTarget.style.color = "hsl(38,28%,35%)")}
        >
          <span>{s.title}</span>
          <ArrowRight style={{ width: 12, height: 12, flexShrink: 0 }} />
        </Link>
      ))}
    </div>
  );
}