module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#3454D1',
      secondary: '#D1345B',
      background: '#efefef',
      'background-dark': '#AEAEAE',
      dark: '#0D1B1E',
      accent: '#34D1BF',
    }),
    textColor: theme => ({
      primary: '#3454D1',
      secondary: '#D1345B',
      background: '#efefef',
      white: '#fff',
      'background-dark': '#AEAEAE',
      dark: '#0D1B1E',
      accent: '#34D1BF',
      'light-accent': '#90E5DC',
    }),
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
};
