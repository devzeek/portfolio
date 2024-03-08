module.exports = {
  env: {
    node: true,
  },
  root: true,
  extends: ['@nuxt/eslint-config', 'plugin:prettier/recommended'],
  plugins: [],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
  },
}
