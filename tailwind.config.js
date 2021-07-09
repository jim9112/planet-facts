module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      background: '#070724',
      'text-primary': '#FFFFFF',
      'border-primary': '#838391',
    },
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
