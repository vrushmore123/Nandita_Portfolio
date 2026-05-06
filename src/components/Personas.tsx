"use client";

import { motion } from "framer-motion";

export const Personas = () => {
  const personas = [
    {
      title: "Founders",
      description: "Visionaries looking to turn a messy idea into a high-fidelity, investor-ready product.",
      bg: "bg-brand-sage",
      badge: "MVP Design",
      shadow: "shadow-neo-sm",
    },
    {
      title: "Dev Teams",
      description: "Engineers who need pixel-perfect assets and a scalable design system for handoff.",
      bg: "bg-brand-yellow",
      badge: "Scalable Systems",
      shadow: "shadow-neo-lg",
    },
    {
      title: "Agencies",
      description: "Creative partners needing a specialist for complex UI/UX and motion design delivery.",
      bg: "bg-brand-dark-gray",
      text: "text-white",
      badge: "Creative Ops",
      shadow: "shadow-neo-sm",
    },
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl uppercase mb-20 text-center">Who I Build For</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((persona, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className={`${persona.bg} ${persona.text || "text-black"} border-neo p-10 rounded-3xl ${persona.shadow} flex flex-col justify-between h-[400px]`}
            >
              <div>
                <span className="inline-block bg-white text-black border-neo px-4 py-1 rounded-full text-[10px] font-black uppercase mb-8">
                  {persona.badge}
                </span>
                <h3 className="text-4xl font-black font-cabinet uppercase mb-6">{persona.title}</h3>
                <p className="text-xl font-bold leading-snug opacity-90">{persona.description}</p>
              </div>
              
              <div className="w-12 h-12 bg-white border-neo rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
