module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'azulbase': '#1e3e73'
      },
      fontfamily: {
        robot: ['Roboto','sans-serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}