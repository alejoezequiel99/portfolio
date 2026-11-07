import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import Icon from './Icon';

export default function Navbar({ onOpenCV }) {
  const { personal, navigationSections } = portfolioData;
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 80) {
        setVisible(true);
      } else if (currentY > lastScrollY.current + 5) {
        setVisible(false);
        setMobileMenuOpen(false);
      } else if (currentY < lastScrollY.current - 5) {
        setVisible(true);
      }
      lastScrollY.current = currentY;
      setScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolled = scrollY > 80;

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const pdfUrl = `${import.meta.env.BASE_URL}cv/CV_Alejo_Ezequiel_Sosa.pdf`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3 transition-all duration-500 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className={`max-w-7xl mx-auto rounded-2xl border transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1E0664]/90 backdrop-blur-md border-purple-400/30 shadow-neu-purple py-2.5 px-4 sm:px-6'
          : 'bg-transparent backdrop-blur-none border-transparent py-3 px-4 sm:px-6'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C4DFF] to-[#4F20D2] border border-white/40 flex items-center justify-center text-white font-black text-sm group-hover:scale-105 transition-transform shadow-[0_0_12px_rgba(124,77,255,0.5)]">
              AES
            </div>
            <div>
              <span className="font-black text-sm tracking-tight text-white block leading-none">
                ALEJO EZEQUIEL SOSA
              </span>
              <span className="text-[10px] font-mono text-[#DDD6FE] font-bold block mt-0.5">
                WEB DEV JR. • UNLP
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 font-bold text-xs tracking-wide">
            {navigationSections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-3 py-1.5 rounded-xl text-purple-200 hover:text-white hover:bg-purple-900/60 transition-all flex items-center gap-1.5"
              >
                <Icon name={item.icon} size={15} className="text-[#A78BFA]" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub Oficial (@alejoezequiel99)"
              className="neu-btn px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 text-purple-200 hover:text-white"
            >
              <Icon name="Github" size={15} className="text-[#A78BFA]" />
              <span className="hidden md:inline">GITHUB</span>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn Oficial"
              className="neu-btn px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 text-blue-300 hover:text-white"
            >
              <Icon name="Linkedin" size={15} className="text-blue-400" />
              <span className="hidden md:inline">LINKEDIN</span>
            </a>
            <a
              href={pdfUrl}
              download="CV_Alejo_Ezequiel_Sosa.pdf"
              className="neu-btn-primary px-3.5 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 uppercase tracking-wide"
            >
              <Icon name="Download" size={14} />
              <span>CV PDF</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-purple-950/70 border border-purple-400/30 text-white"
            aria-label="Abrir Menú"
          >
            <Icon name={mobileMenuOpen ? 'X' : 'SlidersHorizontal'} size={20} />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-purple-400/20 flex flex-col gap-2">
            {navigationSections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="w-full text-left p-2.5 rounded-xl bg-purple-950/60 border border-purple-400/20 font-bold text-sm text-purple-100 hover:bg-[#7C4DFF] hover:text-white transition-colors flex items-center gap-3"
              >
                <div className="p-1.5 rounded-lg bg-purple-900 text-white">
                  <Icon name={item.icon} size={16} />
                </div>
                <span>{item.label}</span>
                <span className="ml-auto text-xs font-mono text-purple-400">{item.number}</span>
              </button>
            ))}
            <div className="grid grid-cols-3 gap-2 pt-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="neu-btn p-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1 text-white text-center"
              >
                <Icon name="Github" size={14} />
                <span>GitHub</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="neu-btn p-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1 text-blue-300 text-center"
              >
                <Icon name="Linkedin" size={14} />
                <span>LinkedIn</span>
              </a>
              <a
                href={pdfUrl}
                download="CV_Alejo_Ezequiel_Sosa.pdf"
                className="neu-btn-primary p-2 rounded-xl text-xs font-black flex items-center justify-center gap-1 text-white text-center"
              >
                <Icon name="Download" size={14} />
                <span>CV PDF</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
