import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Adv. Anirudh Kamble",
  description: "Terms of service for Advocate Anirudh Kamble's legal website.",
  alternates: { canonical: "https://advanirudhkamble.com/terms" },
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-foreground mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-4">Last updated: January 2026</p>
        <div className="space-y-6 text-foreground">
          <p>
            By accessing this website, you agree to the following terms. This website is operated by Advocate Anirudh Kamble for informational purposes only and does not constitute legal advice.
          </p>
          <h2 className="font-display text-2xl font-semibold mt-8 mb-3">No Attorney-Client Relationship</h2>
          <p>Use of this website or submission of a contact form does not create an attorney-client relationship. A formal engagement letter is required to establish such a relationship.</p>
          <h2 className="font-display text-2xl font-semibold mt-8 mb-3">Informational Purpose</h2>
          <p>All content on this site is for general information only. Laws and regulations change frequently; please consult Advocate Kamble directly for advice specific to your situation.</p>
          <h2 className="font-display text-2xl font-semibold mt-8 mb-3">Intellectual Property</h2>
          <p>All content, logos, and materials on this website are the property of Advocate Anirudh Kamble and may not be reproduced without permission.</p>
          <h2 className="font-display text-2xl font-semibold mt-8 mb-3">Contact</h2>
          <p>For any questions, please reach us at <a href="mailto:advocateanirudhk@gmail.com" className="text-gold hover:underline">adv.anirudhkamble@gmail.com</a>.</p>
        </div>
        <div className="mt-10">
          <Link href="/" className="btn-gold">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
