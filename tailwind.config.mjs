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
        'primary-dark': '#0052CC',
        accent: '#7A5FFF',
        'accent-light': '#9B7FFF',
        'neutral-silver': '#F2F4F7',
        
        // Light mode colors
        'background-light': '#FFFFFF',
        'surface-light': '#F8F9FA',
        'text-light-primary': '#1A1A1A',
        'text-light-secondary': '#4A5568',
        'text-light-tertiary': '#718096',
        'border-light': '#E2E8F0',
        
        // Dark mode colors
        'background-dark': '#0B1120',
        'surface-dark': '#131B2E',
        'surface-darker': '#0A0F1A',
        'text-dark-primary': '#E8EAED',
        'text-dark-secondary': '#B8BDC5',
        'text-dark-tertiary': '#9CA3AF',
        'border-dark': '#1F2937',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '16px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
      },
      fontSize: {
        'display-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['3.75rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sm': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'heading-1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'heading-2': ['2.25rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-3': ['1.875rem', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 102, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 102, 255, 0.4)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [forms, typography],
};
