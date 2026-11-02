import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  UserCheck, 
  GraduationCap, 
  MapPin, 
  Award, 
  Calendar, 
  CheckCircle,
  FileText
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const { personal, education } = portfolioData;

  return (
    <section id="sobre-mi" className="relative py-20 px-4 max-w-7xl mx-auto scroll-mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: About Me Bio (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 glass-panel rounded-3xl p-7 sm:p-9 border border-white/10 relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#49A4BB]/15 rounded-full filter blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[#49A4BB] text-xs font-bold uppercase tracking-wider mb-4">
            <UserCheck className="w-3.5 h-3.5" />
            Conocé más de mí
          </div>

          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mb-4">
            SOBRE MÍ
          </h2>

          <div className="flex items-center gap-2 text-xs font-semibold text-gray-300 mb-6 bg-white/[0.04] p-3 rounded-2xl border border-white/5">
            <MapPin className="w-4 h-4 text-[#49A4BB] shrink-0" />
            <span>Radicada en {personal.location}</span>
          </div>

          <div className="space-y-4 text-sm text-gray-300 font-light leading-relaxed mb-8">
            <p>
              ¡Hola! Soy <strong className="text-white font-semibold">{personal.name}</strong>. Me apasiona crear puentes entre las ideas, los requerimientos operativos y las interfaces digitales efectivas.
            </p>
            <p>
              Cuento con una marcada orientación al detalle forjada a través del manejo avanzado de planillas de cálculo y análisis de datos en <strong className="text-[#49A4BB]">Microsoft Excel</strong>, complementado con el desarrollo web en <strong className="text-[#49A4BB]">React</strong> y la integración de herramientas de última generación con <strong className="text-[#49A4BB]">Inteligencia Artificial</strong>.
            </p>
            <p>
              En el plano humano, me defino como una persona <strong className="text-white">empática, puntual y una excelente compañera de equipo</strong>. Creo firmemente que los mejores proyectos se construyen con respeto, escucha activa y un clima de colaboración genuino.
            </p>
          </div>

          {/* Core Values checklist */}
          <div className="pt-6 border-t border-white/10 space-y-2.5">
            {[
              "Enfoque en soluciones claras y funcionales",
              "Puntualidad rigurosa en entregas y compromisos",
              "Facilidad para integrarme a equipos multidisciplinarios",
              "Capacitación constante en tecnologías emergentes"
            ].map((val, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-300">
                <CheckCircle className="w-3.5 h-3.5 text-[#49A4BB] shrink-0" />
                <span>{val}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Education & Formación Timeline (7 cols) */}
        <motion.div
          id="formacion"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-[#49A4BB] to-[#4C2365] text-white">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold uppercase text-white tracking-tight">
                FORMACIÓN & TRAYECTORIA
              </h3>
              <p className="text-xs text-gray-400">
                Cursos, especializaciones y constante actualización profesional
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {education.map((item, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 border border-white/10 hover:border-[#49A4BB]/40 transition-all group relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="text-base font-bold text-white uppercase tracking-wide group-hover:text-[#49A4BB] transition-colors flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#49A4BB] shrink-0" />
                    {item.title}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5 self-start sm:self-auto">
                    <Calendar className="w-3 h-3 text-[#49A4BB]" />
                    {item.period}
                  </span>
                </div>

                <p className="text-xs font-semibold text-[#49A4BB] mb-2 uppercase tracking-wider">
                  {item.institution}
                </p>

                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
