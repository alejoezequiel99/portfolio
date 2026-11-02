import React from 'react';
import { portfolioData } from '../data/portfolioData';
import Icon from './Icon';

export default function Projects() {
  const { projects } = portfolioData;
  const fddProject = projects.find(p => p.id === 'fdd-project');
  const portfolioProj = projects.find(p => p.id === 'portfolio-alejo');

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-purple-400/20">
        <div>
          <div className="section-tag mb-2">
            <Icon name="Layers" size={14} className="text-[#A78BFA]" />
            <span>03 // MÓDULO &lt;/&gt; PORTFOLIO • PROYECTOS & TRABAJOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            PROYECTOS <span className="text-[#A78BFA]">DESTACADOS</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-purple-200 max-w-md">
          Sistemas web desarrollados con arquitectura moderna, lógica interactiva y estética neumórfica.
        </p>
      </div>

      <div className="space-y-8">
        
        {/* ==============================================================
            PROYECTO 1: FDD (FORWARD DESIGN DEVELOPER)
            ============================================================== */}
        <div className="neu-card p-6 sm:p-8 rounded-3xl relative overflow-hidden">
          
          {/* Top Banner & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-purple-950/90 text-white font-mono text-xs font-black border border-purple-400/30">
                PROYECTO 01
              </span>
              <span className="px-3 py-1 rounded-full bg-[#7C4DFF] text-white font-mono text-xs font-bold border border-white/30 shadow-[0_0_10px_rgba(124,77,255,0.6)]">
                {fddProject.badge}
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-purple-300">
              Desarrollado por Alejo Ezequiel Sosa
            </span>
          </div>

          {/* Project Title & Purpose */}
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              {fddProject.title}
            </h3>
            <p className="text-sm sm:text-base font-bold text-[#DDD6FE] mt-1">
              {fddProject.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-purple-100 max-w-3xl mt-3 leading-relaxed">
              {fddProject.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-purple-400/20">
            {fddProject.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-xl bg-purple-950/80 border border-purple-400/30 text-xs font-mono font-bold text-white shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

        {/* ==============================================================
            PROYECTO 2: PORTFOLIO INTERACTIVO (ALEJO SOSA)
            ============================================================== */}
        <div className="neu-card p-6 sm:p-8 rounded-3xl relative overflow-hidden">
          
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-purple-950/90 text-white font-mono text-xs font-black border border-purple-400/30">
                PROYECTO 02
              </span>
              <span className="px-3 py-1 rounded-full bg-[#7C4DFF] text-white font-mono text-xs font-bold border border-white/30 shadow-[0_0_10px_rgba(124,77,255,0.6)]">
                {portfolioProj.badge}
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-purple-300">
              Desarrollado por Alejo Ezequiel Sosa
            </span>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              {portfolioProj.title}
            </h3>
            <p className="text-sm sm:text-base font-bold text-[#DDD6FE] mt-1">
              {portfolioProj.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-purple-100 max-w-3xl mt-3 leading-relaxed">
              {portfolioProj.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-purple-400/20">
            {portfolioProj.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-xl bg-purple-950/80 border border-purple-400/30 text-xs font-mono font-bold text-white shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
