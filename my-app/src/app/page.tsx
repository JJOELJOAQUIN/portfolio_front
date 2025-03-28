import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import About2 from "./Components/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beeneu",
  description: "Desarrollos de software a medida, combinando tecnología e innovación para alcanzar tus objetivos.",
};

export default function Home() {
  return (
    <main   className="min-h-screen overflow-hidden flex flex-col">
       <Hero />
      <About2/>
      <Contact />
    </main>
  );
}