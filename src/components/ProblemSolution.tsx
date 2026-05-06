"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export const ProblemSolution = () => {
  return (
    <section className="py-32 px-6 bg-white border-t-2 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#f4f4f4] border-2 border-dashed border-gray-400 p-12 rounded-3xl opacity-80"
          >
            <div className="w-16 h-16 bg-white border-2 border-dashed border-gray-400 flex items-center justify-center mb-8">
              <X className="text-gray-400" size={32} />
            </div>
            <h3 className="text-4xl font-black font-cabinet uppercase mb-8 text-gray-500">The Problem</h3>
            <ul className="space-y-4">
              {[
                "Confusing user journeys and high drop-off rates",
                "Inconsistent visual branding across platforms",
                "Terrible accessibility and mobile responsiveness",
                "Lack of emotional connection with the user",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-gray-500 font-medium text-lg">
                  <X className="shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-yellow border-neo p-12 rounded-3xl shadow-neo-lg"
          >
            <div className="w-16 h-16 bg-black border-neo flex items-center justify-center mb-8">
              <Check className="text-brand-yellow" size={32} />
            </div>
            <h3 className="text-4xl font-black font-cabinet uppercase mb-8">The Solution</h3>
            <ul className="space-y-4">
              {[
                "Data-driven UX audits and user flow optimization",
                "Unified, scalable design systems (Atomic Design)",
                "Accessibility-first (WCAG 2.1) visual design",
                "High-fidelity interactive prototyping & testing",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start font-black text-lg">
                  <Check className="shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
