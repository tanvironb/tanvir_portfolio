"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Download } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Connect</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <a
            href="mailto:contact@example.com"
            className="flex flex-col items-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all group"
          >
            <div className="p-4 rounded-full bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-white font-bold mb-2">Email</h3>
            <p className="text-slate-400 text-sm">tahmmed2001@example.com</p>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all group"
          >
            <div className="p-4 rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors mb-4">
              <FaLinkedin className="w-6 h-6" />
            </div>
            <h3 className="text-white font-bold mb-2">LinkedIn</h3>
            <p className="text-slate-400 text-sm">Tanvir Ahmmed</p>
          </a>

          <div
            className="flex flex-col items-center p-8 rounded-2xl bg-white/5 border border-white/10 transition-all group"
          >
            <div className="p-4 rounded-full bg-pink-500/10 text-pink-400 mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-white font-bold mb-2">Location</h3>
            <p className="text-slate-400 text-sm">Kuala Lumpur, Malaysia</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <a
            href="/Tanvir%20Ahmmed.pdf"
            download="Tanvir_Ahmmed_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
