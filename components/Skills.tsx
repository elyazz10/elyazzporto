"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "AI",
    "Tailwind", "PostgreSQL", "Docker", "Firebase", "Framer Motion"
  ];

  return (
    <section className="py-24 px-6 relative z-10 bg-[#050810]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Neural Pathways <span className="text-emerald-500">(Skills)</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Core capabilities and technology nodes integrated into the main system.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="px-6 py-3 glass-panel rounded-full text-white font-medium hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
