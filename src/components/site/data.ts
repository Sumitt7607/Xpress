import home from "@/assets/service-home.jpg";
import office from "@/assets/service-office.jpg";
import vehicle from "@/assets/service-vehicle.jpg";
import storage from "@/assets/service-storage.jpg";
import insurance from "@/assets/service-insurance.jpg";
import pet from "@/assets/service-pet.jpg";

export type ServiceCategory = "Home & Office" | "Car & Storage" | "Insurance & Pets";

export type Service = {
  id: number;
  slug: string;
  name: string;
  category: ServiceCategory;
  image: string;
  badge: string;
  desc: string;
  bullets: string[];
  fullDesc: string;
  features: string[];
  processSteps: { step: string; title: string; desc: string }[];
  idealFor: string;
};

export const serviceCategories = [
  "All Services",
  "Home & Office",
  "Car & Storage",
  "Insurance & Pets",
] as const;

export const services: Service[] = [
  {
    id: 1,
    slug: "home-shifting",
    name: "Home Shifting",
    category: "Home & Office",
    image: home,
    badge: "Most Popular",
    desc: "Room-by-room multi-layer packing, fragile item crating, and door-to-door unpacking.",
    bullets: [
      "Multi-layer bubble wrap & corrugated boxes",
      "Furniture dismantling & reassembly included",
    ],
    fullDesc:
      "Our comprehensive Home Shifting service takes complete care of your household relocation from start to finish. We pack every room methodically with premium multi-layer cushioning, safely crate delicate electronics and glassware, and transport everything in clean, closed-body trucks. Upon arrival, our crew unpacks, places, and reassembles your furniture so you feel at home on day one.",
    features: [
      "5-layer corrugated packing & heavy bubble cushioning for glass and ceramics",
      "Complete dismantling and reassembly of beds, wardrobes, dining sets & modular units",
      "Custom wooden crating for big-screen TVs, wall mirrors, chandeliers & delicate art",
      "Trained, background-verified packing crews treating your belongings with utmost care",
      "Room-by-room labeling and itemized checklist to ensure zero missing items",
      "Door-to-door service with flexible moving dates and guaranteed delivery schedules",
    ],
    processSteps: [
      { step: "01", title: "Free Move Survey", desc: "Digital or in-person survey to give you a transparent, fixed-price written quote." },
      { step: "02", title: "Premium Packing", desc: "Systematic room-by-room packing with multi-layer protective materials." },
      { step: "03", title: "Safe GPS Transit", desc: "Smooth transit in closed-body container trucks with live GPS updates." },
      { step: "04", title: "Unpacking & Setup", desc: "Unloading, room placement, furniture reassembly, and debris removal." },
    ],
    idealFor: "1BHK, 2BHK, 3BHK flats, independent houses, villas, and interstate relocations across India.",
  },
  {
    id: 2,
    slug: "office-relocation",
    name: "Office Relocation",
    category: "Home & Office",
    image: office,
    badge: "Zero Downtime",
    desc: "Organised business & IT equipment relocation structured to eliminate operational downtime.",
    bullets: [
      "Server rack & IT electronics protection",
      "Weekend & night relocation options",
    ],
    fullDesc:
      "Engineered specifically for businesses, corporations, and startups, our Office Relocation service prioritizes minimal operational disruption. We coordinate closely with your facility and IT managers to tag, pack, and transport server racks, desktop stations, modular desks, conference tables, and confidential records securely over weekends or overnight.",
    features: [
      "Anti-static bubble wrap and custom padded covers for servers, PCs, monitors & printers",
      "Modular workstation dismantling, component bundling, and precise desk reconfiguration",
      "Color-coded department tagging so every employee finds their setup intact on Monday morning",
      "Secure handling and chain-of-custody transfer for physical archives and sensitive documents",
      "Heavy equipment shifting including fireproof safes, plotters, and conference room screens",
      "Night and weekend execution options to ensure business continuity without missing a workday",
    ],
    processSteps: [
      { step: "01", title: "Floorplan & Tagging", desc: "Detailed asset mapping, desk-by-desk color coding, and timeline planning." },
      { step: "02", title: "IT & Asset Packing", desc: "Specialized anti-static packing for servers, workstations, and office furniture." },
      { step: "03", title: "Coordinated Transit", desc: "Dedicated truck fleets moving synchronized batches under strict supervision." },
      { step: "04", title: "Rapid Re-installation", desc: "Department-wise placement and reassembly ready for your team's return." },
    ],
    idealFor: "Corporate offices, IT tech parks, creative studios, banks, co-working spaces, and commercial facilities.",
  },
  {
    id: 3,
    slug: "vehicle-transport",
    name: "Vehicle Transport",
    category: "Car & Storage",
    image: vehicle,
    badge: "GPS Tracked",
    desc: "Enclosed hydraulic carriers & door-to-door transit for cars and two-wheelers.",
    bullets: [
      "Covered single & multi-car carriers",
      "Pre-transit 21-point damage report",
    ],
    fullDesc:
      "Transport your beloved car or two-wheeler safely across cities without adding unnecessary mileage or road wear. We use modern, enclosed hydraulic car carrier trailers equipped with wheel locks and high-tensile safety straps, ensuring scratch-free, damage-proof transportation from your doorstep to your new home.",
    features: [
      "100% enclosed, weather-proof hydraulic car carriers protecting against dust and stone chips",
      "Pre-loading 21-point vehicle inspection report with photographic evidence & fuel recording",
      "Individual wheel-lock chocks and industrial tie-down lashing belts preventing movement",
      "Real-time GPS tracking and dedicated vehicle coordinator updates at every transit milestone",
      "Door-to-door collection from your pickup location and direct handover at destination address",
      "Full transit insurance coverage included for complete financial security",
    ],
    processSteps: [
      { step: "01", title: "Document & Inspect", desc: "Vehicle condition report, odometer reading, and verification of RC & insurance." },
      { step: "02", title: "Hydraulic Loading", desc: "Careful driving onto hydraulic ramps and securing with 4-point wheel chocks." },
      { step: "03", title: "Monitored Transit", desc: "Direct highway transit in closed container carrier with real-time GPS tracking." },
      { step: "04", title: "Doorstep Handover", desc: "Unloading and joint inspection with the owner against the initial condition report." },
    ],
    idealFor: "Sedans, hatchbacks, luxury SUVs, sports bikes, and scooters relocating interstate.",
  },
  {
    id: 4,
    slug: "warehousing-storage",
    name: "Warehousing & Storage",
    category: "Car & Storage",
    image: storage,
    badge: "24/7 Monitored",
    desc: "Clean, CCTV-monitored, climate-controlled storage for household and commercial inventory.",
    bullets: [
      "Flexible daily, monthly or annual storage",
      "24/7 CCTV surveillance & fire safety",
    ],
    fullDesc:
      "Need a secure space for your household goods between leases, during home renovations, or for business surplus inventory? Our modern warehouse facilities offer clean, pest-controlled, and round-the-clock secured storage bays with flexible tenure options and individual palletized inventory management.",
    features: [
      "24/7 CCTV surveillance cameras, guarded gates, and biometric entry controls",
      "Advanced fire prevention, smoke detection systems, and automated sprinkler grids",
      "Regular pest-control treatments, moisture barriers, and dust-resistant enclosed bays",
      "Flexible storage terms: pay weekly, monthly, quarterly, or yearly with no lock-in traps",
      "Barcode-tagged inventory lists providing full visibility of every packed container",
      "Pickup from your residence into storage and on-demand delivery whenever you're ready",
    ],
    processSteps: [
      { step: "01", title: "Pickup & Wrapping", desc: "Goods are packed with industrial shrink-wrap and protective blankets." },
      { step: "02", title: "Barcode Inwarding", desc: "Every carton is logged into our warehouse management inventory system." },
      { step: "03", title: "Secure Storage", desc: "Stored in dedicated elevated pallet bays under continuous 24/7 surveillance." },
      { step: "04", title: "Express Dispatch", desc: "Delivered right to your doorstep whenever you need your goods back." },
    ],
    idealFor: "Home renovations, NRI/overseas transfers, gap periods between leases, and commercial excess stock.",
  },
  {
    id: 5,
    slug: "transit-insurance",
    name: "Transit Insurance",
    category: "Insurance & Pets",
    image: insurance,
    badge: "100% Covered",
    desc: "Comprehensive all-risk goods insurance for total peace of mind throughout transit.",
    bullets: [
      "Instant digital policy issue before pickup",
      "Full declared invoice value protection",
    ],
    fullDesc:
      "Protect your precious belongings against unforeseen road accidents, severe weather, overturning, or theft with our comprehensive All-Risk Goods Transit Insurance. Partnered with India's premier public insurance underwriters, we offer transparent policies, full declared value coverage, and express claims processing.",
    features: [
      "All-risk coverage protecting against accidental collision, overturning, fire, and storm damage",
      "Digital policy issued and shared directly via WhatsApp & email before the truck departs",
      "Coverage evaluated against fair customer declared invoice values without hidden depreciation",
      "Dedicated in-house claims assistance team to help compile documentation and survey reports",
      "Hassle-free settlement timelines handled through reputed national underwriting partners",
      "Affordable premium rates starting at competitive fractional percentages of declared value",
    ],
    processSteps: [
      { step: "01", title: "Valuation Form", desc: "Simple checklist to declare estimated values for household or commercial goods." },
      { step: "02", title: "Instant Policy", desc: "Official insurance certificate generated with unique policy number prior to dispatch." },
      { step: "03", title: "Protected Transit", desc: "Goods travel covered under active policy throughout highway and local journey." },
      { step: "04", title: "Direct Settlement", desc: "Priority claims processing with surveyor inspection in rare events of damage." },
    ],
    idealFor: "High-value moves, delicate electronics, luxury furniture, antique collectibles, and long-distance shifting.",
  },
  {
    id: 6,
    slug: "pet-relocation",
    name: "Pet Relocation",
    category: "Insurance & Pets",
    image: pet,
    badge: "Vet Approved",
    desc: "Personalised, comfortable, climate-controlled relocation tailored for your furry family.",
    bullets: [
      "IATA-compliant crates & vet paperwork",
      "In-transit hydration & pet breaks",
    ],
    fullDesc:
      "Moving can be confusing and stressful for pets. Our dedicated Pet Relocation service is run by passionate animal lovers who prioritize your companion's comfort, hygiene, and mental well-being. We arrange custom IATA-certified crates, vet health checks, climate-controlled road or flight transport, regular feeding, walking breaks, and live video updates.",
    features: [
      "IATA-compliant, well-ventilated travel crates tailored to your pet's exact size and breed",
      "Veterinary health clearance, vaccination verification, and domestic transit permits",
      "Climate-controlled AC transport vehicles avoiding thermal stress and anxiety",
      "Scheduled rest stops for fresh water, familiar diet meals, and gentle leashed walks",
      "Regular WhatsApp photos, video calls, and GPS updates sent to keep pet parents at ease",
      "Experienced pet handlers trained in basic canine and feline first aid and calming techniques",
    ],
    processSteps: [
      { step: "01", title: "Pet Consultation", desc: "Breed, weight, temperament assessment, and sizing the ideal travel crate." },
      { step: "02", title: "Vet Documentation", desc: "Complete vet health checkup and verification of rabies/core vaccinations." },
      { step: "03", title: "Comfort Transit", desc: "AC travel with scheduled hydration breaks, feeding, and photo updates." },
      { step: "04", title: "Reunion Delivery", desc: "Safe, cheerful delivery into your arms at your new destination home." },
    ],
    idealFor: "Dogs, cats, domestic birds, and small pets relocating to new cities with their loving families.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  const normalized = slug.toLowerCase().trim();
  return services.find(
    (s) => s.slug.toLowerCase() === normalized || String(s.id) === normalized
  );
}

export const reviews = [
  {
    name: "Ananya Sharma",
    city: "Gurugram",
    text: "Moved our 3BHK from Gurugram to Pune last month. Every box arrived labelled and intact, and the crew even reassembled our beds. Flawless.",
  },
  {
    name: "Rohit Malhotra",
    city: "Noida",
    text: "Transparent pricing with zero hidden charges. They packed our entire flat in four hours and delivered ahead of schedule.",
  },
  {
    name: "Priya & Karan",
    city: "Delhi",
    text: "They relocated our office over a weekend so we lost zero working days. 40+ workstations were up and running by Monday morning.",
  },
  {
    name: "Meera Iyer",
    city: "Faridabad",
    text: "Shipped our golden retriever with Xpressmovers. Climate-controlled crate, regular photo updates, and she arrived calm and happy.",
  },
];
