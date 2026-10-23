import { Link } from "@tanstack/react-router";
import { FileEdit, MessageCircle, Phone, Wrench } from "lucide-react";

export function BottomBar() {
  return (
    <div className="fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-md sm:w-auto">
      <nav
        aria-label="Quick Actions"
        className="flex items-center justify-between sm:justify-center sm:gap-2 rounded-full border border-neutral-200/90 bg-white/95 px-3 sm:px-5 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-md"
      >
        {/* 1. Services */}
        <Link
          to="/services"
          className="group flex flex-1 sm:flex-initial flex-col items-center justify-center px-2 py-1 text-center transition-transform hover:scale-105 active:scale-95"
        >
          <Wrench className="h-5 w-5 text-[#d81b60] transition-colors group-hover:text-[#ad144b]" />
          <span className="mt-0.5 text-[11px] font-bold text-neutral-800">Services</span>
        </Link>

        {/* Divider */}
        <div className="h-7 w-[1px] bg-neutral-200 shrink-0" />

        {/* 2. WhatsApp */}
        <a
          href="https://wa.me/919740819908?text=Hi%20Xpressmovers%2C%20I%20would%20like%20to%20inquire%20about%20your%20moving%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-1 sm:flex-initial flex-col items-center justify-center px-2 py-1 text-center transition-transform hover:scale-105 active:scale-95"
        >
          <MessageCircle className="h-5 w-5 text-[#25D366] transition-colors group-hover:text-[#1ebe5d]" />
          <span className="mt-0.5 text-[11px] font-bold text-neutral-800">WhatsApp</span>
        </a>

        {/* Divider */}
        <div className="h-7 w-[1px] bg-neutral-200 shrink-0" />

        {/* 3. Call */}
        <a
          href="tel:+919740819908"
          className="group flex flex-1 sm:flex-initial flex-col items-center justify-center px-2 py-1 text-center transition-transform hover:scale-105 active:scale-95"
        >
          <Phone className="h-5 w-5 text-[#d81b60] transition-colors group-hover:text-[#ad144b]" />
          <span className="mt-0.5 text-[11px] font-bold text-neutral-800">Call</span>
        </a>

        {/* Divider */}
        <div className="h-7 w-[1px] bg-neutral-200 shrink-0" />

        {/* 4. Get Quote */}
        <Link
          to="/contact"
          className="group flex flex-1 sm:flex-initial flex-col items-center justify-center px-2 py-1 text-center transition-transform hover:scale-105 active:scale-95"
        >
          <FileEdit className="h-5 w-5 text-[#d81b60] transition-colors group-hover:text-[#ad144b]" />
          <span className="mt-0.5 text-[11px] font-bold text-[#d81b60]">Get Quote</span>
        </Link>
      </nav>
    </div>
  );
}
