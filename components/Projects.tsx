"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Nexus AI Platform",
      description: "Enterprise grade artificial intelligence interface with real-time data processing and predictive modeling capabilities.",
      tech: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
    },
    {
      title: "Quantum Finance",
      description: "Decentralized finance dashboard with 3D data visualization and smart contract integration.",
      tech: ["React", "Three.js", "Web3.js", "Tailwind"],
    }
  ];

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Executed Protocols <span className="text-emerald-500">(Projects)</span></h2>
          <p className="text-zinc-400">Recent high-impact deployments and architectural implementations.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="h-48 bg-zinc-900/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors z-0" />
                {/* Image placeholder */}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                <p className="text-zinc-400 mb-6 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs px-2 py-1 bg-white/5 rounded text-zinc-300 border border-white/10">{t}</span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-sm text-white hover:text-emerald-400 transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </button>
                  <button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                    <Github size={16} /> Source
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
