module.exports = {
  purge: ['public/**/*.html'],
  theme: {
    themeVariants: ['dark']
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'dark', 'dark:hover', 'dark:focus'],
    textColor: ['responsive', 'hover', 'focus', 'dark', 'dark:hover', 'dark:focus'],
  },
  plugins: [require('tailwindcss-multi-theme')],
}
