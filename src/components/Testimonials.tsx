"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivers",
    position: "Founder @ NeoBank",
    review: "Nandita took our complex financial dashboard and turned it into a high-converting masterpiece. The user engagement jumped by 40%.",
    image: "https://i.pravatar.cc/150?u=alex",
  },
  {
    name: "Sarah Chen",
    position: "Product Lead @ Nexus",
    review: "The design system she built for us has cut our development time in half. Pixel perfection at its finest.",
    image: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Marcus Thorne",
    position: "Creative Director @ StudioX",
    review: "Her ability to blend bold neo-brutalist aesthetics with rigorous accessibility standards is truly impressive.",
    image: "https://i.pravatar.cc/150?u=marcus",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-32 px-6 bg-brand-sage">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl uppercase mb-20 text-center">Wall of Praise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, rotate: -1 }}
              className="bg-white border-neo p-10 shadow-neo-md rounded-tr-[40px] rounded-bl-[40px]"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#ffbc2e" color="#ffbc2e" />
                ))}
              </div>
              <p className="text-xl font-bold italic mb-8 leading-relaxed">"{t.review}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black border-neo overflow-hidden rounded-full">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-black font-cabinet uppercase">{t.name}</p>
                  <p className="text-xs font-bold opacity-60 uppercase">{t.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
