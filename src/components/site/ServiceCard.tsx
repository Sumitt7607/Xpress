import { Link } from "@tanstack/react-router";
import { Check, Info, MessageCircle, Phone } from "lucide-react";
import type { Service } from "./data";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Clickable Image & Badge Area -> navigates to separate service page */}
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        className="relative block overflow-hidden"
        title={`Click to view full details for ${service.name}`}
      >
        <img
          src={service.image}
          alt={`${service.name} service`}
          loading="lazy"
          width={640}
          height={420}
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-ink shadow-sm backdrop-blur-xs">
            <Info className="h-3.5 w-3.5 text-pink-deep" /> View Complete Details
          </span>
        </div>
        <span className="absolute top-3 left-3 rounded-md bg-lime px-2.5 py-1 text-[10px] font-extrabold tracking-wide text-primary-foreground uppercase shadow-sm">
          {service.badge}
        </span>
        <span className="absolute top-3 right-3 grid h-7 w-7 place-items-center rounded-full bg-ink/80 text-xs font-extrabold text-background">
          {String(service.id).padStart(2, "0")}
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <Link
            to="/services/$slug"
            params={{ slug: service.slug }}
            className="block font-display text-xl font-extrabold text-ink transition-colors hover:text-pink-deep"
          >
            {service.name}
          </Link>
          <p className="text-[11px] font-bold tracking-wider text-pink-deep uppercase">
            {service.category}
          </p>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{service.desc}</p>

        <ul className="mt-auto space-y-2 border-t border-border pt-3">
          {service.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-xs font-semibold text-ink/80">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lime-dark" /> {b}
            </li>
          ))}
        </ul>

        <div className="mt-2 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <Link
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="flex items-center justify-center gap-1 rounded-full border border-border bg-accent/60 px-2 sm:px-3 py-2 text-[11px] sm:text-xs font-extrabold text-ink transition-colors hover:bg-accent hover:text-pink-deep"
            >
              <Info className="h-3.5 w-3.5 shrink-0 text-pink-deep" />
              <span>Details</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center rounded-full bg-lime px-2 sm:px-3 py-2 text-center text-[11px] sm:text-xs font-extrabold tracking-wide text-primary-foreground uppercase transition-colors hover:bg-lime-dark"
            >
              Get Quote
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={`https://wa.me/919740819908?text=${encodeURIComponent(`Hi Xpressmovers, I would like to inquire about ${service.name}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-full bg-lime-dark px-2 sm:px-3 py-2 text-[11px] sm:text-xs font-extrabold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-3.5 w-3.5 shrink-0" />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+919740819908"
              className="flex items-center justify-center gap-1.5 rounded-full bg-pink-deep px-2 sm:px-3 py-2 text-[11px] sm:text-xs font-extrabold text-background transition-opacity hover:opacity-90"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
