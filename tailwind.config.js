module.exports = {
  content: ["./**/*.html", "./**/*.md", "config.toml"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};