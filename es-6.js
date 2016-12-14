'use strict'

module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
  },
  "env": {
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "restrict/rules/eslint/possible-errors",
    "restrict/rules/eslint/best-practices",
    "restrict/rules/eslint/strict-mode",
    "restrict/rules/eslint/variables",
    "restrict/rules/eslint/nodejs-commonjs",
    "restrict/rules/eslint/stylistic-issues",
    "restrict/rules/eslint/ecma-script-6",
    "restrict/rules/plugins/filenames",
    "restrict/rules/plugins/promise",
    "restrict/rules/plugins/jsdoc",
  ],
};
