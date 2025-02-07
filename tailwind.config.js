/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF8C00', // 橙色
          dark: '#FF6B00',
          light: '#FFA500',
        },
        accent: {
          DEFAULT: '#00A3FF', // 蓝色
          dark: '#0077CC',
          light: '#33B5FF',
        },
        background: {
          DEFAULT: '#0A0A0A', // 深黑色
          secondary: '#1A1A1A',
          tertiary: '#2A2A2A',
        },
        neon: {
          orange: '#FF4D00',
          blue: '#00F0FF',
        },
      },
      backgroundImage: {
        'tech-pattern': 'linear-gradient(to bottom right, #0A0A0A 0%, #1A1A1A 100%)',
        'grid-pattern': 'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(to right, #1A1A1A 1px, transparent 1px)',
      },
      boxShadow: {
        'neon-orange': '0 0 5px #FF4D00, 0 0 20px #FF4D00',
        'neon-blue': '0 0 5px #00F0FF, 0 0 20px #00F0FF',
      },
    },
  },
  plugins: [],
} 