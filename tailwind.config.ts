import { transform } from 'next/dist/build/swc';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // bounceIn: {
        //   '0%': { transform: 'scale(0.5)' },
        //   '50%': { transform: 'scale(1.2)' },
        //   '100%': { transform: 'scale(1)' },
        // },
        bounce:{
          '0%, 100%' :{transform:'translateY(0)'},
          '50%' :{transform:'translateY(-10px)'},
        },
        spin:{ 
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-out forwards',
        fadeIn: 'fadeIn 2s ease-in-out',
        bounce: 'bounce 0.5s infinite',
        spin:'spin 1s linear infinite',
        'spin-360': 'spin-360 1s linear forwards',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;
