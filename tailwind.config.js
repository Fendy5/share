module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '2xl': '1.5rem',
      xs: '.75rem',
      '2xs': '.5rem'
    },
    divideColor: () => ({
      secondary: '#999999'
    }),
    borderColor: () => ({
      secondary: '#999999',
      active: '#7961bd'
    }),
    maxWidth: {
      682: '682px'
    },
    screens: {
      tablet: { max: '767px' },
      laptop: { min: '768px', max: '1199px' },
      desktop: { min: '1200px' }
    },
    container: {
      center: true
    },
    extend: {
      backgroundImage: () => ({
        'starry-sky': "url('~@/assets/images/starry-sky.jpeg')"
      }),
      width: () => ({
        682: '682px'
      }),
      height: () => ({
        'screen-64': 'calc(100vh - 64px)'
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
