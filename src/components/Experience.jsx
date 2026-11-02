import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import Icon from './Icon';
import { motion } from 'framer-motion';

export default function Experience() {
  const { experience } = portfolioData;
  const [filter, setFilter] = useState('all');

  return (
    <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-purple-400/20">
        <div>
          <div className="section-tag mb-2">
            <Icon name="Briefcase" size={14} className="text-[#A78BFA]" />
            <span>02 // MÓDULO GALERÍA • TRAYECTORIA Y DESARROLLOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            02 <span className="text-[#A78BFA]">EXPERIENCIA</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-purple-200 max-w-md">
          Proyectos concluidos y desarrollos actualmente en proceso de creación activa.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            filter === 'all' ? 'neu-btn-primary' : 'neu-btn'
          }`}
        >
          Ver Todo
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            filter === 'completed' ? 'neu-btn-primary' : 'neu-btn'
          }`}
        >
          Trabajos Hechos ({experience.completedWork.length})
        </button>
        <button
          onClick={() => setFilter('inProgress')}
          className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            filter === 'inProgress' ? 'neu-btn-primary' : 'neu-btn'
          }`}
        >
          Trabajos en Proceso ({experience.inProgressWork.length})
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Column 1: Trabajos Hechos */}
        {(filter === 'all' || filter === 'completed') && (
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <h3 className="text-xl font-black text-white uppercase tracking-wide">
                Trabajos Hechos
              </h3>
            </div>

            <div className="space-y-4">
              {experience.completedWork.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="neu-card p-6 rounded-2xl relative overflow-hidden"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#DDD6FE] uppercase">
                        {item.period} • {item.role}
                      </span>
                      <h4 className="text-lg font-black text-white mt-0.5 leading-snug">
                        {item.title}
                      </h4>
                    </div>
                    <span className="w-8 h-8 rounded-xl bg-purple-950/80 border border-purple-400/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                      <Icon name="CheckCircle2" size={18} />
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-purple-200 leading-relaxed mt-2 mb-4">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-purple-400/20">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-purple-950/80 border border-purple-400/25 text-[10px] font-mono font-semibold text-purple-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Column 2: Trabajos en Proceso */}
        {(filter === 'all' || filter === 'inProgress') && (
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-[#A78BFA] animate-ping" />
              <h3 className="text-xl font-black text-white uppercase tracking-wide">
                Trabajos en Proceso
              </h3>
            </div>

            <div className="space-y-4">
              {experience.inProgressWork.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="neu-card p-6 rounded-2xl relative overflow-hidden border-purple-400/40"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-bold text-[#DDD6FE] uppercase">
                          {item.period} • {item.role}
                        </span>
                      </div>
                      <h4 className="text-lg font-black text-white mt-0.5 leading-snug">
                        {item.title}
                      </h4>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#7C4DFF] text-white text-[10px] font-mono font-bold uppercase border border-white/30 shadow-[0_0_10px_rgba(124,77,255,0.5)] flex-shrink-0">
                      {item.status}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-purple-200 leading-relaxed mt-2 mb-4">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-purple-400/20">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-purple-950/80 border border-purple-400/25 text-[10px] font-mono font-semibold text-purple-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
