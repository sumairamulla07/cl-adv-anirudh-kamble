import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, AlertTriangle, Phone } from "lucide-react";
import { blogPosts, BlogContent } from "@/lib/blogData";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Adv. Anirudh Kamble`,
    description: post.excerpt,
    alternates: { canonical: `https://advanirudhkamble.com/blog/${slug}` },
  };
}

function renderContent(content: BlogContent, idx: number) {
  switch (content.type) {
    case "paragraph":
      return (
        <p key={idx} className="text-gray-700 leading-relaxed text-[15px] mb-4">
          {content.text}
        </p>
      );
    case "subheading":
      return (
        <h4 key={idx} className="font-semibold text-navy-dark text-base mt-5 mb-2">
          {content.text}
        </h4>
      );
    case "list":
      return (
        <ul key={idx} className="space-y-2 mb-4 ml-1">
          {content.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[15px] text-gray-700">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-gold flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "highlight":
      return (
        <div
          key={idx}
          className="my-5 px-5 py-4 border-l-4 border-gold bg-gold/5 rounded-r-xl"
        >
          <p className="text-navy-dark font-medium italic text-[15px] leading-relaxed">
            {content.text}
          </p>
        </div>
      );
    case "redflag":
      return (
        <div key={idx} className="my-5 bg-red-50 border border-red-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-red-700 font-semibold text-sm">Red Flags to Watch For</span>
          </div>
          <ul className="space-y-2">
            {content.items.map((item, i) => (
              <li key={i} className="flex gap-2.5 text-[14px] text-red-800">
                <span className="font-bold mt-0.5">🚩</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar with back button */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container-narrow mx-auto px-4 py-3 flex items-center gap-4">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-gold transition-colors group"
          >
            <span className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-gold/10 flex items-center justify-center transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:text-gold transition-colors" />
            </span>
            Back to Blog
          </Link>
          <div className="h-4 w-px bg-border" />
          <span className="text-xs text-muted-foreground hidden sm:block truncate max-w-xs">
            {post.title}
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-navy-dark pt-10 pb-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-5">
            <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-semibold flex items-center gap-1.5">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-gold-light leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-gold-light/70 text-base leading-relaxed mb-6">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm text-gold-light/50">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              By Adv. Anirudh Kamble
            </span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-border p-8 sm:p-10">

            {/* Intro blurb */}
            <div className="mb-8 pb-8 border-b border-border">
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {post.slug === "common-mistakes-property-registration-maharashtra"
                  ? "Buying property in Maharashtra is one of the biggest financial decisions of your life — yet many buyers make costly, avoidable mistakes. Let's break down the critical errors and how you can avoid them."
                  : "In real estate, ownership is only as strong as the documents that prove it. Whether you are purchasing a residential flat, acquiring land for development, or financing a commercial project, legal due diligence is the single most critical step that ensures your investment rests on a legitimate and risk-free foundation."}
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {post.sections.map((section, sIdx) => (
                <div key={sIdx}>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-navy-dark mb-4 pb-2 border-b-2 border-gold/20">
                    {section.heading}
                  </h3>
                  <div>
                    {section.content.map((content, cIdx) =>
                      renderContent(content, cIdx)
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Conclusion */}
            <div className="mt-10 pt-8 border-t border-border">
              <h3 className="font-display text-xl font-bold text-navy-dark mb-4">
                Conclusion
              </h3>
              <div className="bg-navy-dark/5 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed text-[15px] italic">
                  {post.conclusion}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="mt-8 bg-navy-dark rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl font-bold text-gold mb-3">
              Need Expert Legal Advice?
            </h3>
            <p className="text-gold-light/70 text-sm mb-6 max-w-md mx-auto">
              Advocate Anirudh Kamble offers free initial consultations. Get expert guidance tailored to your property situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:9922836682"
                className="btn-gold inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call 9922836682
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl border border-gold/40 text-gold font-semibold text-sm hover:bg-gold/10 transition-colors"
              >
                Schedule an Appointment
              </Link>
            </div>
          </div>

          {/* Back to blog link */}
          <div className="mt-6 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}