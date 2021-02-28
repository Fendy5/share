module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/multiline-html-element-content-newline': 0,
    'vue/max-attributes-per-line': 0,
    'no-trailing-spaces': 0,
    'arrow-parens': 0,
    'no-console': 0,
    'brace-style': 0,
    'no-sequences': 0,
    'no-unexpected-multiline': 0,
    indent: 0,
    'vue/singleline-html-element-content-newline': 0
  }
}
