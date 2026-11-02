import React from 'react';
import { portfolioData } from '../data/portfolioData';
import Icon from './Icon';
import { motion } from 'framer-motion';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certificaciones" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-purple-400/20">
        <div>
          <div className="section-tag mb-2">
            <Icon name="Award" size={14} className="text-[#A78BFA]" />
            <span>04 // MÓDULO TIPOGRAFÍA [T] • FORMACIÓN Y TITULACIONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            03 <span className="text-[#A78BFA]">CERTIFICACIONES</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-purple-200 max-w-md">
          Estudios formales, títulos certificados y trayectos de especialización profesional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            whileHover={{ y: -5 }}
            className="neu-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top Indicator */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-neu-purple-sm ${
                  cert.isCompleted 
                    ? 'bg-gradient-to-br from-[#7C4DFF] to-[#4F20D2] border-white/40 text-white' 
                    : 'bg-purple-950/80 border-purple-400/30 text-purple-200'
                }`}>
                  <Icon name="Award" size={22} />
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border ${
                  cert.isCompleted 
                    ? 'bg-emerald-950/80 text-emerald-300 border-emerald-400/40 shadow-[0_0_8px_rgba(52,211,153,0.3)]' 
                    : 'bg-purple-950/80 text-purple-200 border-purple-400/30'
                }`}>
                  {cert.status}
                </span>
              </div>

              <span className="text-xs font-mono font-bold text-[#DDD6FE] uppercase block">
                {cert.institution}
              </span>

              <h3 className="text-xl font-black text-white leading-tight mt-1 mb-3">
                {cert.title}
              </h3>

              <p className="text-xs sm:text-sm text-purple-200 leading-relaxed font-normal">
                {cert.desc}
              </p>
            </div>

            {/* Bottom Info / Link */}
            <div className="pt-4 mt-6 border-t border-purple-400/20 flex items-center justify-between text-xs font-mono">
              {cert.location ? (
                <span className="flex items-center gap-1.5 text-purple-200">
                  <Icon name="MapPin" size={14} className="text-[#A78BFA]" />
                  {cert.location}
                </span>
              ) : (
                <a
                  href={`https://${cert.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#DDD6FE] font-bold hover:underline flex items-center gap-1"
                >
                  <span>{cert.website}</span>
                  <Icon name="ExternalLink" size={12} />
                </a>
              )}
              
              <span className="w-2 h-2 rounded-full bg-purple-400/40" />
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
