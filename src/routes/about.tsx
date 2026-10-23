import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import happy1 from "@/assets/happy-1.jpg";
import happy3 from "@/assets/happy-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Xpressmovers, Bangalore & Pan-India" },
      {
        name: "description",
        content:
          "Xpressmovers has completed 15,000+ insured moves across Bangalore and pan-India since 2013. Trained crews, transparent pricing and door-to-door service.",
      },
      { property: "og:title", content: "About Us | Xpressmovers, Bangalore & Pan-India" },
      {
        property: "og:description",
        content: "Trained crews, insured transit and door-to-door service across India since 2013.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="bg-pink py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-display text-4xl font-extrabold text-ink md:text-5xl">About Us</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-extrabold text-ink">
            Moving families, not just boxes
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Xpressmovers started in 2013 with one simple belief: a move should be exciting, not
            exhausting. From a single studio apartment to a 40-desk office, we plan every
            relocation down to the last roll of bubble wrap — and we never hand your belongings to
            anyone we haven't trained ourselves.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Every consignment is packed room-by-room with multi-layer protection, inventoried
            item-by-item, insured in transit and delivered with a delivery window we actually keep.
            You get a dedicated move coordinator, a transparent written quote, and a direct line to
            our team long after the last box is unpacked.
          </p>
        </div>
        <div className="grid gap-4">
          <img src={happy1} alt="Family welcoming movers into their new home" loading="lazy" width={900} height={700} className="h-56 w-full rounded-2xl object-cover" />
          <img src={happy3} alt="Business owner shaking hands with a mover" loading="lazy" width={900} height={700} className="h-56 w-full rounded-2xl object-cover" />
        </div>
      </section>

      <section className="bg-pink-soft py-14">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 md:grid-cols-3">
          {[
            ["Verified crews", "Background-checked, uniformed packers from audited partner teams only."],
            ["Safety first", "Multi-layer packing, item-level inventory and 100% insured transit."],
            ["Support for life", "Storage, reassembly and unpacking guidance whenever you need it."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl bg-card p-6 shadow-[var(--shadow-soft)]">
              <h3 className="font-display text-xl font-extrabold text-ink">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
