'use strict'
module.exports = {
  "parserOptions": {
    "ecmaVersion": 6
  },
  "extends": [
    "restrict/core"
  ],
  "globals": {
    "Promise": false
  },
  "rules": {
   // Strict Mode
    "strict": ["warn", "global"],

    "no-magic-numbers": ["warn", {"ignore": [0, 1], "enforceConst": true, "detectObjects": true}],
    "arrow-body-style": ["warn", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": "warn",
    "class-methods-use-this": "off",
    "generator-star-spacing": ["warn", {"before": true, "after": false}],
    "no-confusing-arrow": ["error", {"allowParens": true}],
    "no-duplicate-imports":  ["error", { "includeExports": true }],
    "no-new-symbol": "error",
    // "no-restricted-imports": ["error", "fs"]
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": ["error", "always", {"avoidQuotes": true}],
    "prefer-arrow-callback": ["off", {"allowUnboundThis": false}],
    "prefer-const": ["warn", {"ignoreReadBeforeAssign": false}],
    "prefer-numeric-literals": "error",
    "prefer-reflect": "warn",
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",
    "prefer-template": "warn",
    "require-yield": "error",
    "rest-spread-spacing": ["warn", "never"],
    "sort-imports": "warn",
    "symbol-description": "error",
    "template-curly-spacing": "warn",
    "yield-star-spacing": ["warn", "before"]
  }
}
