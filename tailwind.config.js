const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'

  backgroundImage: {
    "profile-pattern":
      "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
    "footer-texture": "url('/img/footer-texture.png')",
  },
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        amber: colors.amber,
        orange: colors.orange,
        sky: colors.sky,
        red: colors.red,
        purple: colors.purple,
        zinc: colors.zinc,
        emerald: colors.emerald,
        blue: colors.blue,
        yellow: colors.yellow,
      },
    },
    fontFamily: {
      sans: ["Roboto Mono"],
      mono: ["var(--font-roboto-mono)"],
    },
  },
  variants: ["slashed-zero", "ordinal"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "aqua",
      "coffee",
      {
        xlight: {
          primary: "#60a5fa", //blue400
          "primary-focus": "#7e22ce", //purple700
          "primary-content": "#09090b", //zinc950
          secondary: "#fbbf24", //amber400
          "secondary-focus": "",
          "secondary-content": "",
          accent: "#7e22ce", //purple700
          neutral: "#71717a", //zinc500
          "base-100": "#60a5fa", //blue400
          "base-200": "#d97706", //amber600
          "base-300": "#fafafa", //zinc50
          info: "#60a5fa", //blue400
          success: "#489380",
          warning: "#eb8014",
          error: "#e01a2e",
        },
        xdark: {
          primary: "#09090b", //zinc950
          "primary-focus": "#7e22ce", //purple700
          "primary-content": "#f4f4f5", //zinc100
          secondary: "#581c87", //purple900
          "secondary-focus": "",
          "secondary-content": "",
          accent: "#c026d3", //zinc700
          neutral: "#71717a", //zinc500
          "base-100": "#18181b", //zinc900
          "base-200": "#9333ea", //purplee600
          "base-300": "#fafafa", //zinc50
          info: "#18181b", //zinc900
          success: "#489380",
          warning: "#eb8014",
          error: "#e01a2e",
        },
      },
    ],
  },
};
