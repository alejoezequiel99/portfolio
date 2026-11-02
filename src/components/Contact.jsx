import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import Icon from './Icon';
import confetti from 'canvas-confetti';

export default function Contact({ onOpenCV }) {
  const { personal, contact } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor completa todos los campos requeridos.');
      return;
    }

    setLoading(true);

    // Simulate sending with confetti in purple/lavender/white theme
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#4F20D2', '#7C4DFF', '#A78BFA', '#FFFFFF']
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 700);
  };

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-purple-400/20">
        <div>
          <div className="section-tag mb-2">
            <Icon name="Mail" size={14} className="text-[#A78BFA]" />
            <span>05 // MÓDULO WIREFRAMES • CONECTAR & DESCARGAR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
            FORMULARIO DE <span className="text-[#A78BFA]">CONTACTO & CV</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-purple-200 max-w-md">
          Escríbeme para colaborar, coordinar entrevistas o descargar mi currículum profesional en formato PDF.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Info & CV Download Card */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* CV Download Highlight Card */}
          <div className="neu-card p-6 sm:p-8 rounded-3xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7C4DFF] to-[#4F20D2] text-white flex items-center justify-center border border-white/30 mb-4 shadow-neu-purple-sm">
              <Icon name="FileText" size={22} />
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white uppercase leading-tight mb-2">
              Currículum Vitae
            </h3>
            <p className="text-xs sm:text-sm text-purple-200 leading-relaxed mb-6">
              Descargá el CV oficial de <strong>Alejo Ezequiel Sosa</strong> en formato PDF con todos los datos personales, formación en el CFL 404, proyectos y dominio tecnológico actualizado.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenCV}
                className="neu-btn-primary py-3 px-5 rounded-2xl text-xs font-black flex items-center justify-center gap-2 uppercase tracking-wide flex-1"
              >
                <Icon name="Download" size={16} />
                <span>VER & DESCARGAR CV (PDF)</span>
              </button>
            </div>
          </div>

          {/* Direct Details Card */}
          <div className="neu-card p-6 rounded-3xl space-y-4">
            <h4 className="text-xs font-mono font-bold text-[#DDD6FE] uppercase tracking-wider">
              INFORMACIÓN DIRECTA // BERISSO, ARG.
            </h4>

            <div className="space-y-3">
              <div className="p-3 rounded-xl neu-inset flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-purple-900/80 border border-purple-400/30 flex items-center justify-center text-[#A78BFA]">
                  <Icon name="MapPin" size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-purple-300 block uppercase">Ubicación</span>
                  <span className="text-xs font-bold text-white">{personal.location}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl neu-inset flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-purple-900/80 border border-purple-400/30 flex items-center justify-center text-[#A78BFA]">
                  <Icon name="Mail" size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-purple-300 block uppercase">Correo Electrónico</span>
                  <a href={`mailto:${personal.email}`} className="text-xs font-bold text-white hover:underline">
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="p-3 rounded-xl neu-inset flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-purple-900/80 border border-purple-400/30 flex items-center justify-center text-[#A78BFA]">
                  <Icon name="Github" size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-purple-300 block uppercase">GitHub Oficial</span>
                  <a 
                    href={personal.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs font-bold text-white hover:underline hover:text-[#A78BFA] transition-colors"
                  >
                    github.com/alejoezequiel99
                  </a>
                </div>
              </div>

              <div className="p-3 rounded-xl neu-inset flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-purple-900/80 border border-purple-400/30 flex items-center justify-center text-[#A78BFA]">
                  <Icon name="Award" size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-purple-300 block uppercase">Formación</span>
                  <span className="text-xs font-bold text-white">{personal.educationPrimary}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <form 
            onSubmit={handleSubmit}
            className="neu-card p-6 sm:p-10 rounded-3xl space-y-5"
          >
            <div className="border-b border-purple-400/20 pb-4 mb-2">
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                Enviar un Mensaje
              </h3>
              <p className="text-xs font-mono text-purple-200 mt-1">
                Completa los campos a continuación para iniciar contacto directo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono font-bold text-purple-200 block mb-1 uppercase">
                  Tu Nombre *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Juan Pérez"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl neu-inset text-white text-xs font-mono placeholder-purple-300/40 focus:outline-none focus:border-purple-300"
                />
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-purple-200 block mb-1 uppercase">
                  Tu Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="ejemplo@correo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl neu-inset text-white text-xs font-mono placeholder-purple-300/40 focus:outline-none focus:border-purple-300"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-mono font-bold text-purple-200 block mb-1 uppercase">
                Asunto
              </label>
              <input
                type="text"
                placeholder="Propuesta de proyecto, consulta técnica, etc."
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl neu-inset text-white text-xs font-mono placeholder-purple-300/40 focus:outline-none focus:border-purple-300"
              />
            </div>

            <div>
              <label className="text-xs font-mono font-bold text-purple-200 block mb-1 uppercase">
                Mensaje *
              </label>
              <textarea
                rows={5}
                required
                placeholder="Hola Alejo, me gustaría conversar sobre..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl neu-inset text-white text-xs font-mono placeholder-purple-300/40 focus:outline-none focus:border-purple-300 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full neu-btn-primary py-3.5 rounded-2xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 uppercase tracking-wide"
            >
              {loading ? (
                <span>ENVIANDO MENSAJE...</span>
              ) : submitted ? (
                <span className="flex items-center gap-2">
                  <Icon name="Check" size={18} /> ¡MENSAJE ENVIADO CON ÉXITO!
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Icon name="Send" size={16} /> ENVIAR MENSAJE
                </span>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
