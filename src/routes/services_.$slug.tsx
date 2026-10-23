import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  BadgeCheck,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { getServiceBySlug, services } from "@/components/site/data";

export const Route = createFileRoute("/services_/$slug")({
  head: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) {
      return {
        meta: [{ title: "Service Not Found | Xpressmovers" }],
      };
    }
    return {
      meta: [
        { title: `${service.name} | Xpressmovers Packers & Movers` },
        {
          name: "description",
          content: `${service.desc} Fast, safe and 100% insured ${service.name} across Bangalore and India.`,
        },
        { property: "og:title", content: `${service.name} | Xpressmovers` },
        { property: "og:description", content: service.desc },
        { property: "og:image", content: service.image },
      ],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
          <h1 className="font-display text-3xl font-extrabold text-ink">Service Not Found</h1>
          <p className="mt-3 text-muted-foreground">
            The moving service you are looking for does not exist or has moved.
          </p>
          <Link
            to="/services"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-display font-bold text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> View All Services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const otherServices = services.filter((s) => s.id !== service.id);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-pink py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-ink/70">
            <Link to="/" className="hover:text-pink-deep">
              Home
            </Link>
            <span>/</span>
            <Link to="/services" className="hover:text-pink-deep">
              Services
            </Link>
            <span>/</span>
            <span className="text-pink-deep">{service.name}</span>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-lime px-3 py-1 text-xs font-extrabold text-primary-foreground uppercase shadow-xs">
                  {service.badge}
                </span>
                <span className="text-xs font-bold tracking-wider text-ink/70 uppercase">
                  {service.category}
                </span>
              </div>
              <h1 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-black text-ink">
                {service.name}
              </h1>
            </div>

            <div className="flex flex-wrap gap-2.5 w-full sm:w-auto">
              <a
                href={`https://wa.me/919740819908?text=${encodeURIComponent(`Hi Xpressmovers, I would like to inquire about your ${service.name} service.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-full bg-lime-dark px-4 sm:px-5 py-2.5 font-display text-xs font-extrabold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
              <a
                href="tel:+919740819908"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-full bg-pink-deep px-4 sm:px-5 py-2.5 font-display text-xs font-extrabold text-background shadow-sm transition-opacity hover:opacity-90"
              >
                <Phone className="h-4 w-4" /> Call 9740819908
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main Column */}
          <div className="space-y-10 lg:col-span-2">
            {/* Featured Image */}
            <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
              <img
                src={service.image}
                alt={service.name}
                className="h-72 sm:h-96 w-full object-cover"
              />
            </div>

            {/* In-depth Overview */}
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-soft)]">
              <h2 className="font-display text-2xl font-extrabold text-ink">
                About Our {service.name}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {service.fullDesc}
              </p>

              {service.idealFor && (
                <div className="mt-6 rounded-2xl bg-pink-soft/80 border border-pink/50 p-4 sm:p-5">
                  <p className="text-sm text-ink leading-relaxed">
                    <strong className="font-extrabold text-pink-deep">Best Suited For: </strong>
                    {service.idealFor}
                  </p>
                </div>
              )}
            </div>

            {/* What's Included / Key Features */}
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-soft)]">
              <h3 className="font-display text-2xl font-extrabold text-ink mb-6 flex items-center gap-3">
                <ShieldCheck className="h-7 w-7 text-pink-deep" /> What's Included in {service.name}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {service.features.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-2xl border border-border/80 bg-background p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lime-dark" />
                    <span className="text-sm font-semibold text-ink/90 leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Step Process */}
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-soft)]">
              <h3 className="font-display text-2xl font-extrabold text-ink mb-2">
                How Our {service.name} Works
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                A structured, stress-free four-stage relocation process handled by certified professionals.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {service.processSteps.map((s, idx) => (
                  <div
                    key={idx}
                    className="relative flex flex-col justify-between rounded-2xl border border-border bg-background p-5 shadow-xs"
                  >
                    <div>
                      <span className="inline-block rounded-md bg-lime px-2 py-0.5 font-display text-xs font-black text-primary-foreground mb-2">
                        STEP {s.step}
                      </span>
                      <h4 className="font-display text-base font-extrabold text-ink">{s.title}</h4>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <ShieldCheck className="h-8 w-8 text-pink-deep shrink-0" />
                <div>
                  <p className="font-display text-sm font-extrabold text-ink">100% Insured</p>
                  <p className="text-xs text-muted-foreground">All-risk safety coverage</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <BadgeCheck className="h-8 w-8 text-lime-dark shrink-0" />
                <div>
                  <p className="font-display text-sm font-extrabold text-ink">Verified Crews</p>
                  <p className="text-xs text-muted-foreground">Trained & background-checked</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <HeartHandshake className="h-8 w-8 text-pink-deep shrink-0" />
                <div>
                  <p className="font-display text-sm font-extrabold text-ink">On-Time Window</p>
                  <p className="text-xs text-muted-foreground">Guaranteed delivery promise</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Booking Card */}
            <div className="sticky top-24 rounded-3xl border border-border bg-card p-6 shadow-xl">
              <h3 className="font-display text-xl font-extrabold text-ink">
                Book {service.name}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Get an instant quote and plan your moving date with our Bengaluru relocation team.
              </p>

              <div className="mt-5 space-y-3">
                <a
                  href={`https://wa.me/919740819908?text=${encodeURIComponent(`Hi Xpressmovers, I would like to book / get a quote for ${service.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-lime-dark px-5 py-3.5 font-display text-sm font-extrabold text-primary-foreground shadow-md transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="h-5 w-5" /> Book on WhatsApp
                </a>

                <a
                  href="tel:+919740819908"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-pink-deep px-5 py-3.5 font-display text-sm font-extrabold text-background shadow-md transition-opacity hover:opacity-90"
                >
                  <Phone className="h-5 w-5" /> Call +91 9740819908
                </a>

                <Link
                  to="/contact"
                  className="flex w-full items-center justify-center rounded-full border border-border bg-background px-5 py-3 font-display text-xs font-bold text-ink transition-colors hover:bg-accent"
                >
                  Submit Written Quote Form
                </Link>
              </div>

              <div className="mt-6 border-t border-border pt-5 space-y-3 text-xs text-muted-foreground">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-pink-deep mt-0.5" />
                  <span>Sector No - B-55, 1St Floor DDUTTL Industrial Suburb, Yeshwanthpur Bangalore - 560 022</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0 text-pink-deep" />
                  <span>Available Every Day: 9:00 AM – 9:00 PM</span>
                </div>
              </div>

              {/* Other Services list */}
              <div className="mt-8 border-t border-border pt-6">
                <h4 className="font-display text-sm font-extrabold text-ink mb-3">
                  Other Moving Services
                </h4>
                <ul className="space-y-2">
                  {otherServices.map((os) => (
                    <li key={os.id}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: os.slug }}
                        className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-bold text-ink transition-colors hover:bg-accent hover:text-pink-deep"
                      >
                        <span>{os.name}</span>
                        <span className="text-[10px] text-muted-foreground uppercase">{os.badge}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to all services */}
      <section className="border-t border-border bg-card py-10">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-extrabold text-ink">
              Looking for another service?
            </h3>
            <p className="text-xs text-muted-foreground">
              We provide 6 complete moving, storage, and transport solutions across India.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-display text-xs font-extrabold text-primary-foreground uppercase shadow-sm transition-colors hover:bg-lime-dark"
          >
            <ArrowLeft className="h-4 w-4" /> Browse All Services
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
