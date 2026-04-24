"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/919922836682?text=Hello%20Advocate%20Kamble%2C%20I%20need%20legal%20assistance"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
      <a
        href="tel:9922836682"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        style={{ background: "hsl(38,52%,51%)" }}
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" style={{ color: "hsl(40,33%,96%)" }} />
      </a>
    </div>
  );
}