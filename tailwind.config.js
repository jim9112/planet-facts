module.exports = {
  purge: {
    content: [
      './pages/**/*.js',
      './pages/**/*.ts',
      './pages/**/*.jsx',
      './pages/**/*.tsx',
      './components/**/*.js',
      './components/**/*.ts',
      './components/**/*.jsx',
      './components/**/*.tsx',
    ],
    safelist: [
      'sm:bg-mercury',
      'sm:bg-venus',
      'sm:bg-earth',
      'sm:bg-mars',
      'sm:bg-saturn',
      'sm:bg-jupiter',
      'sm:bg-uranus',
      'sm:bg-neptune',
      'border-mercury',
      'border-venus',
      'border-earth',
      'border-mars',
      'border-saturn',
      'border-jupiter',
      'border-uranus',
      'border-neptune',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
