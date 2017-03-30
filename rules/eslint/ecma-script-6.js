'use strict'

module.exports = {
  "rules": {
    "arrow-body-style": ["warn", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": "warn",
    "generator-star-spacing": ["warn", {"before": true, "after": false}],
    "no-confusing-arrow": ["error", {"allowParens": true}],
    "no-duplicate-imports":  ["error", { "includeExports": true }],
    "no-new-symbol": "error",
    // "no-restricted-imports": ["error", "fs"]
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "warn",
    "no-var": "error",
    "object-shorthand": ["error", "always", {"avoidQuotes": true}],
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",
    "prefer-destructuring": ["warn", {"array": true, "object": true}, {"enforceForRenamedProperties": true}],
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",
    "prefer-template": "warn",
    "rest-spread-spacing": ["warn", "never"],
    "sort-imports": "warn",
    "symbol-description": "error",
    "template-curly-spacing": "warn",
    "yield-star-spacing": ["warn", "before"]
  }
};
