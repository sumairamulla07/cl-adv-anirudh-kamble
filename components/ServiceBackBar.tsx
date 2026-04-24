"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const MUTED  = "hsl(35,18%,48%)";
const GOLD   = "hsl(38,52%,51%)";
const BORDER = "rgba(184,149,80,0.18)";

export default function ServiceBackBar({ title }: { title: string }) {
  return (
    <div style={{
      position: "sticky", top: 64, zIndex: 40,
      background: "hsla(40,33%,96%,0.95)", backdropFilter: "blur(12px)",
      borderBottom: `1px solid ${BORDER}`,
      padding: "0.65rem 0",
    }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <Link
          href="/services"
          style={{
            display: "flex", alignItems: "center", gap: "0.5rem",
            fontFamily: "'Jost', sans-serif", fontSize: "0.62rem",
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: MUTED, textDecoration: "none", transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
          onMouseLeave={e => (e.currentTarget.style.color = MUTED)}
        >
          <ArrowLeft style={{ width: 13, height: 13 }} />
          All Services
        </Link>
        <span style={{ width: 1, height: 14, background: BORDER }} />
        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.62rem", color: "hsl(35,18%,60%)" }}>
          {title}
        </span>
      </div>
    </div>
  );
}