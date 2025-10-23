/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'formo-cream': '#ffecd2',
        'formo-orange': '#f16755',
        'formo-dark': '#0d0d0d',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'codec-cold': ['Codec Cold', 'system-ui', 'sans-serif'],
        'codec-warm': ['Codec Warm', 'system-ui', 'sans-serif'],
        'twisthead': ['Twisthead', 'system-ui', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'Roboto', 'system-ui', 'sans-serif'],
        'open-sans': ['var(--font-open-sans)', 'Open Sans', 'system-ui', 'sans-serif'],
        playfair: ['Playfair Display', 'Georgia', 'serif'],
        montserrat: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
