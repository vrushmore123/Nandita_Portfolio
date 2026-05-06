"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "white";
  size?: "sm" | "md" | "lg";
}

export const NeoButton = ({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: NeoButtonProps) => {
  const variants = {
    primary: "bg-black text-white hover:bg-brand-dark-gray",
    secondary: "bg-brand-yellow text-black",
    white: "bg-white text-black",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base font-bold",
    lg: "px-8 py-4 text-lg font-black",
  };

  return (
    <motion.button
      whileHover={{ x: 4, y: 4, boxShadow: "0px 0px 0px 0px #000" }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "border-neo rounded-xl transition-all duration-200 cubic-bezier(0.175,0.885,0.32,1.275) relative",
        variants[variant],
        sizes[size],
        variant === "primary" ? "shadow-neo-md" : "shadow-neo-sm",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
