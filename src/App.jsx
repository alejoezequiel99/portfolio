import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  const handleOpenCV = () => setIsCVOpen(true);
  const handleCloseCV = () => setIsCVOpen(false);

  return (
    <div className="relative min-h-screen text-white selection:bg-[#7C4DFF] selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenCV={handleOpenCV} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section with Central Interactive Notebook & Navigation Buttons */}
        <Hero onOpenCV={handleOpenCV} />

        {/* 00. Datos Personales */}
        <PersonalInfo onOpenCV={handleOpenCV} />

        {/* 01. Skills (Lenguajes, Tech, AI Tools, Soft Skills) */}
        <Skills />

        {/* 02. Experiencia (Trabajos hechos y en proceso) */}
        <Experience />

        {/* Proyectos (FDD Stock & Portfolio) */}
        <Projects />

        {/* 03. Certificaciones (CFL 404, FCC, Mercado Pago) */}
        <Certifications />

        {/* Contacto & Descarga CV */}
        <Contact onOpenCV={handleOpenCV} />
      </main>

      {/* Footer with Networking, GitHub, LinkedIn, Correo & Console note */}
      <Footer />

      {/* Modal for PDF CV preview and print/download */}
      <CVModal isOpen={isCVOpen} onClose={handleCloseCV} />
    </div>
  );
}
