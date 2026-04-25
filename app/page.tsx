import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import BlogGrid from "@/components/BlogGrid";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Advocate Anirudh Kamble | Property Lawyer & Notary – Pune",
  description: "Protect your property rights with Pune's most trusted property lawyer. Advocate Anirudh Kamble offers 24+ years of expertise in property documentation, title verification, sale deed drafting, and RERA compliance. Call 9922836682.",
  alternates: { canonical: "https://advanirudhkamble.com" },
};

const INK    = "hsl(38,28%,12%)";
const INK2   = "hsl(36,24%,18%)";
const INK3   = "hsl(35,20%,26%)";
const CREAM  = "hsl(40,33%,96%)";
const CREAM2 = "hsl(40,28%,92%)";
const GOLD   = "hsl(38,52%,51%)";
const MUTED  = "hsl(35,18%,48%)";
const BORDER = "rgba(184,149,80,0.18)";

const stats = [
  { value: "24+", label: "Years of Practice" },
  { value: "15+", label: "Legal Service Areas" },
  { value: "2",   label: "Jurisdictions – Pune & PCNTDA / PMRDA" },
  { value: "4",   label: "Academic Qualifications" },
];

const coreAreas = [
  {
    label: "Property Documentation & Title Work",
    desc: "Preparation and structuring of Agreement to Sale, Sale Deed, Gift Deed, Lease Deed, Deemed Conveyance, along with detailed title analysis and verification. The work is centred on accuracy, legal compliance, and long-term enforceability of rights.",
  },
  {
    label: "Commercial Contracts & Builder Agreements",
    desc: "Drafting and review of development agreements, builder-buyer agreements, joint ventures, MOUs, NDAs, service agreements, and other commercial contracts. Emphasis is placed on clear allocation of rights and obligations, and reducing contractual ambiguity.",
  },
  {
    label: "Consultation & Transaction Advisory",
    desc: "Legal opinions and pre-transaction advisory, including assessment of title, documentation, and transaction structure, with the objective of identifying and addressing potential issues at an early stage.",
  },
  {
    label: "Litigation Support",
    desc: "Assistance in matters relating to property title disputes, breach of contract, and specific performance, particularly where detailed examination of title and documentation is involved.",
  },
];

const approach = [
  "Detailed scrutiny of ownership and title chain",
  "Accurate stamp duty and registration guidance",
  "Careful drafting to safeguard client interests",
  "End-to-end assistance at Sub-Registrar Office",
  "Clear and practical legal advice prior to execution",
];

