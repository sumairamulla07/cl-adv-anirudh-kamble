"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/servicesData";

const INK  = "hsl(38,28%,12%)";
const INK2 = "hsl(36,24%,18%)";
const GOLD = "hsl(38,52%,51%)";
const MUTED = "hsl(35,18%,48%)";
const BORDER = "rgba(184,149,80,0.15)";

export default function ServicesGrid() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div style={{ background: INK }}>
      {/* Section header */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8" style={{ paddingTop: "5rem", paddingBottom: "2.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.9rem" }}>
          <span style={{ display: "block", width: "2rem", height: "1px", background: GOLD }} />
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: GOLD }}>
            Core Practice Areas
          </span>
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 300, color: "hsl(40,33%,96%)", lineHeight: 1.1, marginBottom: "0.6rem" }}>
          Comprehensive Legal
          <br /><em style={{ fontStyle: "italic", color: GOLD }}>Solutions</em>
        </h2>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", color: MUTED, maxWidth: 460, lineHeight: 1.85 }}>
          We provide end-to-end property documentation and registration services tailored to your needs.
        </p>
      </div>

      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          borderTop: `1px solid ${BORDER}`,
          borderLeft: `1px solid ${BORDER}`,
        }}
        className="max-md:grid-cols-1 max-lg:grid-cols-2"
      >
        {services.map((s, i) => {
          const isHovered = hovered === i;
          return (
            <div
              key={s.slug}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                borderRight: `1px solid ${BORDER}`,
                borderBottom: `1px solid ${BORDER}`,
                background: isHovered ? INK2 : INK,
                transition: "background 0.3s ease",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              {/* Animated gold line running down on hover */}
              <div style={{
                position: "absolute",
                top: 0, left: 0,
                width: "2px",
                height: isHovered ? "100%" : "0%",
                background: `linear-gradient(to bottom, ${GOLD}, transparent)`,
                transition: "height 0.4s ease",
                zIndex: 1,
              }} />

              <Link href={`/services/${s.slug}`} style={{ display: "flex", flexDirection: "column", height: "100%", padding: "2.2rem 2rem", textDecoration: "none" }}>
                {/* Icon */}
                <div style={{ fontSize: "1.5rem", marginBottom: "1.2rem", opacity: isHovered ? 1 : 0.7, transition: "opacity 0.3s" }}>
                  {s.icon}
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.15rem", fontWeight: 400,
                  color: isHovered ? "hsl(39,52%,63%)" : "hsl(40,33%,88%)",
                  marginBottom: "0.7rem", lineHeight: 1.25,
                  transition: "color 0.3s",
                }}>
                  {s.title}
                </h3>

                {/* Desc */}
                <p style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.76rem", lineHeight: 1.8,
                  color: isHovered ? "hsl(35,18%,62%)" : "hsl(35,18%,46%)",
                  flex: 1, marginBottom: "1.4rem",
                  transition: "color 0.3s",
                }}>
                  {s.shortDesc.slice(0, 130)}…
                </p>

                {/* Know more */}
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: "0.35rem",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.58rem", letterSpacing: "0.17em", textTransform: "uppercase",
                  color: GOLD,
                  borderBottom: `1px solid rgba(184,149,80,${isHovered ? "0.6" : "0.25"})`,
                  paddingBottom: "0.15rem", width: "fit-content",
                  transition: "border-color 0.3s",
                }}>
                  Know More
                  <ArrowRight style={{
                    width: 11, height: 11,
                    transform: isHovered ? "translateX(3px)" : "translateX(0)",
                    transition: "transform 0.25s",
                  }} />
                </span>
              </Link>
            </div>
          );
        })}
      </div>

      {/* View All Services — centered below cards */}
      <div style={{ textAlign: "center", padding: "2.5rem 0 5rem" }}>
        <Link
          href="/services"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.63rem", letterSpacing: "0.18em", textTransform: "uppercase",
            padding: "0.8rem 1.9rem",
            border: `1px solid rgba(184,149,80,0.4)`,
            color: GOLD, textDecoration: "none",
            transition: "background 0.22s, border-color 0.22s",
          }}
          className="hover:bg-gold/10 hover:border-gold"
        >
          View All Services <ArrowRight style={{ width: 13, height: 13 }} />
        </Link>
      </div>
    </div>
  );
}