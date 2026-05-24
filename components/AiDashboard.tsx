"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, GitBranch, Activity, Code2, Database } from "lucide-react";

export default function AiDashboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="min-h-screen py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-display font-bold mb-4 flex items-center gap-3">
            <Cpu className="text-emerald-500" size={36} />
            System Overview
          </h2>
          <p className="text-zinc-400">Real-time metrics and capabilities analysis.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Main Terminal Widget */}
          <motion.div variants={itemVariants} className="md:col-span-2 glass-panel rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
              <Terminal className="text-emerald-400" size={20} />
              <span className="font-mono text-sm text-zinc-300">alyas@os:~</span>
            </div>
            <div className="font-mono text-sm space-y-2">
              <p className="text-emerald-400">$ analyzing skill parameters...</p>
              <p className="text-zinc-300">  &gt; Initializing Next.js Engine [OK]</p>
              <p className="text-zinc-300">  &gt; Loading TypeScript Models [OK]</p>
              <p className="text-zinc-300">  &gt; Connecting to Neural Net (AI) [OK]</p>
              <p className="text-zinc-300">  &gt; Booting Three.js Render Pipeline [OK]</p>
              <p className="text-emerald-400 mt-4">$ status</p>
              <p className="text-white">All systems operational. Ready to build.</p>
            </div>
          </motion.div>

          {/* Activity Widget */}
          <motion.div variants={itemVariants} className="glass-panel rounded-xl p-6 relative group">
            <div className="absolute top-0 right-0 p-4">
              <Activity className="text-emerald-500/50" size={24} />
            </div>
            <h3 className="text-sm text-zinc-400 mb-2 font-mono">ACTIVITY_INDEX</h3>
            <div className="text-4xl font-bold text-white mb-4">98.5%</div>
            <div className="w-full bg-white/5 rounded-full h-2">
              <div className="bg-emerald-500 h-2 rounded-full w-[98.5%] relative">
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-400 rounded-full blur-[4px]" />
              </div>
            </div>
          </motion.div>

          {/* Github Stats Widget */}
          <motion.div variants={itemVariants} className="glass-panel rounded-xl p-6 group">
            <div className="flex items-center gap-3 mb-6">
              <GitBranch className="text-zinc-400" size={20} />
              <h3 className="font-medium text-white">Repository Stats</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Commits this year</span>
                <span className="text-emerald-400 font-mono">1,405</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Active Projects</span>
                <span className="text-emerald-400 font-mono">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400 text-sm">Stars Earned</span>
                <span className="text-emerald-400 font-mono">342</span>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack Matrix */}
          <motion.div variants={itemVariants} className="md:col-span-2 glass-panel rounded-xl p-6">
            <h3 className="text-sm text-zinc-400 mb-6 font-mono border-b border-white/10 pb-4">TECHNOLOGY_MATRIX</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["React / Next.js", "TypeScript", "Node.js", "Python / AI", "Three.js", "TailwindCSS", "PostgreSQL", "Docker"].map((tech, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 rounded-lg p-3 border border-white/5 hover:border-emerald-500/30 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-sm font-medium text-zinc-300">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
