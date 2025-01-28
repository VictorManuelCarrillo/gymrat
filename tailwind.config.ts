import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx,scss}',
    //? for storybook
    './.storybook/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['var(--font-anton)', 'sans-serif'],
        exo2: ['var(--font-exo2)', 'sans-serif'],
        rubik: ['var(--font-rubik)', 'sans-serif'],
      },
      colors: {
        primary: '#f1842c',
        secondary: '#404145',
        error: '#EB2345',
        warning: '#F46A01',
        info: '#013CE0',
        success: '#85D642',
      },
    },
  },
  plugins: [],
  //? for material ui
  corePlugins: {
    preflight: false,
  },
} satisfies Config;
