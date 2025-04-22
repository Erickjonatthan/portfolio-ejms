/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        underline: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        'blink-color': { // Nova animação de keyframes
          '0%, 100%': { color: '#5b84ff' }, // Cor inicial e final
          '50%': { color: 'white' },      // Cor no meio da animação
        },
      },
      animation: {
        underline: 'underline 0.25s ease-out forwards',
        'blink-color': 'blink-color 2s infinite ease-in-out', // Nova classe de animação (2s de duração, infinita)
      },
      colors: {
        neonBlue: '#00f0ff',
      },
      boxShadow: {
        neon: '0 0 5px #00f0ff, 0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 40px #00f0ff',
      },
    },
  },
  plugins: [],
}

