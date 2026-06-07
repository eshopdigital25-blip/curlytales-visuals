import { useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import work1 from "@/assets/work1.jpg";
import work2 from "@/assets/work2.jpg";
import work3 from "@/assets/work3.jpg";

type Project = {
  title: string; category: string; year: string; description: string;
  thumb: string; video: string;
};

const projects: Project[] = [
  {
    title: "Eternal Vows",
    category: "Wedding Film",
    year: "2025",
    description: "An intimate ceremony captured in warm anamorphic tones — a tribute to two lives becoming one.",
    thumb: work1,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    title: "Velocity / Tokyo",
    category: "Commercial",
    year: "2024",
    description: "A luxury automotive campaign shot through the neon arteries of Shibuya. 4K, anamorphic, midnight runs.",
    thumb: work2,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    title: "Wanderlight",
    category: "Travel Story",
    year: "2024",
    description: "A high-altitude meditation on solitude, scale and golden hour — captured across the Himalayan range.",
    thumb: work3,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
];

function Card({ p, onOpen }: { p: Project; onOpen: () => void }) {
  const vRef = useRef<HTMLVideoElement>(null);
  return (
    <button
      data-cursor="hover"
      onClick={onOpen}
      onMouseEnter={() => vRef.current?.play().catch(() => {})}
      onMouseLeave={() => { if (vRef.current) { vRef.current.pause(); vRef.current.currentTime = 0; } }}
      className="group relative block w-full text-left overflow-hidden bg-card aspect-[16/10]"
    >
      <img
        src={p.thumb}
        alt={p.title}
        loading="lazy"
        width={1600}
        height={900}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
      />
      <video
        ref={vRef}
        src={p.video}
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      <div className="absolute inset-0 vignette opacity-70" />

      {/* Play indicator */}
      <div className="absolute top-6 right-6 w-14 h-14 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
        <Play className="w-4 h-4 text-gold fill-gold" />
      </div>

      {/* Bottom meta */}
      <div className="absolute bottom-0 inset-x-0 p-8">
        <div className="flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase text-gold mb-3">
          <span>{p.category}</span>
          <span className="w-6 h-px bg-gold/60" />
          <span className="text-muted-foreground">{p.year}</span>
        </div>
        <h3 className="text-display text-3xl md:text-5xl text-foreground">{p.title}</h3>
        <p className="mt-3 text-sm text-muted-foreground max-w-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          {p.description}
        </p>
      </div>
    </button>
  );
}

export function Work() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="work" className="relative py-32 md:py-44 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <Reveal><p className="text-[10px] tracking-[0.5em] text-gold uppercase mb-6">— Selected Work</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] headline-reveal">
                Featured Work
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg italic text-muted-foreground">
                Stories captured through my lens.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <a href="#contact" className="text-[11px] tracking-[0.35em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors">
              Commission a film →
            </a>
          </Reveal>
        </div>

        <div className="space-y-10 md:space-y-16">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <Card p={p} onOpen={() => setOpen(p)} />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[90] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setOpen(null)}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-gold"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              className="w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-black overflow-hidden">
                <video src={open.video} autoPlay controls className="w-full h-full" />
              </div>
              <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] tracking-[0.35em] uppercase text-gold">{open.category} · {open.year}</p>
                  <h3 className="mt-2 text-display text-4xl">{open.title}</h3>
                </div>
                <p className="max-w-md text-muted-foreground">{open.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
