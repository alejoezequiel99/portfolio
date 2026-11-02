import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import Icon from './Icon';

export default function Footer() {
  const { personal } = portfolioData;

  // Developer Easter Egg in Console
  useEffect(() => {
    console.log(
      '%c🚀 ¡HOLA DEVELOPER! // BIENVENID@ AL PORTFOLIO DE ALEJO EZEQUIEL SOSA 🚀',
      'background: #1E0664; color: #DDD6FE; font-size: 16px; font-weight: 900; padding: 10px 16px; border-radius: 8px; border: 2px solid #7C4DFF;'
    );
    console.log(
      '%c👨‍💻 Nombre: Alejo Ezequiel Sosa\n📍 Ubicación: Berisso, Buenos Aires, Argentina\n🎓 Formación: Programador Web con Agentes IA (CFL 404 Berisso)\n⚡ Stack Core: JavaScript, Java, React, NodeJS, Docker, Git, CSS, Tailwind\n🤖 Enfoque: Soluciones Web Modernas + Agentes IA + Sistema FDD Stock\n✉ Contacto: ' + personal.email + '\n🐙 GitHub: ' + personal.github + '\n💼 LinkedIn: ' + personal.linkedin,
      'color: #C4B5FD; font-size: 12px; font-weight: 600; line-height: 1.6;'
    );
  }, [personal]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="networking" className="mt-20 border-t border-purple-400/25 bg-[#170442] text-white relative z-10">
      
      {/* Top Banner Accent */}
      <div className="h-1 bg-gradient-to-r from-[#4F20D2] via-[#7C4DFF] to-[#A78BFA]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Brand & Dev Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C4DFF] to-[#4F20D2] border border-white/40 flex items-center justify-center text-white font-black text-sm shadow-[0_0_12px_rgba(124,77,255,0.5)]">
                AES
              </div>
              <div>
                <h3 className="font-black text-xl text-white uppercase tracking-tight">
                  ALEJO EZEQUIEL SOSA
                </h3>
                <span className="text-xs font-mono text-[#DDD6FE] font-bold">
                  {personal.role}
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-purple-200 max-w-sm leading-relaxed">
              Desarrollador web con base en Berisso, Buenos Aires. Especializado en JavaScript, Java, React, NodeJS y soluciones impulsadas con agentes de inteligencia artificial.
            </p>
          </div>

          {/* Networking & Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7C4DFF] shadow-[0_0_8px_#7C4DFF]" />
              <h4 className="font-black text-sm uppercase tracking-wider text-white">
                CONTACTO DIRECTO & NETWORKING
              </h4>
            </div>
            <p className="text-xs text-purple-200 leading-relaxed font-mono">
              Disponible para proyectos de desarrollo web, integraciones con agentes IA y colaboraciones de alto impacto.
            </p>
            <div className="pt-1">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-[#DDD6FE] transition-colors"
              >
                <Icon name="Mail" size={16} className="text-[#A78BFA]" />
                <span>{personal.email}</span>
              </a>
            </div>
          </div>

          {/* Redes Finales: GitHub, Correo, LinkedIn */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between space-y-4">
            <div>
              <h4 className="font-black text-xs uppercase tracking-wider text-white mb-3">
                REDES OFICIALES (CONTACTO)
              </h4>
              <div className="flex items-center gap-2.5">
                {/* GitHub */}
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub de Alejo Sosa (@alejoezequiel99)"
                  className="w-11 h-11 rounded-2xl bg-purple-950/80 border border-purple-400/30 hover:border-white shadow-neu-purple-sm hover:scale-105 transition-all flex items-center justify-center text-white"
                >
                  <Icon name="Github" size={20} />
                </a>

                {/* LinkedIn */}
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn de Alejo Sosa"
                  className="w-11 h-11 rounded-2xl bg-purple-950/80 border border-purple-400/30 hover:border-white shadow-neu-purple-sm hover:scale-105 transition-all flex items-center justify-center text-white"
                >
                  <Icon name="Linkedin" size={20} />
                </a>

                {/* Correo */}
                <a
                  href={`mailto:${personal.email}`}
                  title="Enviar correo a Alejo Sosa"
                  className="w-11 h-11 rounded-2xl bg-purple-950/80 border border-purple-400/30 hover:border-white shadow-neu-purple-sm hover:scale-105 transition-all flex items-center justify-center text-[#DDD6FE]"
                >
                  <Icon name="Mail" size={20} />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="neu-btn px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2"
            >
              <span>Subir al Inicio</span>
              <Icon name="ArrowDown" size={14} className="rotate-180 text-[#A78BFA]" />
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Console Note */}
        <div className="pt-8 border-t border-purple-400/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-purple-300 text-center sm:text-left">
            © {new Date().getFullYear()} Alejo Ezequiel Sosa • Desarrollador Web • Berisso, Buenos Aires, Argentina.
          </p>

          <div className="p-2 px-4 rounded-xl neu-inset flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono font-bold text-purple-200">
              // psst - open the console (F12) 👀
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
