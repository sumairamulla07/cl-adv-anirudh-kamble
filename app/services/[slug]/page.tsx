import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, FileText, Phone, CheckCircle } from "lucide-react";
import { services } from "@/lib/servicesData";
import ServiceBackBar from "@/components/ServiceBackBar";
import ServiceOtherLinks from "@/components/ServiceOtherLinks";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Adv. Anirudh Kamble – Pune`,
    description: service.shortDesc,
    alternates: { canonical: `https://advanirudhkamble.com/services/${slug}` },
  };
}

const INK = "hsl(38,28%,12%)";
const INK2 = "hsl(36,24%,18%)";
const CREAM = "hsl(40,33%,96%)";
const CREAM2 = "hsl(40,28%,92%)";
const GOLD = "hsl(38,52%,51%)";
const MUTED = "hsl(35,18%,48%)";
const BORDER = "rgba(184,149,80,0.18)";

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div style={{ background: CREAM, minHeight: "100vh" }}>

      <ServiceBackBar title={service.title} />

      {/* Hero */}
      <section style={{ background: INK, padding: "4rem 0 3.5rem" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div style={{ fontSize: "2.5rem", marginBottom: "1.2rem" }}>{service.icon}</div>
          <div style={{
            fontFamily: "'Jost', sans-serif", fontSize: "0.58rem",
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: GOLD, marginBottom: "0.9rem",
          }}>
            Legal Services · Pune & Pimpri Chinchwad
          </div>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
            fontWeight: 300, color: CREAM, lineHeight: 1.1,
            marginBottom: "0.9rem",
          }}>
            {service.title}
          </h1>
          <p style={{
            fontFamily: "'Jost', sans-serif", fontSize: "0.75rem",
            color: "hsl(35,18%,52%)", lineHeight: 1.7,
            maxWidth: 520,
          }}>
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12" style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "3rem", alignItems: "start" }} className="max-w-6xl mx-auto px-5 sm:px-8 py-12 max-lg:block">

        {/* Left */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

          {/* Overview */}
          <section>
            <div style={{ width: "2rem", height: "1px", background: GOLD, marginBottom: "1.2rem" }} />
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 400, color: INK, marginBottom: "1rem" }}>
              Overview
            </h2>
            {service.overview.split("\n\n").map((para, i) => (
              <p key={i} style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.83rem", lineHeight: 1.9, color: "hsl(38,28%,28%)", marginBottom: "0.9rem" }}>
                {para}
              </p>
            ))}
            <blockquote style={{
              borderLeft: `2px solid ${GOLD}`,
              paddingLeft: "1.2rem",
              margin: "1.5rem 0 0",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.1rem", fontStyle: "italic",
              color: INK2, lineHeight: 1.6,
            }}>
              "{service.quote}"
              <footer style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: MUTED, marginTop: "0.6rem", fontStyle: "normal" }}>
                — Advocate Anirudh Kamble · 24 Years of Practice
              </footer>
            </blockquote>
          </section>

          {/* Documents we handle */}
          {service.documents && service.documents.length > 0 && (
            <section>
              <div style={{ width: "2rem", height: "1px", background: GOLD, marginBottom: "1.2rem" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 400, color: INK, marginBottom: "0.4rem" }}>
                Documents & Services We Handle
              </h2>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: MUTED, marginBottom: "1.5rem" }}>
                Each document is individually prepared to reflect your specific transaction, relationship, and legal requirements.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {service.documents.map((doc, i) => (
                  <div key={i} style={{
                    padding: "1.2rem 1.4rem",
                    borderBottom: `1px solid ${BORDER}`,
                    borderLeft: `1px solid ${BORDER}`,
                    borderRight: `1px solid ${BORDER}`,
                    borderTop: i === 0 ? `1px solid ${BORDER}` : "none",
                    background: i % 2 === 0 ? "#fff" : CREAM,
                  }}>
                    <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                      <span style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "0.75rem", fontWeight: 600,
                        color: GOLD, minWidth: "1.8rem", marginTop: "1px",
                      }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", fontWeight: 500, color: INK, marginBottom: "0.3rem" }}>
                          {doc.name}
                        </div>
                        <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: MUTED, lineHeight: 1.75 }}>
                          {doc.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* What we do */}
          <section>
            <div style={{ width: "2rem", height: "1px", background: GOLD, marginBottom: "1.2rem" }} />
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 400, color: INK, marginBottom: "1.2rem" }}>
              How We Can Help You
            </h2>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {service.whatWeDo.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <CheckCircle style={{ width: 15, height: 15, color: GOLD, flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "hsl(38,28%,28%)", lineHeight: 1.7 }}>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Process */}
          <section>
            <div style={{ width: "2rem", height: "1px", background: GOLD, marginBottom: "1.2rem" }} />
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 400, color: INK, marginBottom: "1.5rem" }}>
              Our Process
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {service.process.map((step, i) => (
                <div key={i} style={{ display: "flex", gap: "1.5rem", paddingBottom: "1.5rem", position: "relative" }}>
                  {i < service.process.length - 1 && (
                    <div style={{ position: "absolute", left: "1.1rem", top: "2.2rem", bottom: 0, width: "1px", background: BORDER }} />
                  )}
                  <div style={{
                    width: 36, height: 36, flexShrink: 0,
                    background: INK, border: `1px solid ${GOLD}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Cormorant Garamond', serif", fontSize: "0.75rem",
                    color: GOLD, fontWeight: 600, zIndex: 1,
                  }}>
                    {step.step}
                  </div>
                  <div style={{ paddingTop: "0.4rem" }}>
                    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", fontWeight: 500, color: INK, marginBottom: "0.3rem" }}>
                      {step.title}
                    </div>
                    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.77rem", color: MUTED, lineHeight: 1.8 }}>
                      {step.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Documents required */}
          <section style={{ background: CREAM2, padding: "1.8rem 2rem", border: `1px solid ${BORDER}` }}>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1rem" }}>
              <FileText style={{ width: 18, height: 18, color: GOLD }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 400, color: INK }}>
                Documents You Need to Bring
              </h2>
            </div>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {service.docsRequired.map((doc, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: GOLD, flexShrink: 0, marginTop: 6 }} />
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: "hsl(38,28%,32%)", lineHeight: 1.7 }}>{doc}</span>
                </li>
              ))}
            </ul>
          </section>

        </div>

        {/* Right sidebar */}
        <aside style={{ display: "flex", flexDirection: "column", gap: "1.2rem", position: "sticky", top: "6rem" }} className="max-lg:mt-8">

          {/* Timeline */}
          <div style={{ background: INK, padding: "1.6rem", border: `1px solid rgba(184,149,80,0.2)` }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.8rem" }}>
              <Clock style={{ width: 15, height: 15, color: GOLD }} />
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD }}>Timeline</span>
            </div>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: "hsl(40,28%,75%)", lineHeight: 1.8 }}>
              {service.timeline}
            </p>
          </div>

          {/* CTA */}
          <div style={{ background: "#fff", padding: "1.6rem", border: `1px solid ${BORDER}` }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 400, color: INK, marginBottom: "0.6rem" }}>
              Discuss Your Matter
            </h3>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: MUTED, lineHeight: 1.75, marginBottom: "1.2rem" }}>
              Get a clear, honest legal opinion on your specific situation from Advocate Anirudh Kamble.
            </p>
            <Link href="/contact" className="btn-gold" style={{ width: "100%", justifyContent: "center", display: "flex" }}>
              Schedule Appointment
            </Link>
            <a href="tel:9922836682" style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
              marginTop: "0.75rem",
              fontFamily: "'Jost', sans-serif", fontSize: "0.65rem",
              letterSpacing: "0.12em", color: MUTED, textDecoration: "none",
            }}>
              <Phone style={{ width: 12, height: 12 }} /> 9922836682
            </a>
          </div>

          {/* Other services */}
          <div style={{ padding: "1.4rem", border: `1px solid ${BORDER}` }}>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, marginBottom: "0.8rem" }}>
              Other Services
            </div>
            <ServiceOtherLinks currentSlug={slug} />
          </div>

        </aside>
      </div>

      {/* Bottom CTA */}
      <section style={{ background: INK2, padding: "3.5rem 0", textAlign: "center", borderTop: `1px solid rgba(184,149,80,0.1)` }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div style={{ width: "2rem", height: "1px", background: GOLD, margin: "0 auto 1.4rem" }} />
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 300, color: CREAM, marginBottom: "0.8rem" }}>
            Ready to Proceed?
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: MUTED, maxWidth: 420, margin: "0 auto 1.8rem", lineHeight: 1.85 }}>
            Schedule an appointment with Advocate Anirudh Kamble for a clear, professional assessment of your matter.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-gold">Schedule Appointment</Link>
            <Link href="/services" className="btn-outline-gold">
              <ArrowLeft style={{ width: 14, height: 14 }} /> All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}