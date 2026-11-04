import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import Icon from './Icon';
import { motion } from 'framer-motion';




export default function Hero() {
  const { personal } = portfolioData;
  const [hoveredElement, setHoveredElement] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Hotspot definitions aligned with hero-blueprint.png (1024x596 aspect ratio)
  const hotspots = [
    {
      id: 'portfolio-box',
      targetId: 'proyectos',
      title: 'Trabajos & Proyectos',
      subtitle: '</> Portfolio // FDD Stock',
      icon: 'Layers',
      desc: 'Accede a los proyectos hechos y arquitectura FDD',
      coords: { left: '16.5%', top: '16.5%', width: '31%', height: '44%' },
      badgeText: '03 // PROYECTOS & TRABAJOS',
    },
    {
      id: 'type-box',
      targetId: 'certificaciones',
      title: '03 Certificaciones',
      subtitle: 'Tipografía [T]',
      icon: 'Award',
      desc: 'CFL 404 Berisso, FreeCodeCamp, Mercado Pago',
      coords: { left: '46.5%', top: '10.5%', width: '10.5%', height: '21%' },
      badgeText: '04 // CERTIFICACIONES',
    },
    {
      id: 'mountain-box',
      targetId: 'experiencia',
      title: '02 Experiencia',
      subtitle: 'Galería [Montaña]',
      icon: 'Briefcase',
      desc: 'Trabajos hechos y desarrollos en proceso',
      coords: { left: '58.5%', top: '18.5%', width: '21.5%', height: '25%' },
      badgeText: '02 // EXPERIENCIA',
    },
    {
      id: 'pencil-box',
      targetId: 'datos-personales',
      title: 'Información Personal',
      subtitle: 'Lápiz [Edición]',
      icon: 'Edit3',
      desc: 'Alejo Ezequiel Sosa • Berisso, Arg. • Perfil y datos',
      coords: { left: '76%', top: '30.5%', width: '10%', height: '15%' },
      badgeText: '00 // SOBRE MÍ & DATOS',
    },
    {
      id: 'lamp-box',
      targetId: 'skills',
      title: '01 Skills & Tecnologías',
      subtitle: 'Lámpara [Ideas & Foco]',
      icon: 'Sparkles',
      desc: 'JavaScript, Java, React, NodeJS, Docker, IA',
      coords: { left: '67.5%', top: '51%', width: '19.5%', height: '35%' },
      badgeText: '01 // SKILLS & TECH',
    },
    {
      id: 'wireframes-box',
      targetId: 'contacto',
      title: 'Contacto & Descarga CV',
      subtitle: 'Wireframes Base',
      icon: 'Mail',
      desc: 'Formulario, descarga PDF y redes oficiales',
      coords: { left: '15%', top: '65.5%', width: '19.5%', height: '17%' },
      badgeText: '05 // CONTACTO & CV',
    },
  ];

  const activeHotspotInfo = hotspots.find(h => h.id === hoveredElement);

  return (
    <section id="hero" className="relative min-h-screen pt-4 pb-8 px-4 sm:px-6 lg:px-8 bg-blueprint-purple overflow-hidden flex flex-col justify-center items-center">
      
      {/* Background Blueprint Decorative Grid Lines (inspired by user image) */}
      <div className="absolute inset-0 pointer-events-none opacity-50 bg-blueprint-lines">
        <svg className="w-full h-full stroke-purple-400/20" xmlns="http://www.w3.org/2000/svg">
          <line x1="8%" y1="12%" x2="92%" y2="88%" strokeDasharray="8 8" strokeWidth="1.2" />
          <line x1="92%" y1="12%" x2="8%" y2="88%" strokeDasharray="8 8" strokeWidth="1.2" />
          <line x1="50%" y1="0%" x2="50%" y2="100%" strokeDasharray="5 5" strokeWidth="1" stroke="rgba(196, 181, 253, 0.25)" />
          <line x1="0%" y1="50%" x2="100%" y2="50%" strokeDasharray="5 5" strokeWidth="1" stroke="rgba(196, 181, 253, 0.25)" />
          {/* Visual anchor crosshairs */}
          <circle cx="16%" cy="25%" r="5" fill="none" stroke="#A78BFA" strokeWidth="2" />
          <circle cx="84%" cy="25%" r="5" fill="none" stroke="#A78BFA" strokeWidth="2" />
          <circle cx="16%" cy="75%" r="5" fill="none" stroke="#A78BFA" strokeWidth="2" />
          <circle cx="84%" cy="75%" r="5" fill="none" stroke="#A78BFA" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* Top Header Badge / Developer Status */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-3"
        >
          <span className="section-tag">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>DISPONIBLE PARA PROYECTOS & DESARROLLO WEB</span>
          </span>
          <span className="section-tag">
            <Icon name="MapPin" size={14} className="text-[#A78BFA]" />
            <span>{personal.location}</span>
          </span>
        </motion.div>

        {/* Main Title Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-4 max-w-5xl"
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight uppercase text-white leading-none mb-2 drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
            ALEJO EZEQUIEL <span className="text-[#DDD6FE] underline decoration-[#7C4DFF] decoration-wavy decoration-[3px]">SOSA</span>
          </h1>
          <p className="text-sm sm:text-lg font-bold text-purple-200 max-w-2xl mx-auto">
            {personal.role}
          </p>
        </motion.div>

        {/* ==============================================================
            THE INTERACTIVE BLUEPRINT WORKBENCH:
            Matches exact layout of the user's reference image!
            Central laptop + 6 interactive glowing hot-spots ("se pintan")
            ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-6xl relative rounded-3xl p-2 sm:p-4 bg-gradient-to-b from-[#38119e]/90 to-[#270878]/90 border border-purple-400/30 shadow-neu-purple-lg backdrop-blur-md overflow-hidden"
        >
          {/* Ambient backlight glow */}
          <div className="absolute -inset-10 bg-[#7C4DFF]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Workbench Top Bar with HUD Indicators */}
          <div className="flex items-center justify-between pb-3 px-2 sm:px-4 border-b border-purple-400/20 text-xs font-mono text-purple-200">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#7C4DFF] shadow-[0_0_8px_#7C4DFF]" />
              <span className="font-bold tracking-wider text-white text-[11px] sm:text-xs">
                BLUEPRINT HUB // DESARROLLO WEB & AGENTES IA
              </span>
            </div>

            {/* Dynamic Status Display */}
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block text-[11px] text-purple-300">
                {activeHotspotInfo ? (
                  <span className="text-white font-bold animate-pulse">
                    ⚡ {activeHotspotInfo.badgeText} (Haz clic para bajar)
                  </span>
                ) : (
                  <span>Haz clic en cualquier sector para navegar</span>
                )}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-purple-950/80 border border-purple-400/40 text-[10px] text-purple-300 font-mono">
                1024 × 596
              </span>
            </div>
          </div>

          {/* The Image Canvas with Perfectly Positioned Hotspots */}
          <div className="relative w-full aspect-[1024/596] rounded-2xl overflow-hidden mt-3 border border-purple-400/25 bg-[#4F20D2] shadow-inner select-none group">
            
            {/* Blueprint Background SVG */}
            <svg
              className="w-full h-full pointer-events-none absolute inset-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 596"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect width="1024" height="596" fill="#3B0FA8" />
              {Array.from({ length: 20 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 54} y1="0" x2={i * 54} y2="596" stroke="#6D28D9" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5" />
              ))}
              {Array.from({ length: 12 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 54} x2="1024" y2={i * 54} stroke="#6D28D9" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5" />
              ))}
              <line x1="0" y1="0" x2="1024" y2="596" stroke="#7C3AED" strokeWidth="1" strokeDasharray="8 8" opacity="0.3" />
              <line x1="1024" y1="0" x2="0" y2="596" stroke="#7C3AED" strokeWidth="1" strokeDasharray="8 8" opacity="0.3" />
              <rect x="169" y="98" width="318" height="262" rx="8" fill="none" stroke="#A78BFA" strokeWidth="1.5" opacity="0.8" />
              <text x="210" y="160" fill="#DDD6FE" fontSize="22" fontFamily="monospace" fontWeight="bold">&lt;/&gt; Portfolio</text>
              <line x1="169" y1="175" x2="487" y2="175" stroke="#A78BFA" strokeWidth="1" opacity="0.5" />
              <rect x="190" y="190" width="270" height="12" rx="3" fill="#6D28D9" opacity="0.6" />
              <rect x="190" y="212" width="200" height="12" rx="3" fill="#6D28D9" opacity="0.6" />
              <rect x="190" y="234" width="240" height="12" rx="3" fill="#6D28D9" opacity="0.6" />
              <rect x="350" y="200" width="320" height="210" rx="10" fill="#1E0664" stroke="#A78BFA" strokeWidth="2" opacity="0.9" />
              <rect x="370" y="215" width="280" height="160" rx="4" fill="#2D0A8F" opacity="0.95" />
              <rect x="330" y="405" width="360" height="18" rx="6" fill="#1E0664" stroke="#A78BFA" strokeWidth="1.5" opacity="0.9" />
              <rect x="476" y="63" width="107" height="125" rx="8" fill="none" stroke="#A78BFA" strokeWidth="1.5" opacity="0.8" />
              <text x="510" y="142" fill="#DDD6FE" fontSize="52" fontFamily="serif" fontWeight="bold" opacity="0.9">T</text>
              <rect x="599" y="110" width="220" height="149" rx="8" fill="none" stroke="#A78BFA" strokeWidth="1.5" opacity="0.8" />
              <circle cx="650" cy="155" r="20" fill="none" stroke="#C4B5FD" strokeWidth="1.5" opacity="0.7" />
              <polyline points="610,245 665,180 700,215 730,165 810,245" fill="none" stroke="#A78BFA" strokeWidth="2" opacity="0.7" />
              <rect x="778" y="182" width="102" height="89" rx="8" fill="none" stroke="#A78BFA" strokeWidth="1.5" opacity="0.8" />
              <path d="M815 225 L840 200 L855 215 L830 240 Z" fill="none" stroke="#C4B5FD" strokeWidth="2" opacity="0.8" />
              <rect x="691" y="304" width="200" height="209" rx="8" fill="none" stroke="#A78BFA" strokeWidth="1.5" opacity="0.8" />
              <circle cx="791" cy="385" r="38" fill="none" stroke="#C4B5FD" strokeWidth="2" opacity="0.8" />
              <line x1="780" y1="424" x2="802" y2="424" stroke="#A78BFA" strokeWidth="2" opacity="0.7" />
              <line x1="784" y1="432" x2="798" y2="432" stroke="#A78BFA" strokeWidth="2" opacity="0.7" />
              <rect x="154" y="391" width="200" height="101" rx="8" fill="none" stroke="#A78BFA" strokeWidth="1.5" opacity="0.8" />
              <line x1="154" y1="391" x2="254" y2="492" stroke="#6D28D9" strokeWidth="1" opacity="0.5" />
              <line x1="354" y1="391" x2="254" y2="492" stroke="#6D28D9" strokeWidth="1" opacity="0.5" />
              <circle cx="82" cy="149" r="7" fill="none" stroke="#A78BFA" strokeWidth="2" opacity="0.7" />
              <line x1="75" y1="149" x2="89" y2="149" stroke="#A78BFA" strokeWidth="1.5" opacity="0.7" />
              <line x1="82" y1="142" x2="82" y2="156" stroke="#A78BFA" strokeWidth="1.5" opacity="0.7" />
              <circle cx="942" cy="149" r="7" fill="none" stroke="#A78BFA" strokeWidth="2" opacity="0.7" />
              <line x1="935" y1="149" x2="949" y2="149" stroke="#A78BFA" strokeWidth="1.5" opacity="0.7" />
              <line x1="942" y1="142" x2="942" y2="156" stroke="#A78BFA" strokeWidth="1.5" opacity="0.7" />
            </svg>

            {/* 6 INTERACTIVE HOTSPOTS OVER THE BLUEPRINT BOXES */}
            {hotspots.map((hotspot) => {
              const isHovered = hoveredElement === hotspot.id;

              return (
                <button
                  key={hotspot.id}
                  onClick={() => scrollToSection(hotspot.targetId)}
                  onMouseEnter={() => setHoveredElement(hotspot.id)}
                  onMouseLeave={() => setHoveredElement(null)}
                  onFocus={() => setHoveredElement(hotspot.id)}
                  onBlur={() => setHoveredElement(null)}
                  style={{
                    left: hotspot.coords.left,
                    top: hotspot.coords.top,
                    width: hotspot.coords.width,
                    height: hotspot.coords.height,
                  }}
                  className={`absolute rounded-xl transition-all duration-300 cursor-pointer focus:outline-none flex items-center justify-center ${
                    isHovered
                      ? 'hotspot-painted scale-[1.02] z-30'
                      : 'hover:border-purple-300/60 bg-transparent border-2 border-transparent z-20'
                  }`}
                  aria-label={`Ir a ${hotspot.title}`}
                >
                  {/* Subtle pulsing indicator ring when idle */}
                  {!isHovered && (
                    <span className="absolute inset-1 rounded-lg border border-purple-300/20 opacity-40 group-hover:opacity-75 transition-opacity" />
                  )}

                  {/* Corner Target Accents (HUD brackets) when hovered */}
                  {isHovered && (
                    <>
                      <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-white rounded-tl-sm shadow-[0_0_8px_#FFFFFF]" />
                      <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-white rounded-tr-sm shadow-[0_0_8px_#FFFFFF]" />
                      <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-white rounded-bl-sm shadow-[0_0_8px_#FFFFFF]" />
                      <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-white rounded-br-sm shadow-[0_0_8px_#FFFFFF]" />
                      
                      {/* Floating holographic tooltip badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#1E0664] to-[#38119e] border border-white text-white shadow-[0_4px_20px_rgba(0,0,0,0.8),0_0_15px_rgba(255,255,255,0.6)] whitespace-nowrap z-50 flex items-center gap-2 pointer-events-none"
                      >
                        <div className="w-5 h-5 rounded-lg bg-[#7C4DFF] flex items-center justify-center text-white">
                          <Icon name={hotspot.icon} size={13} />
                        </div>
                        <div className="text-left">
                          <p className="text-[11px] font-black uppercase tracking-wider leading-none">
                            {hotspot.title}
                          </p>
                          <p className="text-[9px] font-mono text-purple-200 leading-tight">
                            Clic para ir a la sección ↓
                          </p>
                        </div>
                      </motion.div>
                    </>
                  )}
                </button>
              );
            })}

          </div>

          {/* Quick Explanation Banner below canvas */}
          <div className="mt-3 py-2 px-4 rounded-xl bg-purple-950/60 border border-purple-400/20 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-purple-200">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">●</span>
              <span><strong>Lápiz</strong> ➔ Info | <strong>Lámpara</strong> ➔ Skills | <strong>Portfolio</strong> ➔ Trabajos | <strong>T</strong> ➔ Certificaciones</span>
            </div>
            <div className="text-purple-300 font-bold flex items-center gap-1">
              <span>Scroll interactivo</span>
              <Icon name="ArrowDown" size={14} className="text-[#A78BFA] animate-bounce" />
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
