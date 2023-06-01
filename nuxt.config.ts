// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Légion - SAW',
            link: [
                { rel: "icon", type: "image/svg+xml", href: "/_nuxt/assets/hexagone.svg"},
                { rel: "preconnect", href:"https://fonts.googleapis.com"},
                { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true},
                { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"},
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"}
            ],
            htmlAttrs: {
                lang: 'fr',
            },
            bodyAttrs: {
            }
        }
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
        tailwindcss: {},
        autoprefixer: {},
        },
    },
})