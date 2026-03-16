// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      whatsappNumber: '5511924696645',
    },
  },

  modules: ['@nuxtjs/tailwindcss'],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Dra. Viviana Tavares Campos | Fisioterapia Domiciliar',
      htmlAttrs: { lang: 'pt-BR' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Fisioterapia domiciliar com carinho e dedicação para idosos. Dra. Viviana Tavares Campos atende no conforto do seu lar em São Paulo.',
        },
        { name: 'theme-color', content: '#6B9972' },
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-6N9P11FETY',
          async: true,
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-6N9P11FETY');`,
        },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Nunito:wght@300;400;500;600;700;800&display=swap',
        },
      ],
    },
  },

  nitro: {
    prerender: {
      routes: ['/', '/domiciliar', '/massagem'],
    },
  },
})
