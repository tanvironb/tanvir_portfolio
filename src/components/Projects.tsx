"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const mainProject = {
  title: "NAMA Event App",
  description: "A comprehensive event management and attendee engagement mobile application featuring agenda schedules, peer networking, QR-based check-ins, push notifications, and gamified leaderboards.",
  tech: ["Flutter", "Riverpod", "Firebase"],
  image: "/nama_event.png",
  github: "https://github.com/tanvironb/NAMA_Event",
  live: "",
};

const otherProjects = [
  {
    title: "UniPortal",
    description: "A comprehensive scholarship & application portal developed for the NAMA Foundation. Features include real user management, production workflows, and automated email processing.",
    tech: ["React (Vite)", "Supabase", "Resend API", "Tailwind CSS"],
    github: "https://github.com/tanvironb/NAMA_uniPortal/tree/master",
    Website: "https://uni-scholarship.namafoundation.org/",
  },
  {
    title: "KitaID Mobile App",
    description: "A secure digital identity mobile application designed to streamline user verification and digital access.",
    tech: ["Flutter", "Firebase"],
    github: "https://github.com/tanvironb/kitaid1",
  },
  {
    title: "UIAFOOD Website",
    description: "A food ordering platform specifically designed for the university community to simplify meal purchases.",
    tech: ["Laravel", "PHP", "JavaScript"],
    github: "https://github.com/tanvironb/UIA-food",
  },
  {
    title: "IQRAC Website",
    description: "An interactive web platform designed for educational purposes and resource management.",
    tech: ["Web Technologies"],
    Website: "https://sites.google.com/d/1R2LJ3r7837JK12tTN9aDv9ImFx1-yolM/p/1om_M4-Dp6ZGa_Pmx3apyduY4F2xk57lR/edit",
  },
  {
    title: "Ninja Samurai Game",
    description: "An engaging 2D action game featuring smooth animations, combat mechanics, and level progression.",
    tech: ["Game Engine", "C#"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Main Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative group rounded-3xl overflow-hidden bg-slate-900 border border-white/10 mb-12 flex flex-col lg:flex-row"
        >
          <div className="lg:w-1/2 relative h-64 lg:h-auto overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 group-hover:scale-105 transition-transform duration-700 z-10 pointer-events-none"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={mainProject.image} alt={mainProject.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:hidden z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent hidden lg:block z-10 pointer-events-none" />
          </div>

          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative z-20">
            <span className="text-purple-400 font-semibold mb-2">Main Featured Project</span>
            <h3 className="text-3xl font-bold text-white mb-4">{mainProject.title}</h3>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-6">
              <p className="text-slate-300">{mainProject.description}</p>
            </div>
            <div className="flex flex-wrap gap-3 mb-8">
              {mainProject.tech.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-sm border border-blue-500/20">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {mainProject.github && (
                <a href={mainProject.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                  <FaGithub className="w-5 h-5" />
                </a>
              )}
              {mainProject.live && (
                <a href={mainProject.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium transition-all">
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-900/50 border border-white/5 hover:border-purple-500/30 rounded-2xl p-8 transition-all hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                  {project.Website && (
                    <a href={project.Website} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                      <CgWebsite className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{project.title}</h3>
              <p className="text-slate-400 mb-6 text-sm flex-grow min-h-[60px]">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs font-medium text-slate-500">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
