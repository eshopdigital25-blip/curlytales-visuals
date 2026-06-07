import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Cursor } from "@/components/portfolio/Cursor";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Loader } from "@/components/portfolio/Loader";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Work } from "@/components/portfolio/Work";
import { Stats } from "@/components/portfolio/Stats";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Curly Tales by Shiva — Cinematographer & Visual Storyteller" },
      { name: "description", content: "Award-style cinematography, film direction, and visual storytelling by Shiva. Commercials, wedding films, music videos and brand campaigns crafted in Bangalore for clients worldwide." },
      { property: "og:title", content: "Curly Tales by Shiva — Cinematographer" },
      { property: "og:description", content: "Cinematic visual storytelling, commercials, weddings, and brand films by Shiva." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="film-grain bg-background text-foreground relative">
      <Loader />
      <Cursor />
      <ScrollProgress />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster theme="dark" position="bottom-center" />
    </main>
  );
}
