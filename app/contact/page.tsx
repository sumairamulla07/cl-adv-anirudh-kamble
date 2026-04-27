import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Advocate Anirudh Kamble – Free Legal Consultation Pune",
  description:
    "Contact Advocate Anirudh Kamble for a free property law consultation in Pune. Call 9922836682, WhatsApp, or email advocateanirudhk@gmail.com. Office hours Mon–Sat 10AM–8PM.",
  alternates: { canonical: "https://advanirudhkamble.com/contact" },
  openGraph: {
    title: "Contact – Appointments | Adv. Anirudh Kamble Property Lawyer Pune",
    description: "Get in touch with Advocate Anirudh Kamble for property law advice. Schedule an appointment.",
    url: "https://advanirudhkamble.com/contact",
  },
};

const contactItems = [
  { icon: Phone, label: "Phone", value: "9922836682", href: "tel:9922836682" },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/919922836682?text=Hello%20Advocate%20Kamble%2C%20I%20need%20legal%20assistance",
  },
  { icon: Mail, label: "Email", value: "advocateanirudhk@gmail.com", href: "mailto:advocateanirudhk@gmail.com" },
  { icon: MapPin, label: "Office", value: "Ground Floor, B Wing, Jai Ganesh Vision, B-63, Shubhashri Residency, Ganga Nagar, Akurdi, Pune – 411035" },
];

export default function ContactPage() {
  return (
    <div>
      <section className="pt-28 pb-16 bg-navy-dark text-center">
        <div className="container-narrow mx-auto px-4">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-gold-light mb-4">Contact Us</h1>
          <p className="text-gold-light/70 text-lg max-w-2xl mx-auto">
            Get legal advice. Reach out to schedule an appointment today.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-foreground font-medium hover:text-gold transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-foreground font-medium">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Working Hours</div>
                  <p className="text-foreground font-medium">Mon – Sat: 10:00 AM – 8:00 PM</p>
                  <p className="text-muted-foreground text-sm">All Sundays OFF</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 card-elegant">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.657070803609!2d73.77982575110465!3d18.64963450255185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b935df01c2dd%3A0x437fcbf0746b400d!2sAdvocate%20%26%20Notary%20Anirudh%20Kamble!5e0!3m2!1sen!2sin!4v1776543086641!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Advocate & Notary Anirudh Kamble – Akurdi, Pimpri-Chinchwad, Pune 411035"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
