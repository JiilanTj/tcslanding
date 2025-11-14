import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        'primary-light': '#1A73FF',
        accent: '#7A5FFF',
        'neutral-silver': '#F2F4F7',
        'background-light': '#FFFFFF',
        'background-dark': '#0A0F1F',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '16px',
        lg: '16px',
        xl: '24px',
      },
    },
  },
  plugins: [forms, typography],
};
