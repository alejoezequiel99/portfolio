import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import Icon from './Icon';
import { motion } from 'framer-motion';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'Todo el Stack' },
    { id: 'languages', label: 'Lenguajes de Prog.' },
    { id: 'tech', label: 'Tecnologías & Web' },
    { id: 'ai', label: 'AI & Agentic Tools' },
    { id: 'human-languages', label: 'Idiomas' },
    { id: 'personal', label: 'Skills Personales' },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-purple-400/20">
        <div>
          <div className="section-tag mb-2">
            <Icon name="Sparkles" size={14} className="text-[#A78BFA]" />
            <span>01 // MÓDULO DE LA LÁMPARA • IDEAS & CAPACIDADES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            01 <span className="text-[#A78BFA]">SKILLS</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-purple-200 max-w-md">
          Lenguajes de programación, tecnologías, agentes IA, idiomas y adjetivos que distinguen mi trabajo.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === cat.id
                ? 'neu-btn-primary'
                : 'neu-btn'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="space-y-12">
        
        {/* 1. Lenguajes de Programación */}
        {(activeTab === 'all' || activeTab === 'languages') && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-1 rounded-lg bg-purple-950/80 border border-purple-400/30 text-white font-mono text-xs font-bold">
                01.1
              </span>
              <h3 className="text-xl font-black text-white uppercase tracking-wide">
                Lenguajes de Programación
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.programmingLanguages.map((lang, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3 }}
                  className="neu-card p-5 rounded-2xl flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-950/90 border border-purple-400/30 text-white flex items-center justify-center shadow-neu-purple-sm">
                      <Icon name={lang.icon} size={22} className="text-[#DDD6FE]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">{lang.name}</h4>
                      <p className="text-xs font-mono text-purple-200">{lang.tag}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#7C4DFF] to-[#4F20D2] text-white text-xs font-black uppercase font-mono border border-white/30 shadow-[0_0_10px_rgba(124,77,255,0.4)]">
                    {lang.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Tecnologías & Herramientas Web */}
        {(activeTab === 'all' || activeTab === 'tech') && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-1 rounded-lg bg-purple-950/80 border border-purple-400/30 text-white font-mono text-xs font-bold">
                01.2
              </span>
              <h3 className="text-xl font-black text-white uppercase tracking-wide">
                Tecnologías & Arquitectura Web
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.technologies.map((tech, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3 }}
                  className="neu-card p-5 rounded-2xl flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-950/90 border border-purple-400/30 text-white flex items-center justify-center shadow-neu-purple-sm">
                    <Icon name={tech.icon} size={22} className="text-[#A78BFA]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-black text-white truncate">{tech.name}</h4>
                      <span className="text-[10px] font-mono text-purple-300 font-bold">{tech.level}</span>
                    </div>
                    <p className="text-xs font-mono text-purple-200 truncate mt-0.5">{tech.tag}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* 3. AI y Agentic Tools */}
        {(activeTab === 'all' || activeTab === 'ai') && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-1 rounded-lg bg-purple-950/80 border border-purple-400/30 text-white font-mono text-xs font-bold">
                01.3
              </span>
              <h3 className="text-xl font-black text-white uppercase tracking-wide">
                AI & Agentic Tools (Herramientas de Agentes)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.aiAndAgenticTools.map((ai, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3 }}
                  className="neu-card p-5 rounded-2xl relative overflow-hidden"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7C4DFF] to-[#3A13A4] border border-white/30 text-white flex items-center justify-center shadow-[0_0_12px_rgba(124,77,255,0.4)]">
                      <Icon name={ai.icon} size={22} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-black text-white">{ai.name}</h4>
                      <p className="text-xs text-purple-200 mt-1 leading-relaxed">
                        {ai.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* 4. Lenguajes / Idiomas */}
        {(activeTab === 'all' || activeTab === 'human-languages') && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-1 rounded-lg bg-purple-950/80 border border-purple-400/30 text-white font-mono text-xs font-bold">
                01.4
              </span>
              <h3 className="text-xl font-black text-white uppercase tracking-wide">
                Lenguajes / Idiomas
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.languages.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3 }}
                  className="neu-card p-5 rounded-2xl flex items-center justify-between"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-purple-950/90 border border-purple-400/30 text-white flex items-center justify-center shadow-neu-purple-sm">
                      <Icon name={item.icon} size={22} className="text-[#A78BFA]" />
                    </div>
                    <div>
                      <h4 className="text-base font-black text-white">{item.name}</h4>
                      <p className="text-xs font-mono text-purple-200">{item.desc}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-900/80 text-white text-xs font-mono font-bold border border-purple-400/30">
                    {item.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* 5. Skills Personales (Adjetivos que te distinguen) */}
        {(activeTab === 'all' || activeTab === 'personal') && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2.5 py-1 rounded-lg bg-purple-950/80 border border-purple-400/30 text-white font-mono text-xs font-bold">
                01.5
              </span>
              <h3 className="text-xl font-black text-white uppercase tracking-wide">
                Skills Personales (Adjetivos que me Distinguen)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.personalQualities.map((qual, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3 }}
                  className="neu-card p-5 rounded-2xl flex items-start gap-3.5"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-950/90 border border-purple-400/30 text-white flex items-center justify-center shadow-neu-purple-sm flex-shrink-0">
                    <Icon name={qual.icon} size={22} className="text-[#DDD6FE]" />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-white">{qual.title}</h4>
                    <p className="text-xs text-purple-200 mt-1 leading-relaxed">
                      {qual.desc}
                    </p>
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
