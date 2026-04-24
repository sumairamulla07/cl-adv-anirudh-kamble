import Link from "next/link";
import { Scale } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-dark text-center px-4">
      <div>
        <Scale className="w-16 h-16 text-gold mx-auto mb-6" />
        <h1 className="font-display text-6xl font-bold text-gold mb-4">404</h1>
        <p className="text-gold-light/70 text-xl mb-8">Page not found. This matter may be outside our jurisdiction.</p>
        <Link href="/" className="btn-gold">Return to Home</Link>
      </div>
    </div>
  );
}
