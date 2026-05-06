"use client";

import { motion } from "framer-motion";

const techStack = [
  "Figma", "Adobe XD", "Framer", "Sketch", "Prototyping", 
  "User Research", "Wireframing", "Visual Design", "Design Systems", "Webflow",
  "After Effects", "Illustrator", "Photoshop", "Accessibility", "A/B Testing"
];

export const Marquee = () => {
  return (
    <div className="bg-brand-charcoal border-y-2 border-black py-8 overflow-hidden">
      <motion.div
        animate={{ x: [0, -1035] }}
        transition={{ 
          repeat: Infinity, 
          duration: 30, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap gap-16"
      >
        {[...techStack, ...techStack].map((tech, i) => (
          <span
            key={i}
            className="text-brand-sage opacity-50 font-cabinet font-black text-4xl md:text-6xl uppercase"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
