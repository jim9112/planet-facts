module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      spartan: ['Spartan', 'sans-serif'],
      antonio: ['Antonio', 'sans-serif'],
    },
    extend: {
      backgroundImage: (theme) => ({
        'background-stars': "url('/static/background-stars.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
