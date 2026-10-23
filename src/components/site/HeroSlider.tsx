import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import slide1 from "@/assets/hero-slide-1.jpg";
import slide2 from "@/assets/hero-slide-2.jpg";

const slides = [
  { url: slide1, alt: "Professional packers and movers loading truck - Xpressmovers" },
  { url: slide2, alt: "Happy family moving into new home with Xpressmovers" },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => go(1), 5000);
    return () => clearInterval(t);
  }, [go]);

  return (
    <div className="group relative aspect-[16/9] w-full overflow-hidden bg-pink-soft">
      {slides.map((s, i) => (
        <img
          key={s.url}
          src={s.url}
          alt={s.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <button
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute top-1/2 left-3 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-background/70 text-ink shadow-[var(--shadow-soft)] transition-colors hover:bg-background"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute top-1/2 right-3 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-background/70 text-ink shadow-[var(--shadow-soft)] transition-colors hover:bg-background"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((s, i) => (
          <button
            key={s.url}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-7 bg-pink-deep" : "w-2.5 bg-background/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
