export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  telemetry: true,
  target: 'static',
  router: {
    base: '/tsmcdododo.github.io/'
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'slider',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/element-ui',
    '@/plugins/echarts',
    '~/plugins/axios'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],
  // Optional
  dayjs: {
    locales: ['zh-TW'],
    defaultLocale: 'zh-TW',
    defaultTimeZone: 'Asia/Taipei',
    plugins: [
      'utc', // import 'dayjs/plugin/utc'
      'timezone' // import 'dayjs/plugin/timezone'
    ] // Your Day.js plugin
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/dayjs',
    '@nuxtjs/proxy',
    // 請求代理配置，解決跨域
    '@gauseen/nuxt-proxy'
  ],
  axios: {
    proxy: true,
    // prefix: '/api', // baseURL
    credentials: true
  },
  proxyTable: {
    '/api': {
      target: 'localhost:3000/', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': '' // 将 /api 替换掉
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend: function (config, { isDev, isClient }) {
      config.node = {

        fs: 'empty'
      }
    }
  }
}
