module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ['react-app', 'eslint:recommended', 'plugin:react/recommended', 'prettier'],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['react'],
    rules: {},
  }
  