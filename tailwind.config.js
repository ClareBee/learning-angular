module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#3454D1',
      secondary: '#D1345B',
      background: '#efefef',
      backgroundDark: '#AEAEAE',
      dark: '#0D1B1E',
      accent: '#34D1BF',
      accentLight: '#90E5DC',
    }),
    textColor: theme => ({
      ...theme('colors'),
      primary: '#3454D1',
      secondary: '#D1345B',
      background: '#efefef',
      white: '#fff',
      backgroundDark: '#AEAEAE',
      dark: '#0D1B1E',
      accent: '#34D1BF',
      accentLight: '#90E5DC',
    }),
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
};
