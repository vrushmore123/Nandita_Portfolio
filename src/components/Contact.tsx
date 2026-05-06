"use client";

import { motion } from "framer-motion";
import { NeoButton } from "./ui/NeoButton";
import { Mail, Send, ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-brand-yellow dot-pattern border-t-2 border-black overflow-hidden relative">
      {/* Floating Shapes */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 -right-20 w-64 h-64 border-2 border-black opacity-10 -z-0" 
      />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-6xl md:text-8xl uppercase mb-8">Let's Build Something Amazing</h2>
        <p className="text-xl md:text-2xl font-black uppercase mb-12">
          Currently available for high-impact projects.
        </p>

        <div className="bg-white border-neo p-10 shadow-neo-lg rounded-3xl text-left">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase">Your Name</label>
                <input 
                  type="text" 
                  className="w-full bg-[#f4f4f4] border-neo p-4 focus:bg-brand-sage transition-colors outline-none font-bold"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase">Your Email</label>
                <input 
                  type="email" 
                  className="w-full bg-[#f4f4f4] border-neo p-4 focus:bg-brand-sage transition-colors outline-none font-bold"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase">Message</label>
              <textarea 
                rows={5}
                className="w-full bg-[#f4f4f4] border-neo p-4 focus:bg-brand-sage transition-colors outline-none font-bold"
                placeholder="Tell me about your vision..."
              />
            </div>
            <NeoButton variant="primary" size="lg" className="w-full flex items-center justify-center gap-4">
              SEND MESSAGE <Send size={20} />
            </NeoButton>
          </form>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse border-2 border-black" />
            <span className="font-black uppercase text-sm">Available Now</span>
          </div>
          <a href="mailto:hello@nandita.dev" className="flex items-center gap-2 hover:underline">
            <Mail size={18} />
            <span className="font-black uppercase text-sm">hello@nandita.dev</span>
          </a>
        </div>
      </div>
    </section>
  );
};
