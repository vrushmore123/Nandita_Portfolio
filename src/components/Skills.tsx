"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  Zap,
  Layout,
  Search,
  Users
} from "lucide-react";

const skills = [
  {
    category: "Mobile & Web UI",
    icon: Layout,
    items: ["Responsive Design", "App Interfaces", "Mobile-First", "Grid Systems"],
  },
  {
    category: "Interaction",
    icon: Zap,
    items: ["Wireframing", "Prototyping", "User Flows", "Micro-interactions"],
  },
  {
    category: "Research",
    icon: Search,
    items: ["User Interviews", "Usability Testing", "UX Audits", "Behavior Analysis"],
  },
  {
    category: "Architecture",
    icon: BrainCircuit,
    items: ["Information Architecture", "Sitemaps", "Task Flows", "Spatial Thinking"],
  },
  {
    category: "Tools",
    icon: Users,
    items: [
      "Figma",
      "Adobe XD",
      "Framer",
      "Photoshop",
    ],
  },
  {
    category: "Collaboration",
    icon: Users,
    items: ["Dev Handoff", "Storybook", "Agile Workflow", "Feedback Loops"],
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-32 px-6 bg-brand-yellow border-y-2 border-black dot-pattern"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-7xl uppercase mb-6">
            What I Do
          </h2>

          <p className="text-xl font-bold max-w-2xl mx-auto uppercase">
            Designing systems that bridge the gap between architectural logic and digital interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white border-neo p-8 rounded-2xl shadow-neo-md group"
              >
                <div className="w-16 h-16 bg-brand-sage border-neo flex items-center justify-center mb-6 group-hover:bg-brand-yellow transition-colors">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-black font-cabinet uppercase mb-4">
                  {skill.category}
                </h3>

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
            );
          })}
        </div>
      </div>
    </section>
  );
};