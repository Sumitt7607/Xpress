import {
  CheckCircle2,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

const announcements = [
  {
    icon: Sparkles,
    iconColor: "text-amber-400",
    text: "Special Offer: Flat 15% OFF On Advance Relocation Bookings!",
    highlight: true,
  },
  {
    icon: Phone,
    iconColor: "text-lime",
    text: "24x7 Customer Helpline:",
    link: "tel:+919740819908",
    linkText: "+91 9740819908",
  },
  {
    icon: ShieldCheck,
    iconColor: "text-pink",
    text: "100% Insured Transit with Written Policy Protection",
  },
  {
    icon: MessageCircle,
    iconColor: "text-emerald-400",
    text: "Instant WhatsApp Estimate:",
    link: "https://wa.me/919740819908?text=Hi%20Xpressmovers%2C%20I%20would%20like%20to%20get%20a%20moving%20quote.",
    linkText: "Chat Now",
  },
  {
    icon: Truck,
    iconColor: "text-sky-400",
    text: "Active Pan-India & Bangalore Daily Moving Routes (GPS-Tracked)",
  },
  {
    icon: CheckCircle2,
    iconColor: "text-lime",
    text: "Zero Hidden Charges — Guaranteed Transparent Written Quotes",
  },
  {
    icon: MapPin,
    iconColor: "text-rose-400",
    text: "Yeshwanthpur, Bangalore Hub | DDUTTL Industrial Suburb",
  },
];

export function RunningStrip() {
  return (
    <div
      role="region"
      aria-label="Important moving announcements and contact hotline"
      className="relative flex w-full items-center overflow-hidden border-b border-lime/30 bg-ink py-2 text-background shadow-inner"
    >
      {/* Left Static Live Badge */}
      <div className="relative z-20 hidden shrink-0 items-center gap-2 border-r border-lime/30 bg-ink px-4 py-0.5 sm:flex shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-lime"></span>
        </span>
        <span className="text-[11px] font-black tracking-wider text-lime uppercase whitespace-nowrap">
          LIVE UPDATES
        </span>
      </div>

      {/* Marquee Container with smooth scroll & fade mask */}
      <div
        className="relative flex-1 overflow-hidden min-w-0 whitespace-nowrap"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 20px, black calc(100% - 20px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 20px, black calc(100% - 20px), transparent 100%)",
        }}
      >
        <div className="animate-marquee flex items-center gap-8 py-0.5 text-xs">
          {/* First loop */}
          {announcements.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={`a-${i}`}
                className="inline-flex shrink-0 items-center gap-2 font-medium tracking-wide"
              >
                <Icon className={`h-3.5 w-3.5 shrink-0 ${item.iconColor}`} />
                <span
                  className={
                    item.highlight
                      ? "font-extrabold text-amber-300"
                      : "text-background/90"
                  }
                >
                  {item.text}
                </span>
                {item.link && (
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-extrabold text-lime underline underline-offset-2 transition-colors hover:text-white"
                  >
                    {item.linkText}
                  </a>
                )}
                <span className="ml-6 text-background/30">|</span>
              </div>
            );
          })}

          {/* Duplicate loop for seamless infinite animation */}
          {announcements.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={`b-${i}`}
                className="inline-flex shrink-0 items-center gap-2 font-medium tracking-wide"
              >
                <Icon className={`h-3.5 w-3.5 shrink-0 ${item.iconColor}`} />
                <span
                  className={
                    item.highlight
                      ? "font-extrabold text-amber-300"
                      : "text-background/90"
                  }
                >
                  {item.text}
                </span>
                {item.link && (
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-extrabold text-lime underline underline-offset-2 transition-colors hover:text-white"
                  >
                    {item.linkText}
                  </a>
                )}
                <span className="ml-6 text-background/30">|</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
