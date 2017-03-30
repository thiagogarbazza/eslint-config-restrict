'use strict'

module.exports = {
  "rules": {
    "array-bracket-spacing": ["warn", "never"],
    "block-spacing": "warn",
    "brace-style": "warn",
    "camelcase": "warn",
    "capitalized-comments": ["error", "always"],
    "comma-dangle": ["warn", "never"],
    "comma-spacing": "warn",
    "comma-style": "warn",
    "computed-property-spacing": ["warn", "never"],
    "consistent-this": ["warn", "that"],
    "eol-last": "error",
    "func-call-spacing": ["error", "never"],
    "func-name-matching": ["error", "always"],
    "func-names": ["error", "as-needed"],
    "func-style": ["error", "declaration"],
    "id-blacklist": ["warn", "data", "err", "cb", "callback"],
    "id-length": ["warn", {"min": 2, "exceptions": ["e", "i"]}],
    // "id-match": ["error", "^[a-z/$]+([A-Z][a-z]+)*$", { "properties": true, "onlyDeclarations": true }],
    "indent": ["warn", 2, {"SwitchCase": 1, "VariableDeclarator": 1, "MemberExpression": 1, "FunctionDeclaration": {"body": 1, "parameters": 2}, "FunctionExpression": {"body": 1, "parameters": 2}, "CallExpression": {"arguments": 1} }],
    "jsx-quotes": ["warn", "prefer-double"],
    "key-spacing": "warn",
    "keyword-spacing": "warn",
    "line-comment-position": ["warn", { "position": "above", "ignorePattern": "pragma" }],
    "linebreak-style": ["warn", "unix"],
    "lines-around-comment": "warn",
    "lines-around-directive": ["warn", { "before": "never", "after": "always" }],
    "max-depth": ["warn", 4],
    "max-len": ["warn", {"code": 150, "ignoreUrls": true}],
    "max-lines": ["warn", {"max": 300}],
    "max-nested-callbacks": ["warn", 10],
    "max-params": ["warn", 5],
    "max-statements-per-line": ["warn", {"max": 1 }],
    "max-statements": ["warn", 20, {"ignoreTopLevelFunctions": true }],
    "multiline-ternary": ["warn", "never"],
    "new-cap": "warn",
    "new-parens": "error",
    "newline-after-var": ["warn", "always"],
    "newline-before-return": "warn",
    "newline-per-chained-call": ["warn", {"ignoreChainWithDepth": 2 }],
    "no-array-constructor": "error",
    "no-bitwise": ["warn", {"int32Hint": true }],
    "no-continue": "warn",
    "no-inline-comments": "warn",
    "no-lonely-if": "warn",
    "no-mixed-operators": "warn",
    "no-multi-assign": "warn",
    "no-multiple-empty-lines": ["warn", {"max": 2, "maxBOF": 1, "maxEOF": 1}],
    "no-negated-condition": "warn",
    "no-nested-ternary": "warn",
    "no-new-object": "warn",
    "no-plusplus": ["warn", {"allowForLoopAfterthoughts": true}],
    "no-tabs": "warn",
    "no-trailing-spaces": "warn",
    "no-underscore-dangle": "warn",
    "no-unneeded-ternary": ["error", {"defaultAssignment": false}],
    "no-whitespace-before-property": "warn",
    "nonblock-statement-body-position": ["error", "below"],
    "object-curly-newline": ["warn", {"ObjectExpression": {"multiline": true, "minProperties": 2}, "ObjectPattern": { "multiline": false}}],
    "object-curly-spacing": ["warn", "never", {"objectsInObjects": false, "arraysInObjects": false}],
    "object-property-newline": ["warn", {"allowMultiplePropertiesPerLine": true}], // todo avaliar este caso.
    "one-var-declaration-per-line": ["warn", "initializations"],
    "one-var": ["warn", {"uninitialized": "never", "initialized": "never" }],
    "operator-assignment": ["warn", "always"],
    "operator-linebreak": ["warn", "before", {"overrides": { "?": "after", "+=": "none", "-=": "none"} }],
    "padded-blocks": ["warn", "never"],
    "quote-props": ["warn", "consistent-as-needed"],
    "quotes": ["warn", "single", {"avoidEscape": true}],
    "semi-spacing": "warn",
    "semi": "error",
    "sort-keys": ["warn", "asc", {"caseSensitive": true, "natural": true}],
    "sort-vars": ["warn", {"ignoreCase": false }],
    "space-before-blocks": "warn",
    "space-before-function-paren": ["warn", {"anonymous": "never", "named": "never", "asyncArrow": "never"}],
    "space-in-parens": ["warn", "never"],
    "space-infix-ops": "warn",
    "space-unary-ops": "warn",
    "spaced-comment": ["warn", "always", {"exceptions": ["*", "-", "+", "#"]}],
    "template-tag-spacing": ["warn", "never"],
    "unicode-bom": ["error", "never"]
  }
};
