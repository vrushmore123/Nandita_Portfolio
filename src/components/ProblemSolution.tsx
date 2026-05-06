"use client";

import { motion } from "framer-motion";
import { MoveRight, Compass, Layers, Smartphone } from "lucide-react";

export const ProblemSolution = () => {
  return (
    <section className="py-32 px-6 bg-white border-t-2 border-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block bg-brand-yellow border-neo px-4 py-1 rounded-full text-xs font-black uppercase">
              PHILOSOPHY
            </div>
            <h2 className="text-6xl md:text-8xl font-black font-cabinet leading-[0.9] uppercase">
              DESIGN <br />
              <span className="text-transparent text-stroke-2">APPROACH</span>
            </h2>
            <p className="text-xl font-bold max-w-lg leading-relaxed">
              Rooted in clarity, usability, and structure. Drawing from architectural thinking to design 
              digital spaces that feel natural and intuitive.
            </p>
          </motion.div>

          {/* Right: Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Spatial Logic",
                desc: "Focusing on how users move through digital environments with logical flow.",
                icon: <Compass size={32} />,
                color: "bg-brand-sage",
              },
              {
                title: "Atomic Systems",
                desc: "Designing scalable systems rather than isolated screens for consistency.",
                icon: <Layers size={32} />,
                color: "bg-brand-yellow",
              },
              {
                title: "Human Centered",
                desc: "Ensuring smooth navigation and intuitive interactions for every user.",
                icon: <Smartphone size={32} />,
                color: "bg-brand-dark-gray text-white",
              },
              {
                title: "Visual Identity",
                desc: "Maintaining strong aesthetics while never sacrificing core functionality.",
                icon: <MoveRight size={32} />,
                color: "bg-white",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`${p.color} border-neo p-8 rounded-3xl shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all`}
              >
                <div className="mb-6">{p.icon}</div>
                <h3 className="text-2xl font-black font-cabinet uppercase mb-2">{p.title}</h3>
                <p className="font-bold text-sm leading-relaxed opacity-70">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
