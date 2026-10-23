import { Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  CheckCircle,
  Clock,
  CreditCard,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react";
import logoImg from "@/assets/logo.png";
import { BottomBar } from "./BottomBar";

export function Footer() {
  return (
    <>
      <footer className="mt-20 border-t border-border bg-ink text-background pb-20 sm:pb-16">
        {/* Top Trust Bar */}
        <div className="border-b border-background/10 bg-background/5">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 text-xs sm:grid-cols-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-pink shrink-0" />
              <div>
                <p className="font-extrabold text-background">100% Insured Transit</p>
                <p className="text-background/60 text-[11px]">All-risk goods protection</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BadgeCheck className="h-6 w-6 text-lime shrink-0" />
              <div>
                <p className="font-extrabold text-background">Verified Crew</p>
                <p className="text-background/60 text-[11px]">Trained & background-checked</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="h-6 w-6 text-pink shrink-0" />
              <div>
                <p className="font-extrabold text-background">GPS-Tracked Fleet</p>
                <p className="text-background/60 text-[11px]">Real-time transit updates</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-lime shrink-0" />
              <div>
                <p className="font-extrabold text-background">Zero Hidden Charges</p>
                <p className="text-background/60 text-[11px]">Transparent written quotes</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Main Footer */}
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand & Credentials */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src={logoImg}
                alt="Xpressmovers.in"
                className="h-11 sm:h-12 w-auto object-contain rounded border border-white/10"
              />
            </Link>
            <p className="text-xs font-semibold text-lime uppercase tracking-wider">
              Govt. Registered Relocation Partner
            </p>
            <p className="text-xs leading-relaxed text-background/70">
              Xpressmovers is a premier pan-India packing, moving, vehicle transport, and storage
              logistics company. Over 15,000 satisfied moves completed across major metro cities with
              uncompromising safety.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="rounded-md border border-background/20 bg-background/5 px-2.5 py-1 text-[10px] font-bold text-background/80">
                ★ ISO 9001:2015 Standards
              </span>
              <span className="rounded-md border border-background/20 bg-background/5 px-2.5 py-1 text-[10px] font-bold text-background/80">
                15,000+ Happy Moves
              </span>
            </div>
          </div>

          {/* Col 2: Services Links (Direct Pages) */}
          <div>
            <h4 className="font-display text-base font-extrabold text-background tracking-wide">
              Moving Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-background/75">
              <li>
                <Link
                  to="/services/$slug"
                  params={{ slug: "home-shifting" }}
                  className="transition-colors hover:text-pink flex items-center justify-between"
                >
                  <span>Home Shifting</span>
                  <span className="text-[10px] text-lime">Most Popular</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services/$slug"
                  params={{ slug: "office-relocation" }}
                  className="transition-colors hover:text-pink"
                >
                  Office Relocation
                </Link>
              </li>
              <li>
                <Link
                  to="/services/$slug"
                  params={{ slug: "vehicle-transport" }}
                  className="transition-colors hover:text-pink flex items-center justify-between"
                >
                  <span>Vehicle Transport</span>
                  <span className="text-[10px] text-background/50">Car & Bike</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services/$slug"
                  params={{ slug: "warehousing-storage" }}
                  className="transition-colors hover:text-pink"
                >
                  Warehousing & Storage
                </Link>
              </li>
              <li>
                <Link
                  to="/services/$slug"
                  params={{ slug: "transit-insurance" }}
                  className="transition-colors hover:text-pink"
                >
                  Transit Goods Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="/services/$slug"
                  params={{ slug: "pet-relocation" }}
                  className="transition-colors hover:text-pink"
                >
                  Pet Relocation Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Quick Navigation */}
          <div>
            <h4 className="font-display text-base font-extrabold text-background tracking-wide">
              Company & Help
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-background/75">
              <li>
                <Link to="/about" className="transition-colors hover:text-pink">
                  About Xpressmovers
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-pink">
                  All Moving Services
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="transition-colors hover:text-pink">
                  Customer Testimonials & Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-pink">
                  Request Free Moving Quote
                </Link>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-pink">
                  Frequently Asked Questions (FAQ)
                </a>
              </li>
              <li>
                <a href="#calculator" className="transition-colors hover:text-pink">
                  Moving Cost Estimator
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Registered Office & 24x7 Help */}
          <div>
            <h4 className="font-display text-base font-extrabold text-background tracking-wide">
              Registered Office & Helpline
            </h4>
            <ul className="mt-4 space-y-3.5 text-xs text-background/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-pink" />
                <span className="leading-relaxed">
                  Sector No - B-55, 1St Floor DDUTTL Industrial Suburb, Yeshwanthpur Bangalore - 560 022 - Karnataka India.
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-pink" />
                <div>
                  <span className="block text-[10px] uppercase text-background/50">24X7 Phone Helpline</span>
                  <a href="tel:+919740819908" className="font-bold text-background transition-colors hover:text-pink">
                    +91 9740819908
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 shrink-0 text-lime" />
                <div>
                  <span className="block text-[10px] uppercase text-background/50">WhatsApp Moving Desk</span>
                  <a
                    href="https://wa.me/919740819908"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-lime transition-colors hover:underline"
                  >
                    +91 9740819908 (Chat Online)
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-pink" />
                <div>
                  <span className="block text-[10px] uppercase text-background/50">Official Email</span>
                  <a href="mailto:hello@xpressmovers.in" className="transition-colors hover:text-pink">
                    hello@xpressmovers.in
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-background/50" />
                <span className="text-[11px] text-background/60">
                  Open: Mon – Sun: 9:00 AM – 9:00 PM (Transit Operations 24/7)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Popular Relocation Routes Banner */}
        <div className="border-t border-background/10 bg-background/5 py-5">
          <div className="mx-auto max-w-7xl px-4">
            <p className="text-[11px] font-extrabold text-background uppercase tracking-wider mb-2">
              Popular Daily Shifting Routes
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-background/60">
              <span className="hover:text-background">Bangalore to Delhi NCR</span>
              <span>•</span>
              <span className="hover:text-background">Bangalore to Mumbai</span>
              <span>•</span>
              <span className="hover:text-background">Bangalore to Hyderabad</span>
              <span>•</span>
              <span className="hover:text-background">Bangalore to Pune</span>
              <span>•</span>
              <span className="hover:text-background">Bangalore to Chennai</span>
              <span>•</span>
              <span className="hover:text-background">Bangalore to Kolkata</span>
              <span>•</span>
              <span className="hover:text-background">Delhi NCR to Bangalore</span>
              <span>•</span>
              <span className="hover:text-background">Local Bangalore Shifting (Yeshwanthpur, Whitefield, Indiranagar, HSR Layout, Koramangala, Electronic City)</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Payment Bar */}
        <div className="border-t border-background/10 py-6 text-xs text-background/60">
          <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p>© {new Date().getFullYear()} Xpressmovers.in. All rights reserved.</p>
              <p className="text-[11px] text-background/50 mt-1">
                Government Registered Movers & Packers. Safe, Insured & Trusted Relocation Across India.
              </p>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-background/60">
              <CreditCard className="h-4 w-4 text-lime" />
              <span>Accepted Payments: UPI (GPay/PhonePe), Net Banking, Cards & Cash</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating 4-Button Quick Action Bar */}
      <BottomBar />
    </>
  );
}
