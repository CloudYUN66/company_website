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
        background: 'white',
        'background-secondary': '#f8fafc',
        'background-tertiary': '#ffffff',
        text: {
          DEFAULT: '#1A1A1A', // 主要文字颜色
          light: '#4A4A4A',
          accent: '#0066CC',
        }
      },
      backgroundImage: {
        'tech-pattern': 'radial-gradient(circle at 1px 1px, rgba(0, 102, 204, 0.1) 1px, transparent 1px)',
        'gradient-text': 'linear-gradient(to right, #FF8C00, #0066CC)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
} 