// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    'postcss-preset-env': {
      features: { 'nesting-rules': true },
    },
    'postcss-logical': {},
    'postcss-dir-pseudo-class': {},
    'autoprefixer': {},
  }
}