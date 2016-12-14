'use strict'

module.exports = {
  "rules": {
    "array-callback-return": "error",
    "block-scoped-var": "warn",
    "class-methods-use-this": "off",
    "complexity": ["error", 7],
    "consistent-return": "warn",
    "curly": ["warn", "multi-line", "consistent"],
    "default-case": "warn",
    "dot-location": ["warn", "property"],
    "dot-notation": ["error", {"allowKeywords": true}],
    "eqeqeq": ["error", "smart"],
    "no-alert": "error",
    "no-caller": "error",
    "no-div-regex": "error",
    "no-else-return": "error",
    "no-empty-function": "warn",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-magic-numbers": ["warn", {"ignore": [0, 1], "enforceConst": true, "detectObjects": true}],
    "no-multi-spaces": "warn",
    "no-multi-str": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-new": "error",
    "no-octal-escape": "error",
    "no-param-reassign": ["error", {"props": false}],
    "no-proto": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-warning-comments": ["warn", {"terms": ["todo", "fixme"], "location": "anywhere"}],
    "no-with": "error",
    "radix": ["error", "as-needed"],
    "require-await": "error",
    "wrap-iife": ["error", "inside"],
    "yoda": ["error", "never", {"exceptRange": true}],
  }
};
