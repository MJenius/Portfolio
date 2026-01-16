/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
        float: "float 3s ease-in-out infinite",
        dataStream: "dataStream 2s linear infinite",
        schemaPulse: "schemaPulse 2s ease-in-out infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        dataStream: {
          "0%": {
            strokeDashoffset: "20",
          },
          "100%": {
            strokeDashoffset: "0",
          },
        },
        schemaPulse: {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "0.8",
          },
          "50%": {
            transform: "scale(1.02)",
            opacity: "1",
          },
        },
      },
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          foreground: '#ffffff',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#f3f4f6',
          foreground: '#1f2937',
        },
        muted: {
          DEFAULT: '#f3f4f6',
          foreground: '#6b7280',
        },
        ring: '#3b82f6',
        background: '#1e293b',
        foreground: '#f8fafc',
        border: '#334155',
      },
    },
  },
  plugins: [],
}

