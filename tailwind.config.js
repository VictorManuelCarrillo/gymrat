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
    extend: {},
  },
  plugins: [],
  //? for material ui
  corePlugins: {
    preflight: false,
  },
};
