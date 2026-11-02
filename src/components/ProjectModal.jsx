import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#080410]/80 backdrop-blur-xl"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#130b22]/95 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] text-gray-100 z-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Preview Image */}
          <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-white/10 mb-6 bg-[#0a0514]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#130b22] via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider bg-[#49A4BB]/90 text-white backdrop-blur-md shadow-md uppercase">
                {project.category}
              </span>
            </div>
          </div>

          {/* Title & Subtitle */}
          <div className="mb-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mb-1">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-[#49A4BB] font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold tracking-wider bg-white/[0.06] border border-white/10 text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Long Description */}
          <div className="space-y-4 mb-6 text-gray-300 text-sm sm:text-base leading-relaxed">
            <p>{project.longDescription}</p>
          </div>

          {/* Highlights List */}
          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#49A4BB]" />
              Aspectos Destacados & Arquitectura
            </h4>
            <ul className="space-y-2.5">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#49A4BB] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            >
              Cerrar
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-gray-200 bg-white/10 hover:bg-white/20 border border-white/15 transition-all flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              Ver Código
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyan px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Demo en Vivo
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
