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
          DEFAULT: '#0066CC', // 深蓝色
          dark: '#004C99',
          light: '#3399FF',
        },
        background: {
          DEFAULT: '#E6F3FF', // 淡蓝色背景
          secondary: '#F5F9FF',
          tertiary: '#FFFFFF',
        },
        text: {
          DEFAULT: '#1A1A1A', // 主要文字颜色（黑色）
          light: '#4A4A4A',
          accent: '#0066CC', // 强调文字颜色（蓝色）
        },
        neon: {
          orange: '#FF4D00',
          blue: '#00F0FF',
        },
      },
      backgroundImage: {
        'tech-pattern': 'linear-gradient(to bottom right, #E6F3FF 0%, #F5F9FF 100%)',
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