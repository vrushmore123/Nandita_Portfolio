"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    title: "Empathize",
    description: "Understanding user pain points through deep research, interviews, and data analysis.",
    icon: <Lightbulb className="text-brand-sage" size={32} />,
    glow: "border-brand-sage",
  },
  {
    title: "Prototype",
    description: "Transforming insights into high-fidelity interactive prototypes and design systems.",
    icon: <Code2 className="text-brand-yellow" size={32} />,
    glow: "border-brand-yellow",
  },
  {
    title: "Validate",
    description: "Iterative testing with real users to refine the experience and ensure pixel perfection.",
    icon: <Rocket className="text-white" size={32} />,
    glow: "border-white",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-brand-charcoal text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl uppercase mb-6">How I Build</h2>
          <p className="text-brand-sage text-xl font-bold uppercase">The lifecycle of a premium product.</p>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between gap-12">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#272727] -z-0 hidden md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 flex-1 bg-[#1c2620] border-neo p-8 rounded-3xl shadow-neo-lg"
            >
              <div className={`w-20 h-20 rounded-full bg-brand-charcoal border-4 ${step.glow} flex items-center justify-center mb-8 shadow-2xl`}>
                {step.icon}
              </div>
              <h3 className="text-3xl font-black font-cabinet uppercase mb-4">{step.title}</h3>
              <p className="text-gray-400 font-medium leading-relaxed">{step.description}</p>
              
              <div className="mt-8 text-brand-yellow font-black font-cabinet text-6xl opacity-10">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
