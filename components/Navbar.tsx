"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scale, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "hsla(38,28%,12%,0.96)" : "hsl(38,28%,12%)",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: "1px solid rgba(184,149,80,0.15)",
          height: "64px",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-full flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <Scale className="w-5 h-5" style={{ color: "hsl(38,52%,51%)" }} />
            <div>
              <span
                className="block font-display font-semibold leading-none"
                style={{ color: "hsl(39,52%,63%)", fontSize: "1.05rem", letterSpacing: "0.01em" }}
              >
                Anirudh Kamble
              </span>
              <span
                className="block font-body font-normal leading-none mt-0.5"
                style={{ color: "hsl(35,18%,48%)", fontSize: "0.52rem", letterSpacing: "0.24em", textTransform: "uppercase" }}
              >
                Advocate And Legal Consultant, Pune
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.17em",
                  textTransform: "uppercase",
                  padding: "0.4rem 0.85rem",
                  color: pathname === l.href ? "hsl(39,52%,63%)" : "hsl(35,18%,48%)",
                  borderBottom: pathname === l.href ? "1px solid hsl(38,52%,51%)" : "1px solid transparent",
                  textDecoration: "none",
                  transition: "color 0.2s, border-color 0.2s",
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 400,
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.color = "hsl(39,52%,63%)";
                }}
                onMouseLeave={e => {
                  if (pathname !== l.href)
                    (e.target as HTMLElement).style.color = "hsl(35,18%,48%)";
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              style={{
                marginLeft: "0.75rem",
                fontSize: "0.63rem",
                letterSpacing: "0.17em",
                textTransform: "uppercase",
                padding: "0.5rem 1.2rem",
                border: "1px solid hsl(38,52%,51%)",
                color: "hsl(38,52%,51%)",
                textDecoration: "none",
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                transition: "background 0.22s, color 0.22s",
              }}
              onMouseEnter={e => {
                (e.target as HTMLElement).style.background = "hsl(38,52%,51%)";
                (e.target as HTMLElement).style.color = "hsl(40,33%,96%)";
              }}
              onMouseLeave={e => {
                (e.target as HTMLElement).style.background = "transparent";
                (e.target as HTMLElement).style.color = "hsl(38,52%,51%)";
              }}
            >
              Appointment
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ color: "hsl(39,52%,63%)" }}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed top-16 left-0 right-0 z-40 md:hidden flex flex-col"
          style={{
            background: "hsla(38,28%,12%,0.98)",
            borderBottom: "1px solid rgba(184,149,80,0.15)",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                padding: "0.9rem 1.5rem",
                fontSize: "0.68rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: pathname === l.href ? "hsl(39,52%,63%)" : "hsl(35,18%,48%)",
                borderBottom: "1px solid rgba(184,149,80,0.1)",
                textDecoration: "none",
                fontFamily: "'Jost', sans-serif",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              margin: "1rem 1.5rem",
              padding: "0.7rem 1.2rem",
              textAlign: "center",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              border: "1px solid hsl(38,52%,51%)",
              color: "hsl(38,52%,51%)",
              textDecoration: "none",
              fontFamily: "'Jost', sans-serif",
            }}
          >
            Schedule Appointment
          </Link>
        </div>
      )}
    </>
  );
}
