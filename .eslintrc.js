const path = require('path');

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:import/typescript',
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended',
    'airbnb-base',
    '@vue/typescript'
  ],
  // required to lint *.vue files
  plugins: [
    "vue",
    "@typescript-eslint"
  ],
  rules: {
    "no-debugger": "off",
    "no-console": "off",
    "lines-between-class-members": "off",
    'object-curly-newline': ['warn', {
      /*
      ObjectExpression: {
        multiline: true,
        minProperties: 1,
        consistent: true
      },
      */
      ObjectPattern: {
        multiline: true,
        minProperties: 2,
        consistent: true
      },
      ImportDeclaration: 'never',
      ExportDeclaration: 'never'
    }],
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
    "no-param-reassign": [
      "error",
      {
        "props": true,
        "ignorePropertyModificationsFor": [
          "state"
        ]
      }
    ],
    'vue/attributes-order': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],
  },
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.vue', '.ts'],
        map: [
          ['@', path.resolve(__dirname, './src')],
        ],
      },
    },
  }
}