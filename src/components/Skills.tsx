"use client";

import { motion } from "framer-motion";
import { Code2, Server, BrainCircuit, Database, Cpu, Wrench } from "lucide-react";

const skills = [
  {
    category: "User Research",
    icon: <BrainCircuit />,
    items: ["User Interviews", "Personas", "A/B Testing", "Heuristic Evaluation"],
  },
  {
    category: "Visual Design",
    icon: <Code2 />,
    items: ["Branding", "Typography", "Color Theory", "Illustration"],
  },
  {
    category: "Interaction",
    icon: <Zap />,
    items: ["Micro-interactions", "Prototyping", "Motion Design", "Framer"],
  },
  {
    category: "Strategy",
    icon: <Database />,
    items: ["Information Architecture", "User Flows", "Wireframing", "Product Strategy"],
  },
  {
    category: "Tools",
    icon: <Wrench />,
    items: ["Figma", "Adobe Creative Suite", "Sketch", "Webflow", "Storybook"],
  },
  {
    category: "Collaboration",
    icon: <Server />,
    items: ["Design Ops", "Developer Handoff", "Agile", "Miro"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-brand-yellow border-y-2 border-black dot-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-7xl uppercase mb-6">Technical Arsenal</h2>
          <p className="text-xl font-bold max-w-2xl mx-auto uppercase">
            A comprehensive stack built for speed, scalability, and intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white border-neo p-8 rounded-2xl shadow-neo-md group"
            >
              <div className="w-16 h-16 bg-brand-sage border-neo flex items-center justify-center mb-6 group-hover:bg-brand-yellow transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-black font-cabinet uppercase mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 bg-[#f4f4f4] border-neo text-[10px] font-black uppercase"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
