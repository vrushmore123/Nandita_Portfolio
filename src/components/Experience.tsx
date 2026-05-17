"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    title: "DISCOVER",
    description: "Understanding the problem before designing the solution.I analyze user behavior, business goals, and product constraints to identify real pain points. This stage focuses on clarity—defining what needs to be solved and why it matters.",
    icon: <Lightbulb className="text-brand-sage" size={32} />,
    glow: "border-brand-sage",
  },
  {
    title: "STRUCTURE",
    description: "Designing the foundation through logic and flow.Using principles of hierarchy, spatial thinking, and information architecture, I map user journeys, flows, and system structure to create intuitive and scalable experiences.",
    icon: <Code2 className="text-brand-yellow" size={32} />,
    glow: "border-brand-yellow",
  },
  {
    title: "DESIGN",
    description: "Bringing ideas to life through interfaces and interaction.I translate concepts into wireframes and high-fidelity UI, focusing on usability, consistency, and visual clarity while building strong design systems.",
    icon: <Rocket className="text-white" size={32} />,
    glow: "border-white",
  },
  {
    title: "VALIDATE",
    description: "Refining through feedback and real-world use.Through testing, iteration, and collaboration with developers, I ensure the final product is not just visually strong, but functional, efficient, and ready for scale.",
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
