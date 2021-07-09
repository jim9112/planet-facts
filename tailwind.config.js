module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      background: '#070724',
      'text-primary': '#FFFFFF',
      'border-primary': '#838391',
      secondary: '#38384F',
      mercury: '#419EBB',
      venus: '#EDA249',
      earth: '#6f2ed6',
      mars: '#D14C32',
      jupiter: '#D83A34',
      saturn: '#CD5120',
      uranus: '#1ec2a4',
      neptune: '#2d68f0',
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
