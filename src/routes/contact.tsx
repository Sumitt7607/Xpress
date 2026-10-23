import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Xpressmovers Bangalore" },
      {
        name: "description",
        content:
          "Call, WhatsApp or request a free moving quote from Xpressmovers in Yeshwanthpur Bangalore — Karnataka India.",
      },
      { property: "og:title", content: "Contact Us | Xpressmovers Bangalore" },
      {
        property: "og:description",
        content: "Get a free, no-obligation moving quote from trusted packers and movers in Bangalore.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    movingFrom: "",
    movingTo: "",
    service: "",
    notes: "",
  });
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "🚚 *New Moving Quote Request - Xpressmovers*",
      "",
      `👤 *Name:* ${formData.name}`,
      `📞 *Phone:* ${formData.phone}`,
      `📍 *Moving From:* ${formData.movingFrom}`,
      `🏁 *Moving To:* ${formData.movingTo}`,
      `📦 *Service:* ${formData.service || "General Moving Enquiry"}`,
      formData.notes ? `📝 *Details:* ${formData.notes}` : "",
    ].filter(Boolean);

    const whatsappUrl = `https://wa.me/919740819908?text=${encodeURIComponent(lines.join("\n"))}`;
    setSubmittedWhatsAppUrl(whatsappUrl);

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="bg-pink py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-display text-4xl font-extrabold text-ink md:text-5xl">Contact Us</h1>
          <p className="mt-3 text-sm text-ink/70">We reply to every enquiry within an hour.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-2">
        <div className="space-y-5">
          <div className="flex gap-4 rounded-2xl bg-card p-5 shadow-[var(--shadow-soft)]">
            <Phone className="h-6 w-6 shrink-0 text-pink-deep" />
            <div>
              <p className="font-display font-extrabold text-ink">Call or WhatsApp</p>
              <div className="mt-1 flex flex-wrap items-center gap-3">
                <a
                  href="tel:+919740819908"
                  className="text-sm font-semibold text-primary transition-colors hover:underline"
                >
                  +91 9740819908
                </a>
                <span className="text-xs text-muted-foreground">•</span>
                <a
                  href="https://wa.me/919740819908"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-lime-dark hover:underline"
                >
                  <MessageCircle className="h-3.5 w-3.5" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl bg-card p-5 shadow-[var(--shadow-soft)]">
            <Mail className="h-6 w-6 shrink-0 text-pink-deep" />
            <div>
              <p className="font-display font-extrabold text-ink">Email</p>
              <a
                href="mailto:hello@xpressmovers.in"
                className="text-sm text-muted-foreground transition-colors hover:text-ink"
              >
                hello@xpressmovers.in
              </a>
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl bg-card p-5 shadow-[var(--shadow-soft)]">
            <MapPin className="h-6 w-6 shrink-0 text-pink-deep" />
            <div>
              <p className="font-display font-extrabold text-ink">Office Address</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Sector No - B-55, 1St Floor DDUTTL Industrial Suburb, Yeshwanthpur Bangalore - 560 022 - Karnataka India.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl bg-card p-5 shadow-[var(--shadow-soft)]">
            <Clock className="h-6 w-6 shrink-0 text-pink-deep" />
            <div>
              <p className="font-display font-extrabold text-ink">Open</p>
              <p className="mt-1 text-sm text-muted-foreground">Every day, 9:00 AM – 9:00 PM</p>
            </div>
          </div>
        </div>

        {submittedWhatsAppUrl ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-lime bg-card p-8 text-center shadow-[var(--shadow-soft)]">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-lime text-primary-foreground shadow-md">
              <CheckCircle2 className="h-9 w-9" />
            </div>
            <h2 className="mt-5 font-display text-2xl font-extrabold text-ink">
              Quote Request Sent to WhatsApp!
            </h2>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              We have pre-filled your moving details. If WhatsApp did not open automatically, click the button below to send your request directly.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={submittedWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-dark px-6 py-3 font-display font-extrabold text-primary-foreground shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-5 w-5" /> Open WhatsApp Chat
              </a>
              <button
                type="button"
                onClick={() => {
                  setSubmittedWhatsAppUrl(null);
                  setFormData({
                    name: "",
                    phone: "",
                    movingFrom: "",
                    movingTo: "",
                    service: "",
                    notes: "",
                  });
                }}
                className="rounded-full border border-border bg-background px-6 py-3 font-display text-sm font-bold text-ink transition-colors hover:bg-accent"
              >
                Submit Another Quote
              </button>
            </div>
          </div>
        ) : (
          <form
            className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
            onSubmit={handleSubmit}
          >
            <h2 className="font-display text-2xl font-extrabold text-ink">Get your free moving quote</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Submit below and your quote enquiry will be sent directly via WhatsApp to our team.
            </p>

            <div className="mt-5 space-y-4">
              <div>
                <label className="mb-1 block text-xs font-bold text-ink" htmlFor="quote-name">
                  Your Name *
                </label>
                <input
                  id="quote-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-lime"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-ink" htmlFor="quote-phone">
                  Phone Number *
                </label>
                <input
                  id="quote-phone"
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 9740819908"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-lime"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="mb-1 block text-xs font-bold text-ink" htmlFor="quote-from">
                    Moving From *
                  </label>
                  <input
                    id="quote-from"
                    required
                    value={formData.movingFrom}
                    onChange={(e) => setFormData({ ...formData, movingFrom: e.target.value })}
                    placeholder="e.g. Yeshwanthpur"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-lime"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-bold text-ink" htmlFor="quote-to">
                    Moving To *
                  </label>
                  <input
                    id="quote-to"
                    required
                    value={formData.movingTo}
                    onChange={(e) => setFormData({ ...formData, movingTo: e.target.value })}
                    placeholder="e.g. Whitefield"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-lime"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-ink" htmlFor="quote-service">
                  Service Needed
                </label>
                <select
                  id="quote-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-lime"
                >
                  <option value="">Select a service</option>
                  <option value="Home Shifting">Home Shifting</option>
                  <option value="Office Relocation">Office Relocation</option>
                  <option value="Vehicle Transport">Vehicle Transport</option>
                  <option value="Warehousing & Storage">Warehousing & Storage</option>
                  <option value="Transit Insurance">Transit Insurance</option>
                  <option value="Pet Relocation">Pet Relocation</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold text-ink" htmlFor="quote-notes">
                  Additional Details
                </label>
                <textarea
                  id="quote-notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about your move — 1BHK/2BHK/3BHK, preferred date, delicate items..."
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-lime"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 font-display font-extrabold text-primary-foreground shadow-[var(--shadow-soft)] transition-colors hover:bg-lime-dark"
              >
                <MessageCircle className="h-5 w-5" /> Request Quote on WhatsApp
              </button>
            </div>
          </form>
        )}
      </section>
      <Footer />
    </div>
  );
}
