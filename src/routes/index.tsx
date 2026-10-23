import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  Box,
  Building,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  HeartHandshake,
  HelpCircle,
  Home,
  Layers,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { HeroSlider } from "@/components/site/HeroSlider";
import { ServiceCard } from "@/components/site/ServiceCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { services, reviews } from "@/components/site/data";
import happy1 from "@/assets/happy-1.jpg";
import happy2 from "@/assets/happy-2.jpg";
import happy3 from "@/assets/happy-3.jpg";
import serviceHome from "@/assets/service-home.jpg";
import realBike from "@/assets/real-bike-packing.jpg";
import realAppliance from "@/assets/real-appliance-packing.jpg";
import realCrate from "@/assets/real-wooden-crate.jpg";
import realWorkCollage from "@/assets/real-movers-work.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Xpressmovers.in | Packers & Movers Bangalore & Pan-India" },
      {
        name: "description",
        content:
          "Safe, affordable packers and movers. Home shifting, office relocation, vehicle transport, warehousing, and 100% insured transit across Bangalore and pan-India.",
      },
      { property: "og:title", content: "Xpressmovers.in | Packers & Movers" },
      {
        property: "og:description",
        content: "India's trusted movers — 15,000+ happy families, 100% insured transit.",
      },
    ],
  }),
  component: Index,
});

const calculatorOptions = [
  {
    id: "1bhk",
    label: "1 BHK Flat",
    localEstimate: "₹4,500 – ₹7,500",
    outstationEstimate: "₹14,000 – ₹22,000",
    truck: "10ft – 14ft Closed Container",
    crew: "2-3 Certified Packers",
    packingBoxes: "15-20 Multi-layer Cartons",
    time: "3 to 5 Hours",
  },
  {
    id: "2bhk",
    label: "2 BHK Flat",
    localEstimate: "₹7,500 – ₹12,500",
    outstationEstimate: "₹22,000 – ₹34,000",
    truck: "14ft – 17ft Closed Truck",
    crew: "3-4 Certified Packers",
    packingBoxes: "25-35 Multi-layer Cartons",
    time: "5 to 7 Hours",
  },
  {
    id: "3bhk",
    label: "3 BHK Flat / Villa",
    localEstimate: "₹12,000 – ₹18,500",
    outstationEstimate: "₹32,000 – ₹48,000",
    truck: "17ft – 19ft Container Carrier",
    crew: "4-6 Certified Packers",
    packingBoxes: "40-60 Multi-layer Cartons",
    time: "Full Day / 8 Hours",
  },
  {
    id: "office",
    label: "Office / Commercial",
    localEstimate: "₹9,000 – ₹25,000+",
    outstationEstimate: "₹28,000 – ₹65,000+",
    truck: "Dedicated Closed Fleet",
    crew: "IT & Furniture Crew Team",
    packingBoxes: "Anti-static & Asset Crates",
    time: "Flexible / Weekend Shift",
  },
  {
    id: "vehicle",
    label: "Car / Bike Transport",
    localEstimate: "₹2,500 – ₹5,500",
    outstationEstimate: "₹8,500 – ₹18,000",
    truck: "Enclosed Hydraulic Carrier",
    crew: "Certified Vehicle Handlers",
    packingBoxes: "Wheel-Locks & Nylon Belts",
    time: "Direct Transit Window",
  },
];

const faqs = [
  {
    q: "How is the shifting estimate calculated and are there any hidden fees?",
    a: "Our estimate is based on the volume of goods (inventory list), distance between pickup and delivery locations, floors/lift availability, and packaging material requirements. Once our written quote is confirmed, there are absolutely zero hidden charges on moving day.",
  },
  {
    q: "How do you pack fragile items like big-screen TVs, glass, and mirrors?",
    a: "Fragile items receive multi-layer protection starting with bubble wrap, thick corrugated corner guards, foam sheeting, and heavy-duty 5-ply cartons. For high-end LED/OLED televisions and delicate chandeliers, we build custom wooden crates to prevent any pressure or transit vibrations.",
  },
  {
    q: "Is transit goods insurance included in my move?",
    a: "Yes! We provide written all-risk goods transit insurance covering accidents, fire, overturning, or transit impact based on your declared valuation. A digital policy copy with a valid policy number is generated and handed over before the moving truck departs.",
  },
  {
    q: "Do your movers dismantle and reassemble beds and wardrobes?",
    a: "Absolutely. Our trained carpenters and packing crew bring professional toolkit sets to dismantle double beds, modular wardrobes, dining tables, and workstations, and reassemble everything in the proper rooms at your new destination.",
  },
  {
    q: "Can I track my consignment in real time during highway transit?",
    a: "Yes. All our closed-body container trucks are equipped with real-time GPS tracking units. In addition, you get a dedicated Move Coordinator who provides regular WhatsApp milestone updates throughout the journey.",
  },
  {
    q: "How many days in advance should I confirm my moving slot?",
    a: "We recommend booking 2 to 4 days in advance to reserve your preferred morning slot. However, for urgent requirements, we also support same-day express bookings depending on truck availability.",
  },
];

