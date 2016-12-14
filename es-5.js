'use strict'

module.exports = {
  "parserOptions": {
    "ecmaVersion": 5
  },
  "extends": [
    "eslint:recommended",
    "restrict/rules/eslint/possible-errors",
    "restrict/rules/eslint/best-practices",
    "restrict/rules/eslint/strict-mode",
    "restrict/rules/eslint/variables",
    "restrict/rules/eslint/nodejs-commonjs",
    "restrict/rules/eslint/stylistic-issues",
    "restrict/rules/plugins/filenames",
    "restrict/rules/plugins/promise",
    "restrict/rules/plugins/jsdoc"
  ],
  "rules": {
    "strict": ["warn", "function"],

    "promise/no-native": "error"
  }
};
