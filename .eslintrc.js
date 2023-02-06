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
  plugins: [
    'spellcheck'
  ],
  rules: {
    'for-direction': 2,
    'no-constant-condition': 1,
    'no-useless-escape': 0,
    'spellcheck/spell-checker': ['warn',
      {
        comments: true,
        strings: true,
        identifiers: true,
        templates: true,
        lang: 'en_GB',
        skipWords: [
          'commitlint',
          'utils',
          'ecma',
          'lang',
          'plugins'
        ],
        skipIfMatch: [
          'http://[^s]*',
          '^[-\\w]+\/[-\\w\\.]+$'
        ],
        skipWordIfMatch: [
          '^foobar.*$',
          'tsconfig*',
          'es20*'
        ],
        minLength: 2
      }
    ]
  }
}
