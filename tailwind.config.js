/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './pages/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './components/**/*.{js,ts,jsx,tsx,mdx,scss}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx,scss}',
  ],
  //! for material ui
  important: true,
  theme: {
    extend: {
      fontFamily: {
        anton: ['var(--font-anton)', 'sans-serif'],
        exo2: ['var(--font-exo2)', 'sans-serif'],
        rubik: ['var(--font-rubik)', 'sans-serif'],
      },
    },
  },
  plugins: [],
  //? for material ui
  corePlugins: {
    preflight: false,
  },
};
