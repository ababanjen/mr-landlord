/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx, html}',
    './components/**/*.{js,ts,jsx,tsx,mdx, html}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        default: '#626262',
        warning: '#ef9eae',
        success: '#a0eee8',
        primary: { 500: '#6ba8f5', 600: '#528ed8' },
        label: '#747474'
      }
    }
  },
  darkMode: 'class',
  plugins: [require('tw-elements/dist/plugin.cjs')]
}
