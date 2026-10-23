import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import logoImg from "@/assets/logo.png";
import { RunningStrip } from "./RunningStrip";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoImg}
            alt="Xpressmovers.in"
            className="h-9 sm:h-11 md:h-12 w-auto max-w-[160px] sm:max-w-none object-contain rounded shadow-xs"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-bold text-ink transition-colors hover:text-pink-deep"
              activeProps={{ className: "text-pink-deep" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+919740819908"
            className="hidden items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-extrabold text-primary-foreground shadow-[var(--shadow-soft)] transition-colors hover:bg-lime-dark sm:flex"
          >
            <Phone className="h-4 w-4" /> +91 9740819908
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card lg:hidden text-ink transition-colors active:scale-95"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-4 py-4 lg:hidden shadow-xl animate-in slide-in-from-top-2 duration-200">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-2.5 text-sm font-bold text-ink hover:bg-accent active:bg-accent"
              activeProps={{ className: "bg-pink-soft text-pink-deep font-extrabold" }}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-border/80 pt-3">
            <a
              href="tel:+919740819908"
              className="flex items-center justify-center gap-1.5 rounded-full bg-lime px-4 py-2.5 text-xs font-extrabold text-primary-foreground shadow-xs"
            >
              <Phone className="h-4 w-4" /> Call 24/7
            </a>
            <a
              href="https://wa.me/919740819908?text=Hi%20Xpressmovers%2C%20I%20would%20like%20to%20get%20a%20moving%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-full bg-lime-dark px-4 py-2.5 text-xs font-extrabold text-primary-foreground shadow-xs"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      )}

      {/* Running Announcement Strip */}
      <RunningStrip />
    </header>
  );
}
