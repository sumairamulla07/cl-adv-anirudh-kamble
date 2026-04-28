import Link from "next/link";
import { Scale, Phone, Mail, MapPin } from "lucide-react";

const services = [
  "Agreement to Sale & Sale Deed",
  "Title Search & Due Diligence",
  "Gift Deed, Will & Power of Attorney",
  "Deemed Conveyance",
  "Lease & Leave License Agreements",
  "Contract Drafting & Legal Opinions",
];

export default function Footer() {
  return (
    <footer style={{ background: "hsl(36,24%,18%)", color: "hsl(39,24%,86%)" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <Scale className="w-5 h-5" style={{ color: "hsl(38,52%,51%)" }} />
            <span
              className="font-display font-semibold"
              style={{ color: "hsl(39,52%,63%)", fontSize: "1rem" }}
            >
              Adv. Anirudh Kamble
            </span>
          </div>
          <p style={{ fontSize: "0.8rem", lineHeight: "1.8", color: "hsl(35,18%,55%)" }}>
            Pune&apos;s property lawyer with 24+ years of experience in property documentation and registration across Pune and Pimpri Chinchwad.
          </p>
          <div className="mt-5 space-y-2" style={{ fontSize: "0.75rem", color: "hsl(35,18%,55%)" }}>
            <a href="tel:9922836682" className="flex items-center gap-2 hover:text-gold transition-colors" style={{ textDecoration: "none", color: "inherit" }}>
              <Phone className="w-3.5 h-3.5" style={{ color: "hsl(38,52%,51%)" }} />
              9922836682
            </a>
            <a href="mailto:advocateanirudhk@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors" style={{ textDecoration: "none", color: "inherit" }}>
              <Mail className="w-3.5 h-3.5" style={{ color: "hsl(38,52%,51%)" }} />
              advocateanirudhk@gmail.com
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "hsl(38,52%,51%)" }} />
              <span>Ground Floor, B Wing, Jai Ganesh Vision, B-63, Shubhashri Residency, Ganga Nagar, Akurdi, Pune – 411035</span>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4
            className="font-body font-medium mb-4"
            style={{ fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "hsl(38,52%,51%)" }}
          >
            Services
          </h4>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s}>
                <Link
                  href="/services"
                  style={{ fontSize: "0.78rem", color: "hsl(35,18%,55%)", textDecoration: "none" }}
                  className="hover:text-gold transition-colors"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h4
            className="font-body font-medium mb-4"
            style={{ fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "hsl(38,52%,51%)" }}
          >
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/blog", label: "Legal Insights" },
              { href: "/contact", label: "Schedule Appointment" },
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms of Service" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  style={{ fontSize: "0.78rem", color: "hsl(35,18%,55%)", textDecoration: "none" }}
                  className="hover:text-gold transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(184,149,80,0.12)",
          padding: "1rem 0",
          textAlign: "center",
          fontSize: "0.65rem",
          color: "hsl(35,18%,42%)",
          letterSpacing: "0.08em",
        }}
      >
        © {new Date().getFullYear()} Advocate Anirudh Kamble. All rights reserved. &nbsp;|&nbsp; Pune, Maharashtra
      </div>
    </footer>
  );
}
