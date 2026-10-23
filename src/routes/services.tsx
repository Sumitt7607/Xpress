import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ServiceCard } from "@/components/site/ServiceCard";
import { services, serviceCategories } from "@/components/site/data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services | Xpressmovers, Bangalore & Pan-India" },
      {
        name: "description",
        content:
          "Home shifting, office relocation, vehicle transport, warehousing, transit insurance and pet relocation across Bangalore and pan-India.",
      },
      { property: "og:title", content: "Our Services | Xpressmovers, Bangalore & Pan-India" },
      {
        property: "og:description",
        content: "Insured moving services, from home shifting to vehicle and pet relocation across India.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  const [active, setActive] = useState<(typeof serviceCategories)[number]>("All Services");
  const visible =
    active === "All Services" ? services : services.filter((s) => s.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="bg-pink py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-display text-4xl font-extrabold text-ink md:text-5xl">Our Services</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-ink/70">
            Every move is handled by trained crews, GPS-tracked trucks and 100% insured transit —
            from a single box to an entire office.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-wrap justify-center gap-3">
          {serviceCategories.map((c) => {
            const count =
              c === "All Services" ? services.length : services.filter((s) => s.category === c).length;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2.5 text-sm font-extrabold transition-colors ${
                  active === c
                    ? "bg-lime text-primary-foreground"
                    : "border border-border bg-card text-ink hover:bg-accent"
                }`}
              >
                {c} <span className="opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
