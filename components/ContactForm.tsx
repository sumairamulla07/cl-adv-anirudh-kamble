"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const initialForm: FormState = { name: "", phone: "", email: "", service: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please fill in your name and phone number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "eaac461d-304b-4e8e-8538-17e50af25c4e",
          subject: `New Appointment Request – ${form.service || "General Inquiry"} – ${form.name}`,
          from_name: form.name,
          name: form.name,
          phone: form.phone,
          email: form.email || "Not provided",
          service: form.service || "Not specified",
          message: form.message || "No message provided",
          botcheck: "",
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you! Advocate Kamble will contact you within 24 hours.");
        setForm(initialForm);
      } else {
        toast.error("Something went wrong. Please call us directly at 9922836682.");
      }
    } catch {
      toast.error("Network error. Please call us directly at 9922836682.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot spam protection */}
      <input type="checkbox" name="botcheck" className="hidden" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name *"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          maxLength={100}
          required
          className={inputClass}
        />
        <input
          type="tel"
          placeholder="Phone Number *"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          maxLength={15}
          required
          className={inputClass}
        />
      </div>
      <input
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        maxLength={255}
        className={inputClass}
      />
      <select
        value={form.service}
        onChange={(e) => setForm({ ...form, service: e.target.value })}
        className={inputClass}
      >
        <option value="">Select Service</option>
        <option>Agreement to Sale & Sale Deed</option>
        <option>Title Search & Due Diligence</option>
        <option>Gift Deed, Will & Power of Attorney</option>
        <option>Deemed Conveyance</option>
        <option>Lease & Leave License Agreements</option>
        <option>Contract Drafting & Legal Opinions</option>
        <option>Other / General Inquiry</option>
      </select>
      <textarea
        placeholder="Describe your legal matter..."
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        maxLength={1000}
        rows={4}
        className={`${inputClass} resize-none`}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-gold w-full text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Schedule an Appointment
          </>
        )}
      </button>
    </form>
  );
}