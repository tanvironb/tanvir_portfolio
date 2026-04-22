"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-white/10 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

          {/* Experience Item */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative md:flex items-center justify-between w-full md:even:flex-row-reverse group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] md:left-1/2 top-6 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-purple-500 z-10 group-hover:bg-purple-500 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

            <div className="md:w-5/12 mb-8 md:mb-0">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 rounded-2xl p-6 transition-colors md:text-right">
                <div className="flex items-center gap-3 mb-2 md:justify-end">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 md:order-last">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Developer</h3>
                </div>
                <div className="text-purple-400 font-medium mb-4">NAMA Foundation</div>
                
                <ul className="space-y-2 text-slate-300 md:text-right list-inside flex flex-col items-start md:items-end">
                  <li className="flex items-start md:justify-end gap-2 text-left md:text-right">
                    <span className="text-purple-500 mt-1 md:hidden">•</span>
                    <span>Built the comprehensive UniPortal system</span>
                    <span className="text-purple-500 mt-1 hidden md:inline">•</span>
                  </li>
                  <li className="flex items-start md:justify-end gap-2 text-left md:text-right">
                    <span className="text-purple-500 mt-1 md:hidden">•</span>
                    <span>Developed robust full-stack features</span>
                    <span className="text-purple-500 mt-1 hidden md:inline">•</span>
                  </li>
                  <li className="flex items-start md:justify-end gap-2 text-left md:text-right">
                    <span className="text-purple-500 mt-1 md:hidden">•</span>
                    <span>Worked with real users and integrated production workflows</span>
                    <span className="text-purple-500 mt-1 hidden md:inline">•</span>
                  </li>
                  <li className="flex items-start md:justify-end gap-2 text-left md:text-right">
                    <span className="text-purple-500 mt-1 md:hidden">•</span>
                    <span>Collaborated closely with the Public Relations team</span>
                    <span className="text-purple-500 mt-1 hidden md:inline">•</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-5/12 hidden md:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
