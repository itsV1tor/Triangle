/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'button-config': 'rgba(139, 92, 246, 0.25)',
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
