"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "24+", label: "Years of Practice" },
  { value: "70%", label: "Property Documentation" },
  { value: "20%", label: "Commercial Contracts" },
  { value: "10%", label: "Notary & Consultation" },
];

export default function StatsSection() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        borderTop: "1px solid rgba(184,149,80,0.15)",
        borderBottom: "1px solid rgba(184,149,80,0.15)",
        background: "hsl(35,20%,26%)",
      }}
      className="max-sm:grid-cols-2"
    >
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          style={{
            padding: "1.5rem 1rem",
            textAlign: "center",
            borderRight: i < stats.length - 1 ? "1px solid rgba(184,149,80,0.15)" : "none",
          }}
        >
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 300, color: "hsl(38,52%,51%)", lineHeight: 1 }}>{s.value}</div>
          <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.57rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(35,18%,52%)", marginTop: "0.3rem" }}>{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
}