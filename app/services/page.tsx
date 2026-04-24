import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { services } from "@/lib/servicesData";

export const metadata: Metadata = {
  title: "Legal Services – Property Documentation, Contracts & Litigation | Adv. Anirudh Kamble",
  description: "Comprehensive property documentation, commercial contract drafting, PCNTDA/PMRDA transfers, deemed conveyance, and litigation services in Pune and Pimpri Chinchwad.",
  alternates: { canonical: "https://advanirudhkamble.com/services" },
};

const INK = "hsl(38,28%,12%)";
const INK2 = "hsl(36,24%,18%)";
const CREAM = "hsl(40,33%,96%)";
const CREAM2 = "hsl(40,28%,92%)";
const GOLD = "hsl(38,52%,51%)";
const MUTED = "hsl(35,18%,48%)";
const BORDER = "rgba(184,149,80,0.18)";

const approach = [
  "Detailed scrutiny of ownership and title chain",
  "Accurate stamp duty and registration guidance",
  "Careful drafting to safeguard client interests",
  "End-to-end assistance before the Sub-Registrar Office",
  "Clear and practical legal advice prior to execution",
];

export default function ServicesPage() {
  return (
    <div style={{ background: CREAM }}>

      {/* Hero */}
      <section style={{ background: INK, paddingTop: "calc(64px + 4rem)", paddingBottom: "3.5rem" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="eyebrow mb-4" style={{ color: GOLD }}>Practice Areas</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 300, color: CREAM, lineHeight: 1.1, marginBottom: "1rem" }}>
            Comprehensive Legal
            <br /><em style={{ fontStyle: "italic", color: GOLD }}>Solutions</em>
          </h1>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.83rem", color: MUTED, maxWidth: 500, lineHeight: 1.85 }}>
            From property documentation and commercial contracts to active litigation support — every service is delivered with the precision and experience your matter deserves.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "4rem 0" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: BORDER }} className="max-md:grid-cols-1 max-lg:grid-cols-2">
            {services.map((s, i) => (
              <div key={s.slug} style={{ background: i % 2 === 0 ? "#fff" : CREAM, padding: "2.2rem 2rem", display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>{s.icon}</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 400, color: INK, marginBottom: "0.7rem", lineHeight: 1.3 }}>
                  {s.title}
                </h2>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: MUTED, lineHeight: 1.8, flex: 1, marginBottom: "1.4rem" }}>
                  {s.shortDesc}
                </p>
                <Link
                  href={`/services/${s.slug}`}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    fontFamily: "'Jost', sans-serif", fontSize: "0.6rem",
                    letterSpacing: "0.17em", textTransform: "uppercase",
                    color: GOLD, textDecoration: "none",
                    borderBottom: `1px solid rgba(184,149,80,0.3)`,
                    paddingBottom: "0.2rem", width: "fit-content",
                    transition: "gap 0.2s, border-color 0.2s",
                  }}
                >
                  Know More <ArrowRight style={{ width: 12, height: 12 }} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section style={{ background: INK2, padding: "4rem 0" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 max-md:grid-cols-1 max-w-6xl mx-auto px-5 sm:px-8" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <div className="eyebrow mb-3" style={{ color: GOLD }}>Our Philosophy</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 300, color: CREAM, marginBottom: "0.9rem" }}>
              A Preventive, Client-Focused Approach
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: MUTED, lineHeight: 1.85 }}>
              Every property transaction and commercial agreement carries significant financial and legal implications. Minor errors in drafting or registration can lead to disputes and long-term complications. Our practice is built around preventing such issues before they arise.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {approach.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <CheckCircle style={{ width: 15, height: 15, color: GOLD, flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", color: "hsl(40,28%,78%)", lineHeight: 1.7 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: CREAM2, padding: "3.5rem 0", textAlign: "center", borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div style={{ width: "2rem", height: "1px", background: GOLD, margin: "0 auto 1.4rem" }} />
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 400, color: INK, marginBottom: "0.8rem" }}>
            Your Reliable Legal Partner
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: MUTED, maxWidth: 460, margin: "0 auto 1.8rem", lineHeight: 1.85 }}>
            With 24 years of experience in property documentation and registration, Advocate Anirudh Kamble offers dependable legal support from initial drafting to final execution.
          </p>
          <Link href="/contact" className="btn-gold">Schedule an Appointment</Link>
        </div>
      </section>
    </div>
  );
}