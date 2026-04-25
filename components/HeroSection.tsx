"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const badges = [
  "Property Documentation",
  "Contract Drafting",
  "Commercial Agreements",
  "PCNTDA Transfers",
  "PMRDA Transfers",
  "Litigation",
  "Deemed Conveyance",
];

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "hsl(38,28%,12%)",
        paddingTop: "64px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        className="max-w-6xl mx-auto px-5 sm:px-8 w-full"
        style={{ paddingTop: "3.5rem", paddingBottom: "4rem" }}
      >

        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          style={{ display: "flex", alignItems: "center", gap: "0.9rem", marginBottom: "2rem" }}
        >
          <span style={{ display: "block", width: "3.5rem", height: "1px", background: "hsl(38,52%,51%)" }} />
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "hsl(38,52%,51%)",
            }}
          >
            Trusted Legal Expertise Since 2001
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(3rem, 7vw, 6.5rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "hsl(40,33%,93%)",
            marginBottom: "1.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          Property Law &amp;{" "}
          <br />
          <em style={{ fontStyle: "italic", color: "hsl(38,52%,51%)" }}>
            Legal Documentation
          </em>
          <br />
          You Can Rely On
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.88rem",
            fontWeight: 300,
            lineHeight: 1.9,
            color: "hsl(35,18%,48%)",
            maxWidth: 480,
            marginBottom: "2.8rem",
          }}
        >
          Over 24 years of dedicated practice in property documentation, registration,
          contract drafting, commercial agreements, PCNTDA &amp; PMRDA transfers, and
          litigation — serving clients across Pune and Pimpri Chinchwad.
        </motion.p>

        {/* Badge pills */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "3rem" }}
        >
          {badges.map((b) => (
            <span
              key={b}
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.58rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                padding: "0.4rem 0.9rem",
                border: "1px solid rgba(184,149,80,0.3)",
                color: "hsl(40,56%,82%)",
                background: "rgba(184,149,80,0.05)",
              }}
            >
              {b}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem" }}
        >
          <Link href="/contact" className="btn-gold">
            Schedule a Consultation
          </Link>
          <Link
            href="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.63rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "hsl(35,18%,48%)",
              textDecoration: "none",
            }}
          >
            View Services <ArrowRight style={{ width: 14, height: 14 }} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
