"use client";

import { motion } from "framer-motion";
import { Globe, ExternalLink, Bot, Shield, Zap } from "lucide-react";
import { NeoButton } from "./ui/NeoButton";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Nova Bank Rebrand",
    description: "Complete visual identity and mobile app overhaul for a digital-first neo-bank.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    tags: ["Visual Design", "Branding", "Figma"],
    link: "#",
    github: "#",
    size: "large",
  },
  {
    title: "EcoTrack Mobile",
    description: "End-to-end UX research and interface design for a sustainability tracking app.",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800",
    tags: ["UX Research", "Mobile UI"],
    link: "#",
    github: "#",
    size: "small",
  },
  {
    title: "Nexus System",
    description: "A comprehensive design system built for multi-platform enterprise scalability.",
    image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=800",
    tags: ["Design Ops", "Figma"],
    link: "#",
    github: "#",
    size: "small",
  },
  {
    title: "Spatial UI Concept",
    description: "Exploring interaction patterns for next-gen spatial computing and VR.",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=800",
    tags: ["AR/VR", "Prototyping"],
    link: "#",
    github: "#",
    size: "medium",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-brand-charcoal border-t-2 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl uppercase text-white mb-6">Featured Works</h2>
            <p className="text-brand-sage text-xl font-bold uppercase">Building the future, one commit at a time.</p>
          </div>
          <NeoButton variant="secondary" size="lg">VIEW ALL GITHUB</NeoButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={cn(
                "relative bg-white border-neo rounded-3xl overflow-hidden shadow-neo-md group flex flex-col",
                project.size === "large" ? "md:col-span-2 lg:col-span-8 lg:row-span-2" :
                  project.size === "medium" ? "md:col-span-2 lg:col-span-12 lg:mt-8" :
                    "md:col-span-1 lg:col-span-4"
              )}
            >
              {/* Project Image */}
              <div className={cn(
                "relative overflow-hidden border-b-2 border-black bg-gray-100",
                project.size === "large" ? "h-80 md:h-[500px]" : "h-64 md:h-80"
              )}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} className="p-4 bg-white border-neo shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                    <Globe size={24} />
                  </a>
                  <a href={project.link} className="p-4 bg-brand-yellow border-neo shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-2 py-1 bg-brand-sage/20 border-neo text-[10px] font-black uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-black font-cabinet uppercase mb-4">{project.title}</h3>
                  <p className="text-gray-600 font-medium mb-6 line-clamp-2 md:line-clamp-none">{project.description}</p>
                </div>
                <div className="flex gap-4">
                  <NeoButton variant="primary" size="sm">LIVE DEMO</NeoButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
