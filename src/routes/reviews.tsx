import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { reviews } from "@/components/site/data";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | Xpressmovers, Bangalore & Pan-India" },
      {
        name: "description",
        content:
          "Read what Bangalore and Indian families and businesses say about moving with Xpressmovers — safe packing, honest pricing and on-time delivery.",
      },
      { property: "og:title", content: "Customer Reviews | Xpressmovers, Bangalore & Pan-India" },
      {
        property: "og:description",
        content: "Real reviews from 15,000+ happy customers across Bangalore and pan-India.",
      },
    ],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="bg-pink py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-display text-4xl font-extrabold text-ink md:text-5xl">
            Customer Reviews
          </h1>
          <p className="mt-3 text-sm text-ink/70">Trusted by over 15,000 families since 2013.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-5 md:grid-cols-2">
          {[...reviews, ...reviews].map((r, i) => (
            <blockquote
              key={i}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <div className="flex gap-1 text-lime-dark">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm text-ink/80">"{r.text}"</p>
              <footer className="mt-4 font-display text-sm font-extrabold text-ink">
                {r.name} <span className="font-body font-normal text-muted-foreground">· {r.city}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
