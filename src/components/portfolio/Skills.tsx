import { Reveal } from "./Reveal";
import {
  Camera, Film, Palette, Scissors, BookOpen, Plane, Megaphone, Heart, Music, Lightbulb,
} from "lucide-react";

const skills = [
  { icon: Camera, title: "Cinematography", desc: "Anamorphic, full-frame, motion." },
  { icon: Film, title: "Film Direction", desc: "From concept to final cut." },
  { icon: Palette, title: "Color Grading", desc: "DaVinci-crafted moods & looks." },
  { icon: Scissors, title: "Video Editing", desc: "Pacing that breathes story." },
  { icon: BookOpen, title: "Storytelling", desc: "Narrative-led visual design." },
  { icon: Plane, title: "Drone Cinematography", desc: "Aerial language, cinematic scale." },
  { icon: Megaphone, title: "Commercial Shoots", desc: "Brand films that convert." },
  { icon: Heart, title: "Wedding Films", desc: "Heirloom-grade memory keeping." },
  { icon: Music, title: "Music Videos", desc: "Rhythm, color, performance." },
  { icon: Lightbulb, title: "Lighting Design", desc: "Naturalistic, motivated, bold." },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-44 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <Reveal><p className="text-[10px] tracking-[0.5em] text-gold uppercase mb-6">— Craft</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display text-[clamp(2.5rem,6vw,5rem)] leading-[1] headline-reveal">
                A Toolkit for <br/><span className="italic text-gold/90">Modern Cinema.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-muted-foreground">
              Ten disciplines, one obsession — translating ideas into images that linger long after the credits.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
          {skills.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <div
                data-cursor="hover"
                className="group relative bg-background p-8 h-full lift hover:[transform:translateY(-6px)] hover:bg-card transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_30%_20%,oklch(0.78_0.11_80/0.18),transparent_60%)]" />
                <s.icon className="w-6 h-6 text-gold relative z-10" strokeWidth={1.2} />
                <h3 className="mt-8 text-display text-2xl text-foreground relative z-10">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground relative z-10">{s.desc}</p>
                <span className="absolute bottom-4 right-4 text-[10px] tracking-[0.2em] text-muted-foreground/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
