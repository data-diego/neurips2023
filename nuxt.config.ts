// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "nuxt-primevue",
  ],
  primevue: {
    usePrimeVue: true,
    options: {
      ripple: true,
    },
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
  },
  css: [
    "primevue/resources/primevue.min.css",
    "primeicons/primeicons.css",
    "primevue/resources/themes/lara-light-blue/theme.css",
  ],
  googleFonts: {
    families: {
      "Libre+Baskerville": true,
      "Red+Hat+Display": true,
    },
  },
  app: {
    head: {
      title: "Trabajos neurIPS2023",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Ofertas de trabajo ofrecidas en neurIPS, una de las conferencias más importantes de computación y AI",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        // { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧠</text></svg>",
        },
      ],
      script: [
        // ... other script tags if any

        // Hotjar Tracking Script
        {
          innerHTML: `
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3839636,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `,
          type: "text/javascript",
          charset: "utf-8",
          async: true,
        },
      ],

      // Ensure the script tag containing your JavaScript is not escaped:
      __dangerouslyDisableSanitizers: ["script"],
    },
  },
});
