/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{html,js}',
  './src/**/*.{html,js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    fontFamily: {
      haken: ["Hanken Grotesk", 'sans-serif']
    },
    colors: {
      primary: {
        LightRed: 'hsl(0, 100%, 67%)',
        OrangeYellow: 'hsl(39, 100%, 56%)',
        GreenTeal: 'hsl(166, 100%, 37%)',
        CobaltBlue: 'hsl(234, 85%, 45%)',
      },
      gradients: {
        LightSlateBlue: 'hsl(252, 100%, 67%)', //(background)
        LightRoyalBlue: 'hsl(241, 81%, 54%)',
        VioletBlue: 'hsla(256, 72%, 46%, 1)', //(circle)
        PersianBlue: 'hsla(241, 72%, 46%, 0)',
      },
      neutral: {
        White: 'hsl(0, 0%, 100%)',
        PaleBlue: 'hsl(221, 100%, 96%)',
        LightLavender: 'hsl(241, 100%, 89%)',
        DarkGrayBlue: 'hsl(224, 30%, 27%)',
      }
    }
  },
};
export const plugins = [];