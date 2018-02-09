module.exports = {
  plugins: ['prettier'],
  extends: [
    require.resolve('eslint-config-prettier')
  ],
  rules: {
    'prettier/prettier': 'warn'
  },
  globals: {
    module: true,
    require: true
  }
}
