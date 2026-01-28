/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    './layout/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './templates/**/*.liquid',
    './blocks/**/*.liquid',
    './assets/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

