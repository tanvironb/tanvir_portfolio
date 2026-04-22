"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Smartphone, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: ["React", "HTML", "CSS", "Tailwind"],
    color: "from-blue-400 to-cyan-400",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Laravel", "PHP"],
    color: "from-purple-400 to-pink-400",
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["Flutter", "Firebase"],
    color: "from-orange-400 to-red-400",
  },
  {
    title: "Data & Tools",
    icon: Database,
    skills: ["Power BI", "Tableau", "WEKA", "Figma"],
    color: "from-green-400 to-emerald-400",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-colors"
              >
                <div className="h-full bg-slate-900 rounded-2xl p-6 relative overflow-hidden border border-transparent group-hover:border-white/5 transition-colors">
                  <div className={`absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br ${category.color} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                  
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white opacity-90`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium group-hover:border-slate-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
