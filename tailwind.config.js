/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#4F20D2',       // Vibrant electric purple from image
          primaryHover: '#5E2EE2',
          primaryDark: '#3A13A4',
          accent: '#7C4DFF',        // Bright luminous violet
          accentLight: '#A78BFA',   // Lavender highlight
          accentPale: '#DDD6FE',
          bgDeep: '#1E0664',        // Deep night purple
          bgBase: '#2B0B88',        // Main app background
          surface: '#361198',       // Neumorphic surface
          surfaceCard: '#3A13A4',   // Elevated card surface
          surfaceElevated: '#4418BE',
          border: 'rgba(167, 139, 250, 0.22)',
          borderGlow: 'rgba(255, 255, 255, 0.7)',
          text: '#FFFFFF',
          textMuted: '#C4B5FD',
        }
      },
      fontFamily: {
        rethink: ['"Rethink Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace', 'Consolas'],
      },
      boxShadow: {
        'neu-purple': '8px 8px 18px rgba(16, 3, 52, 0.65), -8px -8px 18px rgba(110, 60, 245, 0.32)',
        'neu-purple-sm': '4px 4px 10px rgba(16, 3, 52, 0.6), -4px -4px 10px rgba(110, 60, 245, 0.3)',
        'neu-purple-lg': '12px 12px 28px rgba(16, 3, 52, 0.75), -12px -12px 28px rgba(110, 60, 245, 0.38)',
        'neu-purple-inset': 'inset 4px 4px 8px rgba(16, 3, 52, 0.7), inset -4px -4px 8px rgba(110, 60, 245, 0.3)',
        'neu-purple-pressed': 'inset 3px 3px 6px rgba(16, 3, 52, 0.8), inset -3px -3px 6px rgba(110, 60, 245, 0.35)',
        'glow-purple': '0 0 25px rgba(167, 139, 250, 0.65)',
        'glow-purple-lg': '0 0 45px rgba(124, 77, 255, 0.8)',
        'glow-white': '0 0 20px rgba(255, 255, 255, 0.85)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 8px rgba(167, 139, 250, 0.6))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 20px rgba(196, 181, 253, 0.9))' },
        }
      }
    },
  },
  plugins: [],
}
