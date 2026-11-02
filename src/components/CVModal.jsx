import React from 'react';
import { portfolioData } from '../data/portfolioData';
import Icon from './Icon';

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, skills, experience, certifications } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl border-2 border-purple-400 shadow-[0_15px_40px_rgba(0,0,0,0.7)] flex flex-col overflow-hidden text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="p-4 bg-[#1E0664] text-white flex items-center justify-between border-b border-purple-400/30 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#7C4DFF] inline-block shadow-[0_0_8px_#7C4DFF]" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-200">
              CV OFICIAL // ALEJO EZEQUIEL SOSA (FORMATO PDF IMPRIMIBLE)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-[#7C4DFF] text-white text-xs font-black flex items-center gap-1.5 hover:bg-[#6b3bf0] transition-colors shadow-md"
            >
              <Icon name="Download" size={16} />
              <span>DESCARGAR / IMPRIMIR PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Cerrar modal"
            >
              <Icon name="X" size={18} />
            </button>
          </div>
        </div>

        {/* Printable CV Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-black print:p-0 print:m-0 bg-[#FAFAFC]">
          
          {/* CV Header */}
          <div className="border-b-2 border-purple-900/20 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black uppercase text-[#1E0664] tracking-tight">
                ALEJO EZEQUIEL SOSA
              </h1>
              <p className="text-base sm:text-lg font-bold text-[#4F20D2] mt-0.5">
                {personal.role}
              </p>
              <p className="text-xs font-semibold text-gray-700 flex items-center gap-1.5 mt-1">
                <Icon name="MapPin" size={14} className="text-[#7C4DFF]" />
                {personal.location}
              </p>
            </div>

            <div className="text-xs font-mono space-y-1 bg-purple-50 p-3 rounded-xl border border-purple-200">
              <p><strong>Email:</strong> {personal.email}</p>
              <p><strong>GitHub:</strong> <a href={personal.github} target="_blank" rel="noreferrer" className="text-[#4F20D2] font-bold hover:underline">github.com/alejoezequiel99</a></p>
              <p><strong>LinkedIn:</strong> linkedin.com/in/alejo-sosa</p>
            </div>
          </div>

          {/* Perfil Profesional */}
          <div>
            <h2 className="text-xs font-black uppercase text-white bg-[#1E0664] px-3 py-1 inline-block rounded mb-2">
              Perfil Profesional
            </h2>
            <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-normal">
              {personal.bio}
            </p>
          </div>

          {/* Formación Académica & Certificaciones */}
          <div>
            <h2 className="text-xs font-black uppercase text-white bg-[#1E0664] px-3 py-1 inline-block rounded mb-3">
              Educación & Certificaciones
            </h2>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.id} className="p-3 rounded-xl bg-white border border-gray-300 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-black text-[#1E0664]">{cert.title}</h3>
                      <p className="text-xs font-semibold text-gray-700">{cert.institution}</p>
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      cert.isCompleted ? 'bg-emerald-100 text-emerald-900' : 'bg-purple-100 text-purple-900'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stack Tecnológico & Habilidades */}
          <div>
            <h2 className="text-xs font-black uppercase text-white bg-[#1E0664] px-3 py-1 inline-block rounded mb-3">
              Habilidades Técnicas & Herramientas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl border border-gray-300 bg-white">
                <strong className="text-[#1E0664] block mb-1">Lenguajes de Programación:</strong>
                <p className="text-gray-700 font-mono">JavaScript (ES6+, Async, DOM, APIs), Java (POO, Backend, Algoritmos)</p>
              </div>
              <div className="p-3 rounded-xl border border-gray-300 bg-white">
                <strong className="text-[#1E0664] block mb-1">Tecnologías & Frameworks:</strong>
                <p className="text-gray-700 font-mono">React, NodeJS, Tailwind CSS, Docker, Git, CSS Moderno, Vite</p>
              </div>
              <div className="p-3 rounded-xl border border-gray-300 bg-white">
                <strong className="text-[#1E0664] block mb-1">AI & Herramientas Agentic:</strong>
                <p className="text-gray-700 font-mono">Agentes IA Autónomos, Prompt Engineering, Integración de LLMs, Agentic Workflows</p>
              </div>
              <div className="p-3 rounded-xl border border-gray-300 bg-white">
                <strong className="text-[#1E0664] block mb-1">Idiomas & Soft Skills:</strong>
                <p className="text-gray-700">Español (Nativo), Inglés Técnico • Resolutivo, Proactivo, Autodidacta, Detallista, Colaborativo, Innovador</p>
              </div>
            </div>
          </div>

          {/* Proyectos Principales */}
          <div>
            <h2 className="text-xs font-black uppercase text-white bg-[#1E0664] px-3 py-1 inline-block rounded mb-3">
              Proyectos Destacados
            </h2>
            <div className="space-y-3">
              <div className="p-3 rounded-xl border border-gray-300 bg-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black text-[#1E0664]">FDD: Forward Design Developer</h3>
                  <span className="text-[10px] font-mono font-bold text-[#7C4DFF]">EN DESARROLLO</span>
                </div>
                <p className="text-xs text-gray-700 mt-1">
                  Sistema interactivo de consulta ágil de stock e inventario: "¿Qué cantidad vende? ¿Qué números tiene en stock?". Arquitectura React + NodeJS con interfaz neumórfica y analíticas en tiempo real.
                </p>
              </div>

              <div className="p-3 rounded-xl border border-gray-300 bg-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black text-[#1E0664]">Portfolio Interactivo Alejo Ezequiel Sosa</h3>
                  <span className="text-[10px] font-mono font-bold text-gray-600">2026</span>
                </div>
                <p className="text-xs text-gray-700 mt-1">
                  Portafolio interactivo desarrollado en React, Tailwind CSS y Framer Motion con centro de navegación en laptop, blueprint interactivo donde cada cuadro navega a su sector y estética neumórfica violeta.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 bg-gray-100 border-t border-gray-300 flex items-center justify-between flex-shrink-0">
          <span className="text-xs font-mono text-gray-600 hidden sm:inline-block">
            Tip: Al hacer clic en descargar puedes guardarlo directamente como PDF con tu navegador (Ctrl+P / Imprimir).
          </span>
          <div className="flex gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold border border-gray-400 bg-white hover:bg-gray-50 transition-colors"
            >
              Cerrar
            </button>
            <button
              onClick={handlePrint}
              className="px-5 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 bg-[#7C4DFF] text-white hover:bg-[#6b3bf0] transition-colors"
            >
              <Icon name="Download" size={16} />
              <span>IMPRIMIR / GUARDAR PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
