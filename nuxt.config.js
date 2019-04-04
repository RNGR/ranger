const pkg = require('./package')

module.exports = {
  mode: 'universal',

  head: {
    title: 'RANGER Studio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'apple-mobile-web-app-title', content: 'RANGER' },
      { name: 'application-name', content: 'RANGER' },
      { name: 'msapplication-TileColor', content: '#263238' },
      { name: 'theme-color', content: '#cfd8dc' },
      { hid: 'og:title', property: 'og:title', content:'RANGER Studio — a full-service digital agency working at the intersection of design and engineering' },
      { hid: 'og:site_name', property: 'og:site_name', content:'RANGER Studio' },
      { hid: 'og:url', property: 'og:url', content:'https://rangerstudio.com' },
      { hid: 'og:description', property: 'og:description', content:'Located in New York City and New Haven, our multidisciplinary agency engages with clients around the world. We provide the creative and technical solutions essential to your project’s immediate success and long-term scalability.' },
      { hid: 'og:type', property: 'og:type', content:'website' },
      { hid: 'og:image', property: 'og:image', content:'https://rngr.org/images/office-survival-optimized.jpg' },
      { hid: "twitter:card", name: "twitter:card", content: "summary" },
      { hid: "twitter:site", name: "twitter:site", content: "@ranger" },
      { hid: "twitter:creator", name: "twitter:creator", content: "@benhaynes" }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type:'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type:'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#263238' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Neuton:300,400' }
    ]
  },

  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        let position = {}
        if (to.matched.length < 2) {
          position = { x: 0, y: 0 }
        } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
          position = { x: 0, y: 0 }
        }
        if (to.hash) {
          position = { selector: to.hash }
        }
        return position
      }
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['@/assets/scss/main.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/global.js'],

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  generate: {
    fallback: true,
    fallback: '404.html'
    // routes: [
    //   '/posts/1'
    // ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  }
}
