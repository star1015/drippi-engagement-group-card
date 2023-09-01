/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,cjs,mjs}'],
  darkMode: 'class',
  theme: {
    extend: {
      dropShadow: {
        'sharp/25': '1px 1px 0 rgba(0, 0, 0, 0.25)',
        'sharp/50': '1px 1px 0 rgba(0, 0, 0, 0.5)',
        'sharp/75': '1px 1px 0 rgba(0, 0, 0, 0.75)',
        sharp: '1px 1px 0 rgb(0, 0, 0)',
      },
      keyframes: {
        hide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        slideIn: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        hide: 'hide 100ms ease-in',
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      colors: {
        dark: {
          primary: '#6A57C8',
          secondary: '#23282e',
          'secondary-focus': '#323d47',
          'secondary-content': '#7d828b',
          accent: '#22d3ee',
          neutral: '#5d6572',
          'base-100': '#1d232b',
          'base-200': '#101518',
          'base-300': '#0c0f12',
          'base-content': '#ffffff',
          info: '#0F5F9E',
          success: '#2abe45',
          warning: '#FFBE61',
          error: '#ec3c3a',
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  plugins: [require('tailwindcss-radix')()],
}
