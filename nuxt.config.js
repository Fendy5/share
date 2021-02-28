export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '跨域传输CDT',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  server: {
    port: 6010, // default: 3000
    host: '0.0.0.0' // default: localhost
  },

  loading: { color: '#7961bd' },

  proxy: {
    '/dev-api': {
      target: 'http://127.0.0.1:6011',
      changeOrigin: true,
      pathRewrite: {
        '^/dev-api': ''
      }
    }
  },

  env: {
    baseUrl: process.env.BASE_URL || '/dev-api'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // { src: '~assets/css/index.scss', lang: 'scss' }
    '@/assets/css/index.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/message/index'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
    prefix: '/dev-api',
    credentials: true
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  }
}
