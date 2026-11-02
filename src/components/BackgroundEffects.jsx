import React, { useEffect, useState } from 'react';

export default function BackgroundEffects() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* 1. Primary Vibrant Cyan Liquid Glow (Top Right / Center) */}
      <div
        className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] md:w-[850px] md:h-[850px] rounded-full opacity-60 filter blur-[100px] transition-transform duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(73, 164, 187, 0.7) 0%, rgba(32, 92, 109, 0.4) 50%, transparent 75%)',
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
        }}
      />

      {/* 2. Secondary Deep Purple Liquid Glow (Bottom Left / Center) */}
      <div
        className="absolute bottom-[-10%] left-[-8%] w-[650px] h-[650px] md:w-[900px] md:h-[900px] rounded-full opacity-65 filter blur-[110px] transition-transform duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(76, 35, 101, 0.8) 0%, rgba(41, 16, 56, 0.5) 55%, transparent 80%)',
          transform: `translate(${mousePos.x * -35}px, ${mousePos.y * -35}px)`,
        }}
      />

      {/* 3. Mid-Page Blended Orb (Cyan & Purple Fusion) */}
      <div
        className="absolute top-[45%] left-[20%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full opacity-45 filter blur-[120px] transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(73, 164, 187, 0.5) 0%, rgba(76, 35, 101, 0.6) 60%, transparent 85%)',
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * -20}px)`,
        }}
      />

      {/* 4. Bottom Right Purple Glow (Ensures degrade continues in contact/footer) */}
      <div
        className="absolute bottom-[5%] right-[5%] w-[450px] h-[450px] md:w-[650px] md:h-[650px] rounded-full opacity-55 filter blur-[110px] transition-transform duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(76, 35, 101, 0.75) 0%, rgba(73, 164, 187, 0.25) 60%, transparent 80%)',
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * 20}px)`,
        }}
      />

      {/* --- 3D Frosted Glass Liquid Droplets & Bubbles (Reference Image Aesthetic) --- */}
      {/* Top Right Floating Glass Bubble */}
      <div 
        className="hidden md:block absolute top-[8%] right-[8%] w-60 h-60 rounded-full border border-white/20 backdrop-blur-xl opacity-50 shadow-[inset_0_0_40px_rgba(73,164,187,0.45),0_10px_40px_rgba(0,0,0,0.3)] animate-blob-float-1"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(73, 164, 187, 0.15) 100%)'
        }}
      />

      {/* Bottom Right Big Glass Orb */}
      <div 
        className="hidden md:block absolute bottom-[15%] right-[3%] w-72 h-72 rounded-full border border-white/20 backdrop-blur-xl opacity-45 shadow-[inset_0_0_50px_rgba(76,35,101,0.5),0_15px_50px_rgba(0,0,0,0.4)] animate-blob-float-2"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(76, 35, 101, 0.2) 100%)'
        }}
      />

      {/* Mid Left Glass Drop */}
      <div 
        className="hidden md:block absolute top-[55%] left-[2%] w-52 h-52 rounded-full border border-white/20 backdrop-blur-xl opacity-40 shadow-[inset_0_0_35px_rgba(73,164,187,0.35)] animate-blob-float-3"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(76, 35, 101, 0.15) 100%)'
        }}
      />

      {/* Top Left Organic Small Glass Bubble */}
      <div 
        className="hidden lg:block absolute top-[22%] left-[10%] w-32 h-32 rounded-full border border-white/15 backdrop-blur-lg opacity-35 shadow-[inset_0_0_25px_rgba(255,255,255,0.2)] animate-blob-float-1"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(73, 164, 187, 0.1) 100%)'
        }}
      />

      {/* Subtle glass dust grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:28px_28px]"
      />
    </div>
  );
}
