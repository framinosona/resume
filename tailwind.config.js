/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // This is essential for dark mode to work!
  theme: {
    extend: {
      colors: {
        'brand-primary': 'var(--primary)',
        'brand-secondary': 'var(--primary-light)', // Added for consistency with your CSS
        'brand-light': 'var(--primary-light)',
        'brand-dark': 'var(--primary-dark)',
        'brand-darker': 'var(--primary-darker)',
        'brand-accent': 'var(--accent)',
        'brand-background': 'var(--background)',
        'brand-background-alt': 'var(--background-alt)',
        'brand-white': 'var(--text-on-dark)',
        'brand-contrast': 'var(--text-primary)',
      }
    }
  }
}
