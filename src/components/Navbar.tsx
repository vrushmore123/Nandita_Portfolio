"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NeoButton } from "./ui/NeoButton";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-black ${
        isScrolled ? "h-16 bg-brand-yellow/95 backdrop-blur-sm" : "h-20 bg-brand-yellow"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-black flex items-center justify-center border-neo group-hover:rotate-12 transition-transform">
            <Zap className="text-brand-yellow fill-brand-yellow" size={24} />
          </div>
          <span className="font-cabinet font-extrabold text-2xl tracking-tighter uppercase">
            Nandita Tole
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-satoshi font-bold text-sm uppercase tracking-wider hover:underline decoration-2 underline-offset-4"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <NeoButton variant="primary" size="sm" className="hidden sm:block">
            RESUME
          </NeoButton>
          <button
            className="md:hidden p-2 border-neo bg-white shadow-neo-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-yellow border-b-2 border-black p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-cabinet font-extrabold text-2xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <NeoButton variant="primary" className="w-full mt-4">
                RESUME
              </NeoButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
