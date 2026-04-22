"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Code2 } from "lucide-react";

const infoCards = [
  {
    title: "Education",
    description: "IIUM (Graduating 2026)",
    icon: GraduationCap,
    gradient: "from-blue-500/20 to-purple-500/20",
    border: "group-hover:border-blue-500/50",
  },
  {
    title: "Location",
    description: "Kuala Lumpur",
    icon: MapPin,
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50",
  },
  {
    title: "Focus",
    description: "Web, Mobile & Data Solutions",
    icon: Code2,
    gradient: "from-pink-500/20 to-orange-500/20",
    border: "group-hover:border-pink-500/50",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-lg text-slate-300"
          >
            <p>
              Hello! I&apos;m an IT student with a strong passion for UI/UX design, software development, and data-driven solutions.
              My journey in tech has equipped me with a diverse skill set, allowing me to build comprehensive full-stack web and mobile applications.
            </p>
            <p>
              Whether it&apos;s designing an intuitive user interface, architecting a robust backend system, or analyzing data to derive meaningful insights, 
              I enjoy tackling complex problems and delivering high-quality, impactful digital solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {infoCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative p-[1px] rounded-2xl bg-gradient-to-r ${card.gradient} overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className={`relative h-full bg-slate-950/90 backdrop-blur-xl p-6 rounded-2xl border border-white/5 ${card.border} transition-colors duration-300 flex items-center space-x-4`}>
                    <div className="p-3 rounded-xl bg-white/5 text-slate-300 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-slate-400">{card.title}</h3>
                      <p className="text-lg font-semibold text-white">{card.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
