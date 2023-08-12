import path from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: { 
      crawlLinks: true, 
      ignore: ['/dynamic'],
      routes: ['/sitemap.xml']
    }
  },
  experimental: {
    payloadExtraction: true
  },
  components: [
    {
    path: '~/components',
    extensions: ['.vue'],
    }
  ],
  alias: {
    assets: '/<rootDir>/assets',
  },
  css: [
    '/assets/css/main.css',
  ],

    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },

  app: {
    
    head: {
      
        script: [
          {
            src: "https://plausible.io/js/embed.host.js",
            body: true
          }
        ],
      
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'nl'
      },
      
    },
  },
  image: {
    provider: 'vercel',
    dir: 'public',
    presets: {
      pictures: {
        modifiers: {
          format: 'webp',
          quality: '60',
          fit: 'cover',
        },
        screens: {
          xs: 320,
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
          xxl: 1536,
          '2xl': 1536,

        },
      }
    }
  },
    modules: [
        '@nuxtjs/supabase',
        '@nuxt/image-edge',
        '@vueuse/nuxt',
        '@nuxtjs/partytown'
    ],

      }
 
    
    
)



