"use client";

import { motion } from "framer-motion";
import { NeoButton } from "./ui/NeoButton";
import { BrowserMockup } from "./BrowserMockup";
import { Globe, Cpu, Mail, Code2 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-brand-yellow dot-pattern text-black overflow-hidden">
      {/* Radial dot pattern overlay is handled by class */}
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8 relative z-10">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="inline-block bg-white border-neo px-4 py-1 rounded-full shadow-neo-sm text-xs font-black uppercase tracking-widest"
          >
            AVAILABLE FOR WORK
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black font-cabinet leading-[0.9] uppercase"
          >
            I DESIGN <br />
            <span className="text-transparent text-stroke-2">HIGH END</span> <br />
            EXPERIENCES
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-bold max-w-xl leading-snug"
          >
            Specializing in Visual Identity, Interaction Design, and Design Systems. 
            Merging deep user research with disruptive aesthetics to build products that stick.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <NeoButton variant="primary" size="lg">
              GET IN TOUCH
            </NeoButton>
            <NeoButton variant="white" size="lg">
              VIEW PROJECTS
            </NeoButton>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 pt-4"
          >
            {[
              { icon: <Globe />, href: "#" },
              { icon: <Cpu />, href: "#" },
              { icon: <Mail />, href: "#" },
              { icon: <Code2 />, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-12 h-12 bg-white border-neo flex items-center justify-center shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Content - Mockup & Floating Cards */}
        <div className="relative">
          <BrowserMockup />
          
          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-10 -right-6 bg-brand-sage border-neo p-4 rounded-xl shadow-neo-md rotate-6 hidden md:block"
          >
            <p className="font-cabinet font-black text-2xl">2+ YEARS</p>
            <p className="text-[10px] font-bold opacity-60 uppercase">Experience</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-6 bg-white border-neo p-4 rounded-xl shadow-neo-md -rotate-3 hidden md:block"
          >
            <p className="font-cabinet font-black text-2xl">20+ PROJS</p>
            <p className="text-[10px] font-bold opacity-60 uppercase">Completed</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
