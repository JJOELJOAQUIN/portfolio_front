import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import About2 from "./Components/About";
import type { Metadata } from "next";
import TechLogos from "./Components/Languages";

export const metadata: Metadata = {
  title: "Joel Joaquín López",
  description:
    "Desarrollos de software a medida, combinando tecnología e innovación para alcanzar tus objetivos.",
};

const logos = [
  { name: "JavaScript", logo: "/javascript-svgrepo-com.svg" },
  { name: "React", logo: "/react-svgrepo-com.svg" },
  { name: "Node.js", logo: "/node-js-svgrepo-com.svg" },
  { name: "Typescript", logo: "/typescript-official-svgrepo-com.svg" },
  { name: "Java", logo: "/java-logo-svgrepo-com.svg" },
  { name: "SQL", logo: "/sql-database-generic-svgrepo-com.svg"},
  { name: "Next.js", logo: "/next-js-svgrepo-com.svg" },
  { name: "SAP", logo: "/sap-svgrepo-com.svg" },

];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden flex flex-col">
      <Hero />
      <About2 />

      <div>
        <TechLogos logos={logos} />
      </div>
      <Contact />
    </main>
  );
}
