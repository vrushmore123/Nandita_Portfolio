"use client";

import { motion } from "framer-motion";
import { NeoButton } from "./ui/NeoButton";

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Visuals */}
          <div className="relative">
            <div className="relative z-10 bg-brand-yellow border-neo p-4 shadow-neo-lg rotate-3 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                alt="Developer Profile"
                className="w-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-sage border-neo -z-0 -rotate-6" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-black border-neo -z-0 rotate-12" />
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl uppercase leading-none">
              Spatial & Digital <br />
              <span className="bg-brand-yellow px-2 border-neo shadow-neo-sm">Experiences</span>
            </h2>
            <div className="space-y-6 text-xl leading-relaxed">
              <p>
                I am a UI/UX Designer with a background in **Architecture**, bringing a structured,
                spatial, and human-centered approach to digital design. My work focuses on creating
                intuitive, visually balanced, and user-friendly experiences across web and mobile platforms.
              </p>
              <p>
                With a strong foundation in design principles such as hierarchy, proportion, and flow, I 
                translate complex ideas into clear and engaging interfaces. My architectural mindset 
                allows me to think beyond screens—designing experiences that guide users seamlessly 
                through interaction journeys.
              </p>
              <p>
                From research and wireframing to final UI execution, I ensure consistency, usability, 
                and scalability across systems, designing solutions that maintain both functionality 
                and a strong visual identity.
              </p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {[
                { label: "Exp.", value: "2+ Yrs" },
                { label: "Certs", value: "10+" },
                { label: "Projs", value: "25+" },
                { label: "Client", value: "15+" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, x: -5, boxShadow: "8px 8px 0px 0px #000" }}
                  className="bg-white border-neo p-4 shadow-neo-sm transition-all"
                >
                  <p className="text-[10px] font-black uppercase opacity-60">{stat.label}</p>
                  <p className="text-xl font-black font-cabinet">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
