"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronRight, Download, TerminalSquare } from "lucide-react";

export default function Hero() {
  const titles = [
    "Full Stack Developer",
    "AI Engineer",
    "Creative Technologist",
    "Digital Architect",
    "Startup Builder",
  ];

  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden z-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10"
      >
        <motion.div 
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass-panel text-sm font-medium text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="relative flex h-2 w-2 inline-block mr-2 items-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          System Online. Awaiting Commands.
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-4 text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]">
          AHMAD <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">ILYAS</span>
        </h1>

        <div className="h-12 mb-8 flex justify-center items-center">
          <motion.p
            key={titleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl text-zinc-400 font-medium"
          >
            {titles[titleIndex]}
          </motion.p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-lg flex items-center gap-2 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            Explore Projects <ChevronRight size={18} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass-panel hover:bg-white/5 text-white font-medium rounded-lg flex items-center gap-2 transition-colors"
          >
            <Download size={18} /> Download CV
          </motion.button>
        </div>
      </motion.div>

      {/* Floating Elements Background Effect */}
      <div className="absolute top-1/2 left-1/4 w-[30vw] h-[30vw] bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2 -z-10 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-[25vw] h-[25vw] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 -z-10" />
    </section>
  );
}
