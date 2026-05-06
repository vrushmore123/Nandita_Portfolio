"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Personas } from "@/components/Personas";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black overflow-x-hidden selection:bg-brand-yellow selection:text-black">
      <AnimatePresence>
        <LoadingScreen key="loading" />
      </AnimatePresence>
      
      <CustomCursor />
      <ScrollProgress />
      
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <ProblemSolution />
      <Skills />
      <Experience />
      <Projects />
      <Personas />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
