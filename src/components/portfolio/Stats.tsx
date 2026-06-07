import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, {
      duration: 2.2,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (v) => setVal(Math.floor(v)),
    });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const stats = [
  { n: 100, suffix: "+", label: "Projects Shot" },
  { n: 5, suffix: "M+", label: "Views Generated" },
  { n: 50, suffix: "+", label: "Happy Clients" },
  { n: 5, suffix: "+", label: "Years Experience" },
];

export function Stats() {
  return (
    <section className="relative py-32 md:py-40 px-6 md:px-12 border-y border-border overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.78_0.11_80/0.08),transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 relative">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <p className="text-display text-[clamp(3rem,7vw,6rem)] leading-none gold-gradient">
              <Counter to={s.n} suffix={s.suffix} />
            </p>
            <p className="mt-4 text-[10px] tracking-[0.4em] uppercase text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
