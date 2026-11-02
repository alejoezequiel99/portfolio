import React from 'react';
import { portfolioData } from '../data/portfolioData';
import Icon from './Icon';
import { motion } from 'framer-motion';

export default function PersonalInfo({ onOpenCV }) {
  const { personal } = portfolioData;

  const techList = ['React', 'NodeJS', 'Tailwind', 'Docker', 'Git', 'CSS'];

  return (
    <section id="datos-personales" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-purple-400/20">
        <div>
          <div className="section-tag mb-2">
            <Icon name="Edit3" size={14} className="text-[#A78BFA]" />
            <span>00 // MÓDULO DEL LÁPIZ • INFORMACIÓN PERSONAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            DATOS <span className="text-[#A78BFA]">PERSONALES</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-purple-200 max-w-md">
          Ubicación, perfil técnico, formación y visión del desarrollo web moderno con agentes de IA.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Developer Passport / ID Card (Neumorphic Purple) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 neu-card p-6 sm:p-8 rounded-3xl relative overflow-hidden"
        >
          {/* Card Top Banner Accent */}
          <div className="h-2.5 -mt-6 -mx-6 sm:-mt-8 sm:-mx-8 bg-gradient-to-r from-[#7C4DFF] via-[#A78BFA] to-[#4F20D2] mb-6 shadow-[0_0_12px_rgba(124,77,255,0.6)]" />

          {/* Avatar / Badge & Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#7C4DFF] to-[#3A13A4] border border-white/40 flex items-center justify-center text-white font-black text-2xl shadow-[0_0_20px_rgba(124,77,255,0.5)] relative">
              <span>AES</span>
              <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-white text-[10px] font-mono text-[#2B0B88] font-bold shadow-md">
                DEV
              </span>
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-[#DDD6FE] uppercase flex items-center gap-1.5">
                <Icon name="Edit3" size={13} className="text-[#A78BFA]" />
                DESARROLLADOR WEB
              </span>
              <h3 className="text-2xl font-black text-white leading-tight">
                {personal.name} {personal.lastName}
              </h3>
              <p className="text-xs font-semibold text-purple-200 flex items-center gap-1.5 mt-1">
                <Icon name="MapPin" size={14} className="text-[#A78BFA]" />
                {personal.location}
              </p>
            </div>
          </div>

          {/* Quick Technical Specs Grid - Perfectly uniform, well spaced & readable */}
          <div className="space-y-3 pt-2 border-t border-purple-400/20 mb-6">
            
            {/* 1. Estudios */}
            <div className="p-3.5 rounded-xl neu-inset">
              <span className="text-[11px] font-mono text-purple-300 font-bold flex items-center gap-2 mb-1.5 uppercase">
                <Icon name="Award" size={16} className="text-[#A78BFA]" />
                Estudios
              </span>
              <div className="pl-6">
                <p className="text-xs font-bold text-white leading-tight">
                  CFL 404 Berisso
                </p>
                <p className="text-[11px] font-mono text-[#DDD6FE] mt-0.5">
                  Programador Web con Agentes IA
                </p>
              </div>
            </div>

            {/* 2. Lenguajes Core */}
            <div className="p-3.5 rounded-xl neu-inset">
              <span className="text-[11px] font-mono text-purple-300 font-bold flex items-center gap-2 mb-2 uppercase">
                <Icon name="Code" size={16} className="text-[#A78BFA]" />
                Lenguajes Core
              </span>
              <div className="flex flex-wrap gap-2 pl-6">
                <span className="px-3 py-1 rounded-lg bg-purple-950/80 border border-purple-400/30 text-xs font-mono font-bold text-white shadow-sm">
                  JavaScript
                </span>
                <span className="px-3 py-1 rounded-lg bg-purple-950/80 border border-purple-400/30 text-xs font-mono font-bold text-white shadow-sm">
                  Java
                </span>
              </div>
            </div>

            {/* 3. Tecnologías */}
            <div className="p-3.5 rounded-xl neu-inset">
              <span className="text-[11px] font-mono text-purple-300 font-bold flex items-center gap-2 mb-2 uppercase">
                <Icon name="Atom" size={16} className="text-[#A78BFA]" />
                Tecnologías
              </span>
              <div className="flex flex-wrap gap-2 pl-6">
                {techList.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-purple-950/80 border border-purple-400/30 text-xs font-mono font-semibold text-white shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 4. Enfoque AI */}
            <div className="p-3.5 rounded-xl neu-inset">
              <span className="text-[11px] font-mono text-purple-300 font-bold flex items-center gap-2 mb-2 uppercase">
                <Icon name="Bot" size={16} className="text-[#A78BFA]" />
                Enfoque AI
              </span>
              <div className="flex flex-wrap gap-2 pl-6">
                <span className="px-2.5 py-1 rounded-lg bg-purple-950/80 border border-purple-400/30 text-xs font-mono font-semibold text-emerald-300 shadow-sm">
                  Agentes IA
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-purple-950/80 border border-purple-400/30 text-xs font-mono font-semibold text-emerald-300 shadow-sm">
                  Prompt Engineering
                </span>
              </div>
            </div>

          </div>

          {/* Action CTAs: CV & GitHub */}
          <div className="space-y-2.5">
            <button
              onClick={onOpenCV}
              className="w-full neu-btn-primary py-3 rounded-2xl text-xs font-black flex items-center justify-center gap-2 uppercase tracking-wide"
            >
              <Icon name="Download" size={16} />
              <span>DESCARGAR CV OFICIAL (PDF)</span>
            </button>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="w-full neu-btn py-2.5 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 uppercase tracking-wide hover:text-white transition-all"
            >
              <Icon name="Github" size={16} className="text-[#A78BFA]" />
              <span>PERFIL GITHUB: @alejoezequiel99</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Bio & Core Attributes (Neumorphic) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="neu-card p-6 sm:p-8 rounded-3xl"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7C4DFF] shadow-[0_0_8px_#7C4DFF]" />
              <h4 className="text-xs font-mono font-bold text-[#DDD6FE] uppercase tracking-wider">
                PERFIL PROFESIONAL // BIOGRAFÍA
              </h4>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white leading-snug mb-4">
              "Construyendo experiencias web modernas que combinan potencia técnica, agilidad y visión de futuro."
            </h3>

            <p className="text-sm sm:text-base text-purple-100 leading-relaxed font-normal mb-6">
              {personal.bio}
            </p>

            {/* Location & Status Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-purple-400/20">
              {personal.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl neu-inset text-center">
                  <span className="text-[10px] font-mono text-purple-300 block uppercase">
                    {stat.label}
                  </span>
                  <span className="text-xs font-bold text-white mt-0.5 block">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
