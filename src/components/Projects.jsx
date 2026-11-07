import React from 'react';
import { portfolioData } from '../data/portfolioData';
import Icon from './Icon';

export default function Projects() {
  const { projects } = portfolioData;

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
          Sistemas web desarrollados con arquitectura moderna, lógica interactiva y persistencia de datos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <div key={proj.id || idx} className="neu-card p-6 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between">
            <div>
              {/* Top Banner & Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-purple-950/90 text-white font-mono text-xs font-black border border-purple-400/30">
                    PROYECTO 0{idx + 1}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#7C4DFF] text-white font-mono text-xs font-bold border border-white/30 shadow-[0_0_10px_rgba(124,77,255,0.6)]">
                    {proj.badge}
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-purple-300">
                  Alejo Ezequiel Sosa
                </span>
              </div>

              {/* Title & Description */}
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  {proj.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#DDD6FE] mt-1">
                  {proj.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-purple-100 mt-3 leading-relaxed">
                  {proj.description}
                </p>
              </div>
            </div>

            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-purple-400/20 mb-3">
                {proj.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-xl bg-purple-950/80 border border-purple-400/30 text-[11px] font-mono font-bold text-white shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              {proj.githubUrl && (
                <div className="pt-2 flex justify-end">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-purple-200 hover:text-white transition-colors"
                  >
                    <Icon name="Github" size={14} className="text-[#A78BFA]" />
                    <span>Ver Código en GitHub</span>
                    <Icon name="ExternalLink" size={12} />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