export default function HomePage() {
  return (
    <div>

      {/* ── HERO ─────────────────────────── */}
      <HeroSection />

      {/* ── STATS BAR ────────────────────── */}
      <div style={{ background: INK3, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div
          className="max-w-6xl mx-auto max-sm:grid-cols-2"
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{ padding: "1.4rem 1rem", textAlign: "center", borderRight: i < 3 ? `1px solid ${BORDER}` : "none" }}
              className="max-sm:even:border-r-0"
            >
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 300, color: GOLD, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.55rem", letterSpacing: "0.17em", textTransform: "uppercase", color: MUTED, marginTop: "0.3rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ADVOCATE INTRO ───────────────── */}
      <section style={{ background: CREAM, padding: "5rem 0" }}>
        <div
          className="max-w-6xl mx-auto px-5 sm:px-8 max-lg:grid-cols-1"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}
        >
          {/* Photo */}
          <AnimatedSection style={{ position: "relative" }}>
            <div style={{ position: "relative", maxWidth: 400 }}>
              {/* Corner accents */}
              <div style={{ position: "absolute", top: -12, left: -12, width: 40, height: 40, borderTop: `1px solid ${GOLD}`, borderLeft: `1px solid ${GOLD}` }} />
              <div style={{ position: "absolute", bottom: -12, right: -12, width: 40, height: 40, borderBottom: `1px solid ${GOLD}`, borderRight: `1px solid ${GOLD}` }} />
              <div style={{ background: CREAM2, aspectRatio: "3/4", display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                <Image
                  src="/assets/Anirudh-kamble.png"
                  alt="Advocate Anirudh Kamble – Property Lawyer Pune"
                  width={400} height={533}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                  priority
                />
              </div>
              {/* Floating credential card */}
              <div style={{ position: "absolute", bottom: "1.5rem", left: "-1.5rem", background: INK, padding: "1.1rem 1.4rem", border: `1px solid rgba(184,149,80,0.25)`, maxWidth: 220 }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 300, color: GOLD, lineHeight: 1 }}>24</div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.55rem", letterSpacing: "0.18em", textTransform: "uppercase", color: MUTED, marginTop: "0.2rem" }}>Years of Practice</div>
                <div style={{ width: "1.2rem", height: "1px", background: GOLD, margin: "0.6rem 0" }} />
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.62rem", color: "hsl(40,28%,75%)", lineHeight: 1.6 }}>B.A. Economics · LL.B. · D.T.L. · D.H.L.</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Bio + Core Areas */}
          <AnimatedSection delay={0.15}>
            <div className="eyebrow mb-3">Advocate & Notary · Since 2001</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)", fontWeight: 300, color: INK, lineHeight: 1.1, marginBottom: "1.2rem" }}>
              Trusted Legal Expertise<br />in Property Law
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.83rem", lineHeight: 1.9, color: "hsl(38,28%,32%)", marginBottom: "0.9rem" }}>
              With over 24 years of legal practice, we are engaged in property and commercial transaction work in Pune and Pimpri Chinchwad, including title analysis, documentation, and contract structuring, with a consistent focus on clarity and risk management.
            </p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.83rem", lineHeight: 1.9, color: "hsl(38,28%,32%)", marginBottom: "2rem" }}>
              Supported by an academic background in Economics and Law — B.A. (Economics) from Nowrosjee Wadia College and LL.B., D.T.L., D.H.L. from Symbiosis Law College and IALS, Pune — the practice reflects a disciplined approach grounded in both legal principles and practical application.
            </p>

            {/* Core Areas of Work */}
            <div style={{ marginBottom: "0.6rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span style={{ display: "block", width: "1.5rem", height: "1px", background: GOLD }} />
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD }}>
                Core Areas of Work
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0", marginBottom: "2rem", border: `1px solid ${BORDER}` }}>
              {coreAreas.map((area, i) => (
                <div
                  key={i}
                  style={{
                    padding: "1rem 1.2rem",
                    borderBottom: i < coreAreas.length - 1 ? `1px solid ${BORDER}` : "none",
                    background: i % 2 === 0 ? "#fff" : CREAM,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.78rem", color: GOLD, fontWeight: 600, flexShrink: 0, marginTop: "1px", minWidth: "1.4rem" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: INK, marginBottom: "0.3rem" }}>
                        {area.label}
                      </div>
                      <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.73rem", color: MUTED, lineHeight: 1.75 }}>
                        {area.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-outline-gold">
              About Adv. Kamble <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── INTEGRATED LEGAL SERVICES BANNER ─────────────────────────────── */}
      <div style={{ background: INK2, borderTop: `1px solid rgba(184,149,80,0.12)`, borderBottom: `1px solid rgba(184,149,80,0.12)` }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8" style={{ padding: "2.2rem 0", display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
          <span style={{ display: "block", width: "2rem", height: "1px", background: GOLD, flexShrink: 0 }} />
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: "hsl(40,28%,72%)", lineHeight: 1.85, maxWidth: 820 }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontStyle: "italic", color: "hsl(40,28%,85%)", marginRight: "0.5rem" }}>
              Integrated Legal Services —
            </span>
            Providing end-to-end legal support across property transactions, the practice includes documentation and registration, title due diligence, commercial contract structuring, and litigation support, with a consistent emphasis on precision, compliance, and risk minimisation.
          </p>
        </div>
      </div>

      {/* ── SERVICES GRID ────────────────── */}
      <ServicesGrid />

      {/* ── WHY US ───────────────────────── */}
      <section style={{ background: CREAM, padding: "5rem 0" }}>
        <div
          className="max-w-6xl mx-auto px-5 sm:px-8 max-md:grid-cols-1"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}
        >
          <AnimatedSection>
            <div className="eyebrow mb-3" style={{ color: GOLD }}>Our Approach</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.7rem, 2.5vw, 2.4rem)", fontWeight: 300, color: INK, marginBottom: "1rem", lineHeight: 1.15 }}>
              Preventive, Client-Focused Legal Practice
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", lineHeight: 1.85, color: MUTED, marginBottom: "1.8rem" }}>
              The practice follows a preventive approach — aimed at avoiding disputes before they arise through meticulous documentation and thorough scrutiny.
            </p>
            <blockquote style={{ borderLeft: `2px solid ${GOLD}`, paddingLeft: "1rem", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", fontStyle: "italic", color: "hsl(41, 27%, 20%)", lineHeight: 1.65 }}>
              &ldquo;Strong documentation today is the best protection against disputes tomorrow.&rdquo;
              <footer style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.58rem", letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginTop: "0.5rem", fontStyle: "normal" }}>
                — Advocate Anirudh Kamble
              </footer>
            </blockquote>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {approach.map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "0.75rem", padding: "0.85rem 1rem", background: "rgba(255,255,255,0.04)", border: `1px solid rgba(184,149,80,0.1)` }}>
                  <CheckCircle style={{ width: 15, height: 15, color: GOLD, flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", color: "hsl(40, 20%, 15%)", lineHeight: 1.7 }}>{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* ── BLOG PREVIEW ─────────────────── */}
      <BlogGrid />

      {/* ── CTA ──────────────────────────── */}
      <section style={{ background: INK2, padding: "4.5rem 0", textAlign: "center" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <AnimatedSection>
            <div style={{ width: "2rem", height: "1px", background: GOLD, margin: "0 auto 1.5rem" }} />
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 300, color: CREAM, marginBottom: "0.9rem" }}>
              Your Reliable Legal Partner
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", lineHeight: 1.85, color: MUTED, maxWidth: 460, margin: "0 auto 2rem" }}>
              With 24 years of experience in property documentation and registration, Advocate Anirudh Kamble offers dependable legal support from initial drafting to final execution.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-gold">Schedule an Appointment</Link>
              <a href="tel:9922836682" className="btn-outline-gold">
                <Phone className="w-3.5 h-3.5" /> 9922836682
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
