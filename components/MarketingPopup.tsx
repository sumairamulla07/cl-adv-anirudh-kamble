"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale } from "lucide-react";

export default function MarketingPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, background: "rgba(10,9,7,0.75)", backdropFilter: "blur(4px)", zIndex: 200 }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 14 }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            style={{ position: "fixed", inset: 0, zIndex: 201, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
          >
            <div style={{ background: "hsl(40,33%,96%)", maxWidth: 500, width: "100%", overflow: "hidden" }}>

              {/* Header */}
              <div style={{ background: "hsl(38,28%,12%)", padding: "1.4rem 1.8rem", display: "flex", alignItems: "center", gap: "0.85rem", borderBottom: "1px solid rgba(184,149,80,0.15)" }}>
                <div style={{ width: 34, height: 34, background: "rgba(184,149,80,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Scale style={{ width: 16, height: 16, color: "hsl(38,52%,51%)" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", fontWeight: 400, color: "hsl(39,52%,63%)", lineHeight: 1.2 }}>
                    Disclaimer
                  </div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.57rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "hsl(35,18%,42%)", marginTop: 3 }}>
                    Bar Council of India — Please read before proceeding
                  </div>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "1.6rem 1.8rem", display: "flex", flexDirection: "column", gap: "0.9rem", maxHeight: "55vh", overflowY: "auto" }}>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", lineHeight: 1.85, color: "hsl(38,28%,22%)" }}>
                  In accordance with the rules of the Bar Council of India, law firms are prohibited from soliciting work and advertising. By accessing this website, you acknowledge and agree that there has been no advertisement, solicitation, invitation, or inducement from us or any of our members to solicit work through this website. The use of this site does not create a lawyer-client relationship and should not be construed as an invitation to form such a relationship or as legal advice.
                </p>
                <div style={{ width: "100%", height: "1px", background: "rgba(184,149,80,0.2)" }} />
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", lineHeight: 1.85, color: "hsl(38,28%,22%)" }}>
                  The information on this website is provided for general informational purposes only. We do not guarantee that the content is current, complete, or accurate. We are not responsible for any consequences resulting from actions taken by users based on the information provided on this website.
                </p>
              </div>

              {/* Footer */}
              <div style={{ padding: "1.1rem 1.8rem 1.6rem", borderTop: "1px solid rgba(184,149,80,0.15)" }}>
                <button
                  onClick={() => setVisible(false)}
                  className="btn-gold"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  I Accept the Above
                </button>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}