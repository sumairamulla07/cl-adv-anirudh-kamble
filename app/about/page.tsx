import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, BookOpen, Scale, Users, ArrowRight, GraduationCap, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import HeroAnimated from "@/components/HeroAnimated";

export const metadata: Metadata = {
  title: "About Advocate Anirudh Kamble – 24+ Years Property Law Experience",
  description:
    "Advocate Anirudh Kamble – Pune's trusted property lawyer with 24+ years of experience. LL.B from Symbiosis Law College, DTL & DHL qualifications, specializing in property documentation, registration, and real estate law across Pune and Pimpri Chinchwad.",
  alternates: { canonical: "https://advanirudhkamble.com/about" },
  openGraph: {
    title: "About Advocate Anirudh Kamble – Property Lawyer Pune",
    description: "24+ years of legal practice in property documentation, registration, and real estate law in Pune and Pimpri Chinchwad.",
    url: "https://advanirudhkamble.com/about",
  },
};

const qualifications = [
  { degree: "B.A. (Economics)", institution: "Nowrosjee Wadia College, Pune" },
  { degree: "LL.B.", institution: "Symbiosis Law College, Pune" },
  { degree: "Diploma in Taxation Law (D.T.L.)", institution: "Symbiosis Law College, Pune" },
  { degree: "Diploma in Housing Law (D.H.L.)", institution: "Institute of Advanced Legal Studies (IALS), Pune" },
];

const milestones = [
  { year: "2001", text: "Enrolled as Advocate – beginning of dedicated legal practice" },
  { year: "2005", text: "Established independent practice specializing in property documentation & registration" },
  { year: "2010", text: "Expanded practice to cover Deemed Conveyance for Housing Societies" },
  { year: "2015", text: "Recognized as a trusted legal partner for property documentation across Pune & Pimpri Chinchwad" },
  { year: "2024", text: "24+ years of trusted property law practice — and counting" },
];

const values = [
  { icon: Scale, title: "Integrity", desc: "Honest, transparent legal practice with no hidden fees." },
  { icon: Award, title: "24+ Years Expertise", desc: "Specialized in property documentation and registration across Pune." },
  { icon: Users, title: "Client First", desc: "Personalized attention to every case, big or small." },
  { icon: BookOpen, title: "Preventive Approach", desc: "Focused on avoiding disputes before they arise through meticulous drafting." },
];

const approach = [
  "Detailed scrutiny of ownership and title chain",
  "Accurate stamp duty and registration guidance",
  "Careful drafting to safeguard client interests",
  "End-to-end assistance before the Sub-Registrar Office",
  "Clear and practical legal advice prior to execution",
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-navy-dark">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <HeroAnimated>
              <span className="text-gold font-semibold text-sm tracking-wider uppercase">About</span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-gold-light mt-2 mb-6">
                Advocate Anirudh Kamble
              </h1>
              <p className="text-gold-light/70 text-lg leading-relaxed mb-4">
                With over 24 years of dedicated legal practice, Advocate Anirudh Kamble provides reliable, precise, and result-oriented legal services in property documentation and registration across Pune and Pimpri Chinchwad.
              </p>
              <p className="text-gold-light/70 leading-relaxed mb-6">
                Backed by a strong academic foundation and extensive practical experience, the practice combines legal knowledge with real-world insight to deliver legally sound and strategically structured solutions in property and allied legal matters.
              </p>
              <Link href="/contact" className="btn-gold">
                Schedule an Appointment <ArrowRight className="w-5 h-5" />
              </Link>
            </HeroAnimated>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-gold/10 blur-xl" />
                <Image
                  src="/assets/Anirudh-kamble.png"
                  alt="Advocate Anirudh Kamble – Property Lawyer Pune"
                  className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                  width={768}
                  height={1024}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Qualifications */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">Academic Background</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2">Educational Qualifications</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              A strong academic foundation enabling a well-rounded understanding of legal, financial, and regulatory aspects involved in property and contractual transactions.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {qualifications.map((q, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="card-elegant flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <GraduationCap className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-base">{q.degree}</h3>
                  <p className="text-muted-foreground text-sm mt-0.5">{q.institution}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted">
        <div className="container-narrow mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Why Choose Us</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1} className="card-elegant text-center">
                <v.icon className="w-10 h-10 text-gold mx-auto mb-3" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Preventive Approach */}
      <section className="section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <AnimatedSection className="text-center mb-10">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">Our Philosophy</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2">A Preventive, Client-Focused Approach</h2>
            <p className="text-muted-foreground mt-3">
              The practice follows a preventive legal approach — aimed at avoiding disputes before they arise.
            </p>
          </AnimatedSection>
          <AnimatedSection className="card-elegant">
            <ul className="space-y-3">
              {approach.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mt-5 leading-relaxed">
              Where required, the practice also extends legal support in court matters related to property and contractual disputes, ensuring continuity and protection of client interests — while maintaining primary focus on strong documentation and preventive strategy.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted">
        <div className="container-narrow mx-auto max-w-3xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Career Milestones</h2>
          </AnimatedSection>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 0.1} className="flex gap-4 sm:gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gold ring-4 ring-gold/20" />
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-gold/20" />}
                </div>
                <div className="pb-8">
                  <span className="text-gold font-bold text-sm">{m.year}</span>
                  <p className="text-foreground mt-1">{m.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-dark text-center">
        <div className="container-narrow mx-auto">
          <Scale className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gold-light mb-4">Your Reliable Legal Partner</h2>
          <p className="text-gold-light/70 text-lg mb-8 max-w-2xl mx-auto">
            Whether you are buying, selling, drafting contracts, or regularizing property rights through deemed conveyance — professional legal guidance is essential. With 24 years of experience, Advocate Anirudh Kamble offers dependable legal support from initial drafting to final execution.
          </p>
          <Link href="/contact" className="btn-gold text-base px-8 py-4">
            Schedule an Appointment <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}