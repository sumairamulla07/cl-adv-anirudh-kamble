"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

const badges = [
  "Property Documentation",
  "Title Verification",
  "Deemed Conveyance",
  "Contract Drafting",
  "Notary Services",
];

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "hsl(38,28%,12%)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        paddingTop: "64px",
      }}
      className="max-md:grid-cols-1"
    >
      {/* LEFT */}
      <div
        style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "5rem 3.5rem 5rem 4rem",
        }}
        className="max-md:px-6 max-md:py-16"
      >
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          className="eyebrow mb-6"
          style={{ color: "hsl(38,52%,51%)", fontSize: "0.58rem" }}
        >
          Advocate &amp; Notary · Pune
        </motion.div>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.4rem, 4vw, 4rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "hsl(40,33%,96%)",
            marginBottom: "1.2rem",
          }}
        >
          Trusted Legal Counsel
          <br />
          in <em style={{ fontStyle: "italic", color: "hsl(39,52%,63%)" }}>Property Law</em>
        </motion.h1>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={2}
          style={{
            fontSize: "0.85rem", lineHeight: 1.85,
            color: "hsl(35,18%,52%)",
            maxWidth: "420px", marginBottom: "2rem",
            fontFamily: "'Jost', sans-serif", fontWeight: 300,
          }}
        >
          Over 24 years of dedicated practice in property documentation, registration,
          and contractual legal services across Pune and Pimpri Chinchwad.
        </motion.p>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginBottom: "2.5rem" }}
        >
          {badges.map((b) => (
            <span
              key={b}
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.55rem", letterSpacing: "0.14em", textTransform: "uppercase",
                padding: "0.28rem 0.75rem",
                border: "1px solid rgba(184,149,80,0.25)",
                color: "hsl(40,56%,86%)",
              }}
            >
              {b}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={4}
          style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}
        >
          <Link href="/contact" className="btn-gold">
            Schedule an Appointment <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href="tel:9922836682"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase",
              color: "hsl(35,18%,52%)", textDecoration: "none",
              display: "flex", alignItems: "center", gap: "0.45rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "hsl(40,33%,96%)")}
            onMouseLeave={e => (e.currentTarget.style.color = "hsl(35,18%,52%)")}
          >
            <Phone className="w-3.5 h-3.5" /> 9922836682
          </a>
        </motion.div>
      </div>

      {/* RIGHT — decorative panel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        style={{
          background: "hsl(36,24%,18%)",
          position: "relative", overflow: "hidden",
        }}
        className="max-md:hidden"
      >
        {/* Grid pattern */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage:
            "linear-gradient(rgba(184,149,80,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(184,149,80,0.06) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }} />

        {/* Corner accents */}
        <div style={{ position: "absolute", top: "2rem", right: "2rem", width: 56, height: 56, borderTop: "1px solid rgba(184,149,80,0.28)", borderRight: "1px solid rgba(184,149,80,0.28)" }} />
        <div style={{ position: "absolute", bottom: "2rem", left: "2rem", width: 56, height: 56, borderBottom: "1px solid rgba(184,149,80,0.28)", borderLeft: "1px solid rgba(184,149,80,0.28)" }} />

        {/* Watermark ⚖ */}
        <div style={{
          position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "18rem", color: "hsl(38,52%,51%)", opacity: 0.04,
          userSelect: "none", lineHeight: 1, pointerEvents: "none",
        }}>
          ⚖
        </div>

        {/* Stat card */}
        <div style={{
          position: "absolute", bottom: "2.5rem", left: "2.5rem", right: "2.5rem",
          border: "1px solid rgba(184,149,80,0.2)",
          background: "rgba(15,14,12,0.7)", backdropFilter: "blur(12px)",
          padding: "2rem 2.2rem",
        }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "4rem", fontWeight: 300, color: "hsl(38,52%,51%)", lineHeight: 1 }}>24</div>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.58rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "hsl(35,18%,48%)", marginTop: "0.2rem", marginBottom: "1.2rem" }}>Years of Practice</div>
          <div style={{ width: "1.8rem", height: "1px", background: "hsl(38,52%,51%)", marginBottom: "1.1rem" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {["B.A. (Economics), Nowrosjee Wadia College", "LL.B., Symbiosis Law College, Pune", "D.T.L. & D.H.L., Symbiosis / IALS"].map(q => (
              <div key={q} style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", color: "hsl(40,28%,80%)", display: "flex", alignItems: "center", gap: "0.55rem" }}>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "hsl(38,52%,51%)", flexShrink: 0 }} />
                {q}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}