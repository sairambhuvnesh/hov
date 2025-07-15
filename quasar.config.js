// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

import { defineConfig } from '#q-app/wrappers'

export default defineConfig((/* ctx */) => {
  return {
    boot: ['supabase'],
    css: ['app.scss'],

    extras: ['mdi-v6', 'roboto-font', 'material-icons'],

    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20',
      },

      vueRouterMode: 'hash',

      // ✅ Externalize @supabase/supabase-js to prevent Netlify build errors
      rollupOptions: {
        external: ['@supabase/supabase-js'],
      },

      vitePlugins: [
        [
          'vite-plugin-checker',
          {
            eslint: {
              lintCommand: 'eslint -c ./eslint.config.js "./src*/**/*.{js,mjs,cjs,vue}"',
              useFlatConfig: true,
            },
          },
          { server: false },
        ],
      ],
    },

    devServer: {
      open: true,
    },

    framework: {
      iconSet: 'mdi-v6',
      config: {
        brand: {
          primary: '#6A0DAD',
          secondary: '#9575CD',
          accent: '#B39DDB',
          dark: '#311B92',
          positive: '#7C4DFF',
          negative: '#C2185B',
          info: '#7E57C2',
          warning: '#FDD835',
        },
      },
      plugins: [],
    },

    animations: [],

    ssr: {
      prodPort: 3000,
      middlewares: ['render'],
      pwa: false,
    },

    pwa: {
      workboxMode: 'GenerateSW',
    },

    cordova: {},

    capacitor: {
      hideSplashscreen: true,
    },

    electron: {
      preloadScripts: ['electron-preload'],
      inspectPort: 5858,
      bundler: 'packager',
      packager: {},
      builder: {
        appId: 'quasar-project',
      },
    },

    bex: {
      extraScripts: [],
    },
  }
})
