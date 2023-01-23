module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: 'tsconfig.json'
  },
  rules: {
    'for-direction': 2,
    'no-constant-condition': 1
  }
}
