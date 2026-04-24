import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/lib/blogData";

export const metadata: Metadata = {
  title: "Legal Blog – Property Law Tips, RERA Guide, Stamp Duty | Adv. Anirudh Kamble",
  description:
    "Expert articles on property law, RERA compliance, stamp duty, title verification, and legal tips for Pune homebuyers by Advocate Anirudh Kamble.",
  alternates: { canonical: "https://advanirudhkamble.com/blog" },
  openGraph: {
    title: "Legal Blog – Property Law Insights | Adv. Anirudh Kamble",
    description: "Expert articles on property law, RERA, stamp duty, and legal tips for Pune homebuyers.",
    url: "https://advanirudhkamble.com/blog",
  },
};

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-navy-dark text-center">
        <div className="container-narrow mx-auto px-4">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-gold-light mb-4">
            Legal Insights & Blog
          </h1>
          <p className="text-gold-light/70 text-lg max-w-2xl mx-auto">
            Expert articles on property law, RERA, stamp duty, and legal tips for Pune homebuyers.
          </p>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article
                  className="relative flex flex-col h-full bg-white rounded-2xl border border-border p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-gold/10 hover:border-gold/30 cursor-pointer"
                >
                  {/* Category badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold flex items-center gap-1.5">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors leading-snug">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 line-clamp-4">
                    {post.excerpt}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-border mt-5 pt-4 flex items-center justify-between">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Read More */}
                    <span className="text-gold text-sm font-semibold flex items-center gap-1 group-hover:gap-2.5 transition-all duration-200">
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}