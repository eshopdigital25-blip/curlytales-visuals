import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    quote: "Shiva didn't film our wedding — he authored it. Every frame feels like a memory we forgot we had.",
    name: "Aisha & Rohan",
    role: "Wedding Film, Udaipur",
  },
  {
    quote: "The campaign exceeded every metric. The work is the kind of cinema brands beg for but rarely receive.",
    name: "Maya Iyer",
    role: "Creative Director, Aurum Co.",
  },
  {
    quote: "Working with Shiva felt like collaborating with a director three times his age. Astonishing eye, ruthless taste.",
    name: "Devansh Kapoor",
    role: "Founder, Northbound Studio",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = items[i];
  return (
    <section className="relative py-32 md:py-44 px-6 md:px-12 overflow-hidden">
      <div className="absolute -left-40 top-1/3 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-5xl mx-auto text-center">
        <Reveal>
          <p className="text-[10px] tracking-[0.5em] text-gold uppercase mb-12">— Kind Words</p>
        </Reveal>
        <Quote className="w-10 h-10 mx-auto text-gold/40" strokeWidth={1} />
        <div className="mt-10 min-h-[260px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-display text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.25] text-foreground italic"
            >
              "{t.quote}"
              <footer className="mt-10 not-italic">
                <p className="text-sm tracking-[0.3em] uppercase text-gold">{t.name}</p>
                <p className="mt-2 text-xs text-muted-foreground">{t.role}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            data-cursor="hover"
            onClick={() => setI((p) => (p - 1 + items.length) % items.length)}
            className="w-12 h-12 rounded-full border border-border hover:border-gold text-muted-foreground hover:text-gold transition-all flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to ${idx + 1}`}
                className={`h-px transition-all ${idx === i ? "w-12 bg-gold" : "w-6 bg-border"}`}
              />
            ))}
          </div>
          <button
            data-cursor="hover"
            onClick={() => setI((p) => (p + 1) % items.length)}
            className="w-12 h-12 rounded-full border border-border hover:border-gold text-muted-foreground hover:text-gold transition-all flex items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
