import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./nuxt-config.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: defaultTheme.colors.green
      }
    }
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      "autumn",
    ],
  },
}