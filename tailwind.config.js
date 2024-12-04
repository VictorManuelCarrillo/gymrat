/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  //! for material ui TODO
  // important: '#root',
  theme: {
    extend: {},
  },
  plugins: [],
  //? for material ui
  corePlugins: {
    preflight: false,
  },
};
