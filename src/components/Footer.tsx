"use client";

import { Zap, Globe, Cpu, ArrowUp } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-charcoal text-white pt-20 pb-10 px-6 border-t-2 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-yellow flex items-center justify-center border-neo">
                <Zap className="text-black fill-black" size={24} />
              </div>
              <span className="font-cabinet font-extrabold text-3xl tracking-tighter uppercase">
                Nandita
              </span>
            </div>
            <p className="text-gray-400 text-lg max-w-sm font-medium">
              Architecting the next generation of intelligent web applications with Neo-Brutalist precision.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Globe />, href: "#" },
                { icon: <Cpu />, href: "#" },
                { icon: <Zap />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 bg-brand-dark-gray border-neo flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-black uppercase">Navigation</h4>
            <ul className="space-y-4 text-gray-400 font-bold uppercase text-sm">
              <li><Link href="#" className="hover:text-brand-yellow transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-brand-yellow transition-colors">About</Link></li>
              <li><Link href="#projects" className="hover:text-brand-yellow transition-colors">Projects</Link></li>
              <li><Link href="#contact" className="hover:text-brand-yellow transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-black uppercase">Technical</h4>
            <ul className="space-y-4 text-gray-400 font-bold uppercase text-sm">
              <li><span className="hover:text-brand-yellow transition-colors cursor-pointer">AI Automation</span></li>
              <li><span className="hover:text-brand-yellow transition-colors cursor-pointer">Web Scraping</span></li>
              <li><span className="hover:text-brand-yellow transition-colors cursor-pointer">SaaS Architecture</span></li>
              <li><span className="hover:text-brand-yellow transition-colors cursor-pointer">Open Source</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 border-t-2 border-brand-dark-gray flex flex-col md:row justify-between items-center gap-6">
          <p className="text-xs font-black uppercase text-gray-500">
            © 2026 NANDITA DEV. ALL RIGHTS RESERVED. BUILT WITH NEXT.JS 15.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 bg-brand-yellow text-black border-neo px-4 py-2 font-black uppercase text-xs shadow-neo-sm hover:translate-y-1 transition-all"
          >
            BACK TO TOP <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
