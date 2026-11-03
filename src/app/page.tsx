import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MarqueeSection />
      <About />
      {/* <Services /> */}
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
