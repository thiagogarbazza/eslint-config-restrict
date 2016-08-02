'use strict'
module.exports = {
  "plugins": [
    "disable",
    "filenames",
    "jsdoc",
    "promise",
    "sorting"
  ],
  "extends": [
    "eslint:recommended"
  ],
  "rules": {
    // Possible Errors
    "no-extra-parens": "error",
    "valid-jsdoc": "warn",
    "no-prototype-builtins": "error",

    // Best Practices
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "complexity": ["error", 20],
    "consistent-return": "error",
    "curly": ["error", "multi-line"],
    "default-case": "warn",
    "dot-location": ["error", "property"],
    "dot-notation": ["error", {"allowKeywords": false}],
    "eqeqeq": ["error", "smart"],
    "no-alert": "error",
    "no-caller": "error",
    "no-div-regex": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-magic-numbers": ["warn", {"ignore": [0, 1], "enforceConst": false, "detectObjects": true}],
    "no-multi-spaces": "warn",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": ["error", {"props": false}],
    "no-proto": "error",
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-void": "error",
    "no-warning-comments": ["warn", {"terms": ["todo", "fixme"], "location": "anywhere"}],
    "no-with": "error",
    "radix": ["error", "as-needed"],
    "wrap-iife": ["error", "inside"],
    "yoda": ["error", "never", {"exceptRange": true}],

    // Strict Mode
    "strict": ["warn", "function"],

    // Variables
    "no-catch-shadow": "error",
    "no-label-var": "error",
    "no-restricted-globals": ["error", ""],
    "no-shadow": ["error", {"builtinGlobals": false, "hoist": "functions", "allow": ["done"]}],
    "no-shadow-restricted-names": "error",
    "no-undef": ["error", {"typeof": true}],
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-unused-vars": ["error", {"caughtErrors": "all"}],
    "no-use-before-define": ["error", {"functions": false, "classes": false}],

    // Node.js and CommonJS
    "callback-return": "error",
    "global-require": "error",
    "handle-callback-err": "error",
    "no-mixed-requires": "error",
    "no-new-require": "error",
    "no-path-concat": "error",
    "no-process-env": "error",
    "no-process-exit": "error",
    "no-restricted-modules": ["error", "fs", "cluster"],
    "no-sync": "error",

    // Stylistic Issues
    "array-bracket-spacing": ["warn", "never"],
    "block-spacing": "warn",
    "brace-style": "warn",
    "camelcase": "warn",
    "comma-dangle": ["warn", "never"],
    "comma-spacing": ["warn", {"before": false, "after": true }],
    "comma-style": ["warn", "last"],
    "computed-property-spacing": ["warn", "never"],
    "consistent-this": ["warn", "that"],
    "eol-last": "error",
    "func-style": ["error", "declaration", {"allowArrowFunctions": true }],
    "id-blacklist": ["error", "callback"],
    "id-length": ["warn", {"min": 2}],
    // "id-match": ["error", "^[a-z/$]+([A-Z][a-z]+)*$", { "properties": true, "onlyDeclarations": true }],
    "indent": ["warn", 2, {"SwitchCase": 1, "VariableDeclarator": 1 }],
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": "warn",
    "keyword-spacing": "warn",
    "linebreak-style": ["warn", "unix"],
    "lines-around-comment": "warn",
    "max-depth": ["error", 4],
    "max-len": ["warn", {"code": 150, "ignoreUrls": true}],
    "max-lines": ["warn", {"max": 300}],
    "max-nested-callbacks": ["error", 10],
    "max-params": ["error", 5],
    "max-statements": ["warn", 20, {"ignoreTopLevelFunctions": true }],
    "max-statements-per-line": ["warn", {"max": 1 }],
    "new-cap": "warn",
    "new-parens": "error",
    "newline-per-chained-call": ["warn", {"ignoreChainWithDepth": 2 }],
    "no-array-constructor": "error",
    "no-bitwise": ["warn", {"int32Hint": true }],
    "no-continue": "warn",
    "no-inline-comments": "warn",
    "no-lonely-if": "warn",
    "no-mixed-operators": "warn",
    "no-mixed-spaces-and-tabs": "warn",
    "no-multiple-empty-lines": ["warn", {"max": 2, "maxBOF": 1, "maxEOF": 1}],
    "no-negated-condition": "warn",
    "no-nested-ternary": "warn",
    "no-new-object": "warn",
    "no-plusplus": ["warn", {"allowForLoopAfterthoughts": true}],
    "no-spaced-func": "warn",
    "no-trailing-spaces": "warn",
    "no-underscore-dangle": "warn",
    "no-unneeded-ternary": ["error", {"defaultAssignment": false}],
    "no-whitespace-before-property": "warn",
    "object-curly-newline": ["warn", {"multiline": true, "minProperties": 1}],
    "object-curly-spacing": ["warn", "never", {"objectsInObjects": false,"arraysInObjects": false}],
    "object-property-newline": ["warn", {"allowMultiplePropertiesPerLine": true}], // todo avaliar este caso.
    "one-var": ["warn", {"uninitialized": "always", "initialized": "never" }],
    "operator-assignment": ["warn", "always"],
    "operator-linebreak": ["warn", "before", {"overrides": { "?": "after", "+=": "none", "-=": "none"} }],
    "padded-blocks": ["warn", "never"],
    "quote-props": ["warn", "consistent-as-needed"],
    "quotes": ["warn", "single", {"avoidEscape": true}],
    "semi": "error",
    "semi-spacing": "warn",
    "sort-vars": ["warn", {"ignoreCase": true }],
    "space-before-blocks": "warn",
    "space-before-function-paren": ["warn", {"anonymous": "never", "named": "never"}],
    "space-in-parens": ["warn", "never"],
    "space-infix-ops": "warn",
    "space-unary-ops": "warn",
    "spaced-comment": ["warn", "always", {"exceptions": ["-", "+", "#"]}],
    "unicode-bom": ["error", "never"],

     // Plugin Filename
    "filenames/match-exported": ["error", "kebab"],
    "filenames/match-regex": ["error", "^[a-z-]+$", true],
    "filenames/no-index": "error",

    // Plugin jsdoc
    "jsdoc/check-param-names": "warn",
    "jsdoc/check-tag-names": "warn",
    "jsdoc/check-types": "warn",
    "jsdoc/newline-after-description": ["warn", "always"],
    "jsdoc/require-description-complete-sentence": "warn",
    "jsdoc/require-hyphen-before-description": "off",
    "jsdoc/require-param": "warn",
    "jsdoc/require-param-description": "warn",
    "jsdoc/require-param-type": "warn",
    "jsdoc/require-returns-description": "warn",
    "jsdoc/require-returns-type": "warn",

    // Plugin Promise
    "promise/always-return": "off",
    "promise/catch-or-return": "off",
    "promise/param-names": "error",

    // Plugin Sorting
    "sorting/sort-object-props": ["warn", {"ignoreCase": true, "ignoreMethods": false}]
  }
}
