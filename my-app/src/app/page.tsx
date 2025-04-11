import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import About2 from "./Components/About";
import TechLogos from "./Components/Languages";
import Head from "next/head"; 



const logos = [
  { name: "JavaScript", logo: "/javascript-svgrepo-com.svg" },
  { name: "React", logo: "/react-svgrepo-com.svg" },
  { name: "Node.js", logo: "/node-js-svgrepo-com.svg" },
  { name: "Typescript", logo: "/typescript-official-svgrepo-com.svg" },
  { name: "Java", logo: "/java-logo-svgrepo-com.svg" },
  { name: "SQL", logo: "/sql-database-generic-svgrepo-com.svg" },
  { name: "Next.js", logo: "/next-js-svgrepo-com.svg" },
  { name: "SAP", logo: "/sap-svgrepo-com.svg" },
];

export default function Home() {
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content="https://portfolio-front-eight.vercel.app/preview.jpg"
        />
        <meta
          property="og:title"
          content="Joel Joaquín López | Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Desarrollos de software a medida, combinando tecnología e innovación para alcanzar tus objetivos."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://portfolio-front-eight.vercel.app"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://portfolio-front-eight.vercel.app/preview.jpg"
        />
      </Head>

      <main className="min-h-screen overflow-hidden flex flex-col">
        <Hero />
        <About2 />
        <div>
          <TechLogos logos={logos} />
        </div>
        <Contact />
      </main>
    </>
  );
}
