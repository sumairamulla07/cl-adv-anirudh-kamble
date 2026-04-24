"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blogData";

const INK  = "hsl(38,28%,12%)";
const INK2 = "hsl(36,24%,18%)";
const GOLD = "hsl(38,52%,51%)";
const MUTED = "hsl(35,18%,48%)";
const BORDER = "rgba(184,149,80,0.15)";

export default function BlogGrid() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div style={{ background: INK }}>
      {/* Section header */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8" style={{ paddingTop: "5rem", paddingBottom: "2.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.9rem" }}>
          <span style={{ display: "block", width: "2rem", height: "1px", background: GOLD }} />
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.58rem", letterSpacing: "0.26em", textTransform: "uppercase", color: GOLD }}>
            Legal Insights
          </span>
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 300, color: "hsl(40,33%,96%)", lineHeight: 1.1 }}>
          Recent Articles
        </h2>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          borderTop: `1px solid ${BORDER}`,
          borderLeft: `1px solid ${BORDER}`,
          marginLeft: 0, marginRight: 0,
        }}
        className="max-md:grid-cols-1"
      >
        {blogPosts.slice(0, 2).map((post, i) => {
          const isHovered = hovered === i;
          return (
            <div
              key={post.slug}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                borderRight: `1px solid ${BORDER}`,
                borderBottom: `1px solid ${BORDER}`,
                background: isHovered ? INK2 : INK,
                transition: "background 0.3s ease",
                overflow: "hidden",
              }}
            >
              {/* Animated gold line */}
              <div style={{
                position: "absolute",
                top: 0, left: 0,
                width: "2px",
                height: isHovered ? "100%" : "0%",
                background: `linear-gradient(to bottom, ${GOLD}, transparent)`,
                transition: "height 0.4s ease",
                zIndex: 1,
              }} />

              <Link href={`/blog/${post.slug}`} style={{ display: "block", padding: "2.4rem 2.2rem", textDecoration: "none" }}>
                {/* Category */}
                <span style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase",
                  color: isHovered ? "hsl(39,52%,63%)" : GOLD,
                  transition: "color 0.3s",
                }}>
                  {post.category}
                </span>

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.25rem", fontWeight: 400,
                  color: isHovered ? "hsl(40,33%,96%)" : "hsl(40,33%,84%)",
                  margin: "0.65rem 0 0.75rem", lineHeight: 1.3,
                  transition: "color 0.3s",
                }}>
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.77rem", lineHeight: 1.85,
                  color: isHovered ? "hsl(35,18%,58%)" : MUTED,
                  marginBottom: "1.4rem",
                  transition: "color 0.3s",
                }}>
                  {post.excerpt.slice(0, 160)}…
                </p>

                {/* Read article */}
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: "0.4rem",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.58rem", letterSpacing: "0.17em", textTransform: "uppercase",
                  color: GOLD,
                  borderBottom: `1px solid rgba(184,149,80,${isHovered ? "0.6" : "0.25"})`,
                  paddingBottom: "0.15rem",
                  transition: "border-color 0.3s",
                }}>
                  Read Article
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

      {/* All Articles — centered below */}
      <div style={{ textAlign: "center", padding: "2.5rem 0 5rem" }}>
        <Link
          href="/blog"
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
          All Articles <ArrowRight style={{ width: 13, height: 13 }} />
        </Link>
      </div>
    </div>
  );
}