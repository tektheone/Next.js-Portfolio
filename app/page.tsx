import Hero from "@/components/Hero";
import Education from "@/components/Education";
import LogoAnimation from "@/components/LogoAnimation";
import { Navbar } from "@/components/Navbar";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Stack />
      <LogoAnimation />
      <Education />
      <Contact />
    </>
  );
}
