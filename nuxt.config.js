import VueSetupExtend from 'vite-plugin-vue-setup-extend'

export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, user-scalable=0, minimum-sacle=1, maximum-scale=1",
        },
      ],
    },
  },
  generate: {
    routes: ['/'],
    dir: 'docs',
  },
  css: [
      'bootstrap/dist/css/bootstrap.css',
  ],
  alias: {
    "@/*": "./*",
  },
  modules: ['@nuxt/content'],
  components: true,
  build: {
    terser: {
      terserOptions: {
        compress: {
          drop_console: false // 生产环境移除
        }
      }
    }
  },
  vite: {
    plugins: [
      VueSetupExtend()
    ]
  }
});