function Index() {
  const [selectedSize, setSelectedSize] = useState("2bhk");
  const [moveType, setMoveType] = useState<"local" | "outstation">("local");

  const currentOption =
    calculatorOptions.find((o) => o.id === selectedSize) || calculatorOptions[1];
  const priceDisplay =
    moveType === "local" ? currentOption.localEstimate : currentOption.outstationEstimate;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero slider + photo grid */}
      <section className="w-full">
        <div className="grid lg:grid-cols-[2fr_1fr]">
          <HeroSlider />
          <div className="grid grid-cols-2 grid-rows-2">
            {[happy1, happy2, happy3, serviceHome].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Happy customers moving with Xpressmovers"
                loading="lazy"
                className="h-full min-h-[130px] w-full object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-lime">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 text-center md:grid-cols-4">
          {[
            ["15,000+", "Happy Moves"],
            ["25+", "Cities Covered"],
            ["100%", "Insured Transit"],
            ["12 yrs", "Of Experience"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-2xl font-extrabold text-primary-foreground md:text-3xl">
                {n}
              </p>
              <p className="text-xs font-bold tracking-wide text-primary-foreground/80 uppercase">
                {l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 24x7 Call Banner */}
      <section className="mx-auto max-w-5xl px-4 py-8 md:py-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#9b111e] via-[#b81d24] to-[#7d0a14] px-6 py-8 shadow-2xl transition-transform hover:scale-[1.01] md:px-12 md:py-10">
          <div className="flex flex-col items-center text-center">
            {/* Top row: CALL 24X7 pill badge + Large Phone Number */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-1.5 text-xs font-extrabold tracking-wider text-white uppercase backdrop-blur-xs">
                <Phone className="h-3.5 w-3.5 fill-white text-white" />
                CALL 24X7
              </span>
              <a
                href="tel:+919740819908"
                className="font-display text-4xl font-black tracking-tight text-white transition-all hover:text-white/90 active:scale-95 sm:text-5xl md:text-6xl"
              >
                9740819908
              </a>
            </div>

            {/* Subtitle */}
            <p className="mt-4 text-sm font-bold text-white/95 sm:text-base md:text-lg">
              For all home, office & logistics shifting solutions
            </p>

            {/* Divider line */}
            <div className="my-5 w-full max-w-2xl border-t border-white/25" />

            {/* Bottom caption */}
            <p className="text-xs font-semibold text-white/80 sm:text-sm">
              Move smart, move safe — call for a quick quote!
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="paw-bg py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="rounded-full bg-pink px-4 py-1.5 text-xs font-extrabold text-pink-deep uppercase tracking-wider">
              Door-To-Door Solutions
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
              Our Professional Moving Services
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
              Click on any service card to view complete service details, process steps, and custom
              options.
            </p>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-lime px-8 py-3.5 font-display text-sm font-extrabold text-primary-foreground shadow-[var(--shadow-soft)] transition-colors hover:bg-lime-dark"
            >
              <span>Explore All 6 Services</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Interactive Moving Cost Estimator */}
      <section id="calculator" className="bg-pink-soft/50 py-16 border-y border-border">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-lime px-3.5 py-1 text-xs font-extrabold text-primary-foreground uppercase tracking-wide">
              <Sparkles className="h-3.5 w-3.5" /> Instant Estimate
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
              Calculate Your Moving Cost
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Choose your home size and move type to get a realistic estimate with vehicle and crew
              recommendations.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-xl md:p-8">
            {/* Step 1: Move Type toggle */}
            <div className="flex justify-center">
              <div className="inline-flex rounded-full border border-border bg-background p-1 shadow-xs">
                <button
                  type="button"
                  onClick={() => setMoveType("local")}
                  className={`rounded-full px-5 py-2 text-xs sm:text-sm font-extrabold transition-all ${
                    moveType === "local"
                      ? "bg-ink text-background shadow-sm"
                      : "text-muted-foreground hover:text-ink"
                  }`}
                >
                  Local City Shifting
                </button>
                <button
                  type="button"
                  onClick={() => setMoveType("outstation")}
                  className={`rounded-full px-5 py-2 text-xs sm:text-sm font-extrabold transition-all ${
                    moveType === "outstation"
                      ? "bg-ink text-background shadow-sm"
                      : "text-muted-foreground hover:text-ink"
                  }`}
                >
                  Domestic / Interstate Move
                </button>
              </div>
            </div>

            {/* Step 2: Size selector chips */}
            <div className="mt-6">
              <label className="block text-center text-xs font-bold text-ink uppercase tracking-wider mb-3">
                Select Your Move Size:
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                {calculatorOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedSize(opt.id)}
                    className={`rounded-2xl border p-3 text-center transition-all ${
                      selectedSize === opt.id
                        ? "border-pink-deep bg-pink-soft text-pink-deep shadow-md font-extrabold"
                        : "border-border bg-background text-ink/80 hover:bg-accent"
                    }`}
                  >
                    <span className="block text-xs font-bold">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Estimate Result Card */}
            <div className="mt-8 rounded-2xl border border-lime bg-lime-soft/20 p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Estimated Cost Range ({moveType === "local" ? "Local Move" : "Interstate Transit"}):
                  </span>
                  <div className="font-display text-3xl sm:text-4xl font-black text-ink mt-1">
                    {priceDisplay}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    *Actual cost depends on exact inventory volume, floor level, and custom crating needs.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <a
                    href={`https://wa.me/919740819908?text=${encodeURIComponent(`Hi Xpressmovers, I checked your estimate for ${currentOption.label} (${moveType === "local" ? "Local" : "Interstate"}: approx ${priceDisplay}). Please share exact booking details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-dark px-6 py-3 font-display text-xs font-extrabold text-primary-foreground shadow-md transition-opacity hover:opacity-90"
                  >
                    <MessageCircle className="h-4 w-4" /> Get Quote on WhatsApp
                  </a>
                  <a
                    href="tel:+919740819908"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-display text-xs font-extrabold text-background transition-colors hover:bg-neutral-800"
                  >
                    <Phone className="h-4 w-4" /> Call 9740819908
                  </a>
                </div>
              </div>

              {/* Inclusions Breakdown */}
              <div className="mt-6 border-t border-border pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-muted-foreground block text-[10px] uppercase font-bold">Truck Fleet</span>
                  <span className="font-extrabold text-ink">{currentOption.truck}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[10px] uppercase font-bold">Packers Crew</span>
                  <span className="font-extrabold text-ink">{currentOption.crew}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[10px] uppercase font-bold">Packing Materials</span>
                  <span className="font-extrabold text-ink">{currentOption.packingBoxes}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[10px] uppercase font-bold">Typical Duration</span>
                  <span className="font-extrabold text-ink">{currentOption.time}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: 4-Step Moving Blueprint */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center">
          <span className="rounded-full bg-pink px-4 py-1.5 text-xs font-extrabold text-pink-deep uppercase tracking-wider">
            Simple & Transparent
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
            How Your Move Works With Us
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
            From your very first enquiry to the final box unpacked at your new home, our 4-step
            process is engineered for zero stress.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Free Survey & Quote",
              desc: "Instant video or doorstep survey to assess goods and provide a guaranteed written estimate with no hidden costs.",
              icon: Calendar,
            },
            {
              step: "02",
              title: "Multi-Layer Packing",
              desc: "Uniformed packers wrap each item room-by-room with 5-ply cartons, bubble wrap, and custom wood crating.",
              icon: Package,
            },
            {
              step: "03",
              title: "GPS-Tracked Transit",
              desc: "Goods travel in closed-body container trucks with live GPS tracking and all-risk goods transit insurance.",
              icon: Truck,
            },
            {
              step: "04",
              title: "Unloading & Reassembly",
              desc: "Safe unloading, room placement, furniture reassembly, and disposal of packing materials so you settle in.",
              icon: Home,
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="relative flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-pink-soft text-pink-deep">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-display text-2xl font-black text-ink/20">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-extrabold text-ink">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* NEW SECTION 3: Packaging Materials & Safety Standards */}
      <section className="bg-ink py-16 text-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="rounded-full bg-lime px-4 py-1.5 text-xs font-extrabold text-primary-foreground uppercase tracking-wider">
              Zero Damage Philosophy
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-background md:text-4xl">
              Industrial Grade Packing Materials
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-background/70">
              We never cut corners on packaging. Every move uses premium, certified materials to
              protect your valuables from shocks, dust, and moisture.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "5-Ply Corrugated Cartons",
                desc: "High-compression strength boxes that resist crushing even under heavy load stacking in transit.",
                tag: "Heavy Duty",
              },
              {
                title: "Multi-Layer Bubble Wrap",
                desc: "Shock-absorbing air pockets wrapping chinaware, electronics, glass table-tops, and photo frames.",
                tag: "Fragile Shield",
              },
              {
                title: "Custom Wooden Crating",
                desc: "Reinforced wooden skeleton frames custom built for OLED/LED TVs, marble tops, and art pieces.",
                tag: "Premium Protection",
              },
              {
                title: "High-Tensile Stretch Film",
                desc: "Tightly seals sofas, mattresses, and upholstered items against dust, monsoon rain, and scuffs.",
                tag: "Moisture Barrier",
              },
              {
                title: "Padded Furniture Blankets",
                desc: "Thick textile blankets guarding polished wooden edges, wardrobes, and refrigerators against scratches.",
                tag: "Scratch Guard",
              },
              {
                title: "Industrial Lashing & Wheel Chocks",
                desc: "Heavy nylon straps and wheel stoppers anchoring items and vehicles securely inside trucks.",
                tag: "Transit Lock",
              },
            ].map((mat, i) => (
              <div
                key={i}
                className="rounded-2xl border border-background/15 bg-background/5 p-6 backdrop-blur-xs transition-colors hover:bg-background/10"
              >
                <span className="rounded-md bg-pink-deep px-2.5 py-1 text-[10px] font-extrabold text-background uppercase tracking-wide">
                  {mat.tag}
                </span>
                <h3 className="mt-4 font-display text-lg font-extrabold text-background">{mat.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-background/70">{mat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real On-Ground Work & Packing Quality Gallery */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <span className="rounded-full bg-pink px-4 py-1.5 text-xs font-extrabold text-pink-deep uppercase tracking-wider">
              Real Work In Action
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
              On-Ground Packing & Moving Quality
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
              See how our professional crews protect two-wheelers, appliances, delicate LED screens, and
              home furniture using authentic multi-layer materials and custom wooden crating.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Photo 1: Bike */}
            <div className="group overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={realBike}
                  alt="Professional Two-Wheeler / Bike packing"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-ink/80 px-3 py-1 text-[10px] font-bold text-white uppercase backdrop-blur-xs">
                  Vehicle Protection
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-extrabold text-ink">
                  Two-Wheeler / Bike Packing
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Cardboard contour wrap with heavy stretch film to shield body panels, fuel tank, and mirrors from scratches.
                </p>
              </div>
            </div>

            {/* Photo 2: Wooden Crate */}
            <div className="group overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={realCrate}
                  alt="Custom Wooden Crating for fragile TVs and glass"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-pink-deep px-3 py-1 text-[10px] font-bold text-white uppercase backdrop-blur-xs">
                  Custom Crating
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-extrabold text-ink">
                  Heavy-Duty Wooden Crates
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Reinforced timber skeleton crates for big-screen LED/OLED TVs, glass tabletops, and delicate art frames.
                </p>
              </div>
            </div>

            {/* Photo 3: Appliance */}
            <div className="group overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={realAppliance}
                  alt="Sealed Appliance Packing with Fragile Seal"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-lime-dark px-3 py-1 text-[10px] font-bold text-white uppercase backdrop-blur-xs">
                  QR & Barcode Tagged
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-extrabold text-ink">
                  Appliance Multi-Layer Wrap
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Refrigerators and washing machines sealed with corner guards, moisture barriers, QR codes, and fragile tapes.
                </p>
              </div>
            </div>

            {/* Photo 4: Operations Collage */}
            <div className="group overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={realWorkCollage}
                  alt="Happy moving operations and sofa wrapping"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-lime px-3 py-1 text-[10px] font-bold text-primary-foreground uppercase backdrop-blur-xs">
                  Team Operations
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-extrabold text-ink">
                  Full Relocation Operations
                </h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Trained, uniformed crews taking care of sofa shrink-wrapping, office handovers, and doorstep delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <span className="rounded-full bg-pink px-4 py-1.5 text-xs font-extrabold text-pink-deep uppercase tracking-wider">
            Verified Excellence
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
            Why 15,000+ Families Choose Xpressmovers
          </h2>
          <ul className="mt-6 space-y-4">
            {[
              ["A Decade of Proven Trust", "Over 15,000 satisfied moves completed across major metro cities."],
              ["Trained, Uniformed Crews", "Background-checked packers who treat your home with utmost respect."],
              ["100% Insured Transit", "All-risk transit insurance protecting every single consignment."],
              ["Door-to-Door Completeness", "Packing, loading, transport, unloading, and furniture reassembly included."],
              ["Guaranteed On-Time Window", "GPS-tracked fleet and punctual delivery commitments you can rely on."],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lime-dark" />
                <div>
                  <p className="font-display font-extrabold text-ink">{t}</p>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src={happy3}
            alt="Business owner shaking hands with a mover"
            loading="lazy"
            width={900}
            height={700}
            className="col-span-2 h-56 w-full rounded-3xl object-cover shadow-lg"
          />
          <img
            src={happy1}
            alt="Family welcoming movers into their new home"
            loading="lazy"
            width={900}
            height={700}
            className="h-44 w-full rounded-3xl object-cover shadow-md"
          />
          <img
            src={happy2}
            alt="Couple unpacking boxes in their new home"
            loading="lazy"
            width={900}
            height={700}
            className="h-44 w-full rounded-3xl object-cover shadow-md"
          />
        </div>
      </section>

      {/* Trust Badges 3-col strip */}
      <section className="bg-pink-soft py-14">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 md:grid-cols-3">
          {[
            [ShieldCheck, "Full Transit Insurance", "Written all-risk goods insurance with every consignment we move."],
            [BadgeCheck, "Verified Crews", "Background-checked, trained packers from audited partner teams."],
            [HeartHandshake, "Lifetime Support", "Storage, unpacking, and reassembly guidance whenever you need it."],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof ShieldCheck;
            return (
              <div key={t as string} className="rounded-3xl bg-card p-7 shadow-[var(--shadow-soft)]">
                <I className="h-9 w-9 text-pink-deep" />
                <h3 className="mt-4 font-display text-xl font-extrabold text-ink">{t as string}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d as string}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center">
          <span className="rounded-full bg-pink px-4 py-1.5 text-xs font-extrabold text-pink-deep uppercase tracking-wider">
            Verified Experiences
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
            What Customers Say About Us
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <blockquote
              key={r.name}
              className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-lime-dark">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-ink/80 leading-relaxed">"{r.text}"</p>
              </div>
              <footer className="mt-5 font-display text-sm font-extrabold text-ink border-t border-border pt-3">
                {r.name} <span className="font-body font-normal text-muted-foreground">· {r.city}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* NEW SECTION 4: FAQ Accordion Section */}
      <section id="faq" className="bg-pink-soft/40 py-16 border-t border-border">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-pink px-4 py-1.5 text-xs font-extrabold text-pink-deep uppercase tracking-wider">
              <HelpCircle className="h-4 w-4" /> Got Questions?
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-ink md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Everything you need to know about our moving process, packaging, insurance, and booking.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-xl md:p-8">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border/80 px-2">
                  <AccordionTrigger className="text-left font-display text-base font-extrabold text-ink hover:text-pink-deep">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground pt-1 pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-lime py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 text-center">
          <h2 className="font-display text-3xl font-extrabold text-primary-foreground md:text-5xl">
            Ready to plan your hassle-free move?
          </h2>
          <p className="max-w-xl text-sm md:text-base text-primary-foreground/90">
            Get an instant, no-obligation quote or chat with our Bengaluru moving coordinator directly on
            WhatsApp.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/919740819908?text=Hi%20Xpressmovers%2C%20I%20would%20like%20to%20plan%20my%20move%20and%20get%20a%20free%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 font-display text-sm font-extrabold text-background shadow-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4 text-lime" /> Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="rounded-full border-2 border-primary-foreground/30 bg-primary-foreground/10 px-8 py-3.5 font-display text-sm font-extrabold text-primary-foreground backdrop-blur-xs transition-colors hover:bg-primary-foreground/20"
            >
              Request Written Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
