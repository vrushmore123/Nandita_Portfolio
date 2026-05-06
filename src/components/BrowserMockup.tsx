"use client";

import { motion } from "framer-motion";

export const BrowserMockup = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      className="w-full bg-white border-neo rounded-2xl shadow-neo-lg overflow-hidden"
    >
      {/* Header */}
      <div className="bg-black p-4 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="bg-[#272727] px-4 py-1 rounded-md text-[10px] text-gray-400 font-mono w-1/2 text-center">
          nandita-ai-dashboard.app
        </div>
        <div className="w-12" />
      </div>

      {/* Dashboard Content */}
      <div className="p-6 grid grid-cols-12 gap-4 bg-[#f4f4f4]">
        {/* Left Stats */}
        <div className="col-span-4 space-y-4">
          <div className="bg-brand-sage border-neo p-4 rounded-xl shadow-neo-sm">
            <p className="text-[10px] font-bold uppercase tracking-wider opacity-60">User Retention</p>
            <p className="text-2xl font-black font-cabinet">88.2%</p>
          </div>
          <div className="bg-brand-yellow border-neo p-4 rounded-xl shadow-neo-sm">
            <p className="text-[10px] font-bold uppercase tracking-wider opacity-60">Design Tokens</p>
            <p className="text-2xl font-black font-cabinet">1,240</p>
          </div>
          <div className="bg-brand-dark-gray text-white border-neo p-4 rounded-xl shadow-neo-sm">
            <p className="text-[10px] font-bold uppercase tracking-wider opacity-60">Accessibility</p>
            <p className="text-2xl font-black font-cabinet">WCAG AAA</p>
          </div>
        </div>

        {/* Center Graph */}
        <div className="col-span-8 bg-white border-neo p-6 rounded-xl shadow-neo-sm">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-xs font-black uppercase">Click Conversion Rate</h4>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-yellow" />
              <div className="w-2 h-2 rounded-full bg-brand-sage" />
            </div>
          </div>
          <div className="h-32 flex items-end gap-2">
            {[30, 50, 40, 80, 55, 75, 90, 45, 65, 85].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.8 + i * 0.05 }}
                className={`flex-1 border-t-2 border-x-2 border-black ${
                  i % 2 === 0 ? "bg-brand-yellow" : "bg-brand-sage"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Panel */}
        <div className="col-span-12 bg-[#171e19] border-neo p-4 rounded-xl shadow-neo-sm font-mono text-[10px] text-green-400">
          <div className="flex gap-4">
            <span className="opacity-50">14:52:10</span>
            <span>{"[SUCCESS]"} style_guide_v2_synced_to_figma_cloud</span>
          </div>
          <div className="flex gap-4 mt-1">
            <span className="opacity-50">14:52:12</span>
            <span>{"[INFO]"} analyzing_heatmap_data_for_checkout_flow</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
