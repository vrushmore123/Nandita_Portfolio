"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[1000] bg-brand-yellow flex flex-col items-center justify-center border-b-8 border-black"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="w-24 h-24 bg-black flex items-center justify-center border-neo mb-8 shadow-neo-lg"
      >
        <Zap className="text-brand-yellow fill-brand-yellow" size={48} />
      </motion.div>
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: 200 }}
        transition={{ duration: 1.5 }}
        className="h-2 bg-black border-2 border-black rounded-full overflow-hidden"
      >
        <motion.div 
          animate={{ x: [-200, 200] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="w-1/2 h-full bg-brand-sage"
        />
      </motion.div>
      <p className="mt-4 font-cabinet font-black uppercase tracking-tighter text-2xl">
        Initializing Nandita.OS
      </p>
    </motion.div>
  );
};
