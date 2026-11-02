import React from 'react';
import { motion } from 'framer-motion';

export default function RedRose({ className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: -30 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        x: 0,
      }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`relative group ${className}`}
    >
      {/* Ambient Red/Crimson Halo Glow */}
      <div 
        className="absolute inset-0 -m-6 rounded-full bg-gradient-to-tr from-rose-600/30 via-red-500/20 to-transparent filter blur-2xl group-hover:from-rose-600/50 group-hover:blur-3xl transition-all duration-700 pointer-events-none"
      />

      {/* Floating Animated Rose Container */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          rotate: [-2.5, 2.5, -2.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.12,
          rotate: 4,
          transition: { duration: 0.3 }
        }}
        className="relative cursor-pointer select-none filter drop-shadow-[0_10px_25px_rgba(225,29,72,0.45)]"
        title="Flor 🌹"
      >
        <svg
          viewBox="0 0 200 260"
          className="w-36 h-48 sm:w-44 sm:h-56 md:w-52 md:h-64 lg:w-56 lg:h-72 drop-shadow-[0_0_20px_rgba(244,63,94,0.35)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Rose Petal Gradients */}
            <radialGradient id="petalGlow" cx="45%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#ff4d6d" />
              <stop offset="50%" stopColor="#c9184a" />
              <stop offset="100%" stopColor="#590d22" />
            </radialGradient>

            <linearGradient id="deepPetal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff758f" />
              <stop offset="40%" stopColor="#e01e37" />
              <stop offset="85%" stopColor="#800f2f" />
              <stop offset="100%" stopColor="#3d0314" />
            </linearGradient>

            <linearGradient id="innerVelvet" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#ff8fa3" />
              <stop offset="40%" stopColor="#c9184a" />
              <stop offset="80%" stopColor="#590d22" />
              <stop offset="100%" stopColor="#2b030d" />
            </linearGradient>

            <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38b000" />
              <stop offset="50%" stopColor="#1b4332" />
              <stop offset="100%" stopColor="#081c15" />
            </linearGradient>

            <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#70e000" />
              <stop offset="60%" stopColor="#2d6a4f" />
              <stop offset="100%" stopColor="#081c15" />
            </linearGradient>

            <linearGradient id="leafGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#52b788" />
              <stop offset="70%" stopColor="#1b4332" />
              <stop offset="100%" stopColor="#081c15" />
            </linearGradient>

            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Rose Stem */}
          <path
            d="M 98 120 Q 94 175 106 245"
            stroke="url(#stemGrad)"
            strokeWidth="5.5"
            strokeLinecap="round"
          />

          {/* Tiny Natural Thorns on Stem */}
          <path d="M 96 155 Q 90 157 88 163 Q 95 161 97 159" fill="#2d6a4f" />
          <path d="M 100 185 Q 107 187 110 193 Q 103 192 101 189" fill="#2d6a4f" />

          {/* Left Leaf */}
          <g transform="rotate(-15 70 170)">
            <path
              d="M 96 170 C 65 165 45 180 50 200 C 68 202 88 188 96 170 Z"
              fill="url(#leafGrad1)"
              stroke="#1b4332"
              strokeWidth="1"
            />
            {/* Leaf Vein */}
            <path d="M 96 170 Q 75 182 50 200" stroke="#70e000" strokeWidth="1.2" opacity="0.7" fill="none" />
            <path d="M 85 177 Q 78 174 74 170" stroke="#70e000" strokeWidth="0.8" opacity="0.5" fill="none" />
            <path d="M 75 184 Q 68 181 65 177" stroke="#70e000" strokeWidth="0.8" opacity="0.5" fill="none" />
          </g>

          {/* Right Leaf */}
          <g transform="rotate(10 120 190)">
            <path
              d="M 103 190 C 130 180 155 192 152 214 C 132 218 112 205 103 190 Z"
              fill="url(#leafGrad2)"
              stroke="#1b4332"
              strokeWidth="1"
            />
            {/* Leaf Vein */}
            <path d="M 103 190 Q 128 200 152 214" stroke="#52b788" strokeWidth="1.2" opacity="0.7" fill="none" />
            <path d="M 116 195 Q 124 191 128 187" stroke="#52b788" strokeWidth="0.8" opacity="0.5" fill="none" />
            <path d="M 129 203 Q 138 199 142 195" stroke="#52b788" strokeWidth="0.8" opacity="0.5" fill="none" />
          </g>

          {/* Sepals (Green base holding the rose head) */}
          <path d="M 92 122 Q 80 135 68 142 Q 82 130 92 122 Z" fill="#2d6a4f" />
          <path d="M 104 122 Q 118 135 130 140 Q 115 130 104 122 Z" fill="#2d6a4f" />
          <path d="M 98 122 Q 98 140 96 148 Q 98 138 98 122 Z" fill="#1b4332" />

          {/* --- BLOOMING ROSE PETALS --- */}
          {/* Outer Layer Petals (Deep Velvet Crimson) */}
          <path
            d="M 98 124 C 62 124 48 95 56 70 C 64 45 92 48 98 62 C 104 48 132 45 140 70 C 148 95 134 124 98 124 Z"
            fill="url(#petalGlow)"
            stroke="#3d0314"
            strokeWidth="1"
          />

          {/* Left Wing Petal */}
          <path
            d="M 98 122 C 60 120 42 85 54 58 C 66 32 94 48 98 68 C 85 75 75 95 98 122 Z"
            fill="url(#deepPetal)"
            stroke="#590d22"
            strokeWidth="1"
          />

          {/* Right Wing Petal */}
          <path
            d="M 98 122 C 136 120 154 85 142 58 C 130 32 102 48 98 68 C 111 75 121 95 98 122 Z"
            fill="url(#deepPetal)"
            stroke="#590d22"
            strokeWidth="1"
          />

          {/* Bottom Cup Petal (Rounded Base) */}
          <path
            d="M 68 85 C 68 116 128 116 128 85 C 135 106 122 122 98 122 C 74 122 61 106 68 85 Z"
            fill="url(#innerVelvet)"
            stroke="#ff758f"
            strokeWidth="0.8"
          />

          {/* Mid Layer Overlapping Petals */}
          <path
            d="M 72 65 C 65 82 82 102 98 104 C 114 102 131 82 124 65 C 112 55 84 55 72 65 Z"
            fill="url(#petalGlow)"
            stroke="#800f2f"
            strokeWidth="1"
          />

          {/* Left Center Fold */}
          <path
            d="M 76 60 C 72 75 88 92 102 92 C 90 85 84 72 88 58 C 82 58 78 59 76 60 Z"
            fill="url(#deepPetal)"
            stroke="#ff4d6d"
            strokeWidth="0.6"
          />

          {/* Right Center Fold */}
          <path
            d="M 120 60 C 124 75 108 92 94 92 C 106 85 112 72 108 58 C 114 58 118 59 120 60 Z"
            fill="url(#deepPetal)"
            stroke="#ff4d6d"
            strokeWidth="0.6"
          />

          {/* Rose Heart / Core Spiral */}
          <path
            d="M 88 56 C 88 44 108 44 108 56 C 108 68 88 74 88 56 Z"
            fill="#590d22"
          />
          <path
            d="M 91 54 C 91 46 105 46 105 54 C 105 62 93 64 91 54 Z"
            fill="url(#innerVelvet)"
            stroke="#ff8fa3"
            strokeWidth="0.7"
          />
          <path
            d="M 95 52 C 95 48 101 48 101 52 C 101 56 96 57 95 52 Z"
            fill="#ff758f"
          />

          {/* Morning Dew Drops (Sparkling Highlights) */}
          <ellipse cx="68" cy="74" rx="2.5" ry="3.5" fill="#ffffff" opacity="0.8" />
          <ellipse cx="67" cy="73" rx="1" ry="1.2" fill="#ffffff" />

          <ellipse cx="126" cy="80" rx="2" ry="2.8" fill="#ffffff" opacity="0.75" />
          <ellipse cx="80" cy="182" rx="1.8" ry="2.2" fill="#ffffff" opacity="0.8" />

          {/* Delicate Shimmer Accent */}
          <circle cx="106" cy="46" r="1.5" fill="#ffffff" opacity="0.9" />
        </svg>

        {/* Small Elegant Badge / Signature Floating Underneath */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-white/[0.06] border border-red-500/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-[0_0_15px_rgba(225,29,72,0.4)]">
          <span className="text-[10px] font-extrabold tracking-widest text-rose-300 uppercase whitespace-nowrap">
            Flor 🌹
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
