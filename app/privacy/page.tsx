import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Adv. Anirudh Kamble",
  description: "Privacy policy for Advocate Anirudh Kamble's legal website.",
  alternates: { canonical: "https://advanirudhkamble.com/privacy" },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-foreground mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-4">Last updated: January 2026</p>
        <div className="prose prose-slate max-w-none space-y-6 text-foreground">
          <p>
            Advocate Anirudh Kamble (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal information. This policy outlines how we collect, use, and safeguard data submitted through this website.
          </p>
          <h2 className="font-display text-2xl font-semibold mt-8 mb-3">Information We Collect</h2>
          <p>We collect information you voluntarily submit via our contact form, including your name, phone number, email address, and details of your legal matter.</p>
          <h2 className="font-display text-2xl font-semibold mt-8 mb-3">How We Use Your Information</h2>
          <p>Information is used solely to respond to your inquiry and provide legal services. We do not sell, rent, or share your personal data with third parties.</p>
          <h2 className="font-display text-2xl font-semibold mt-8 mb-3">Data Security</h2>
          <p>We take reasonable precautions to protect your information. However, no method of transmission over the internet is 100% secure.</p>
          <h2 className="font-display text-2xl font-semibold mt-8 mb-3">Contact</h2>
          <p>For any privacy-related queries, please contact us at <a href="mailto:advocateanirudhk@gmail.com" className="text-gold hover:underline">adv.anirudhkamble@gmail.com</a>.</p>
        </div>
        <div className="mt-10">
          <Link href="/" className="btn-gold">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
