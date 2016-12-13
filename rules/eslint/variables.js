'use strict'

module.exports = {
  "rules": {
    "no-catch-shadow": "error",
    "no-label-var": "error",
    "no-restricted-globals": ["error", ""],
    "no-shadow": ["error", {"builtinGlobals": false, "hoist": "functions", "allow": ["done"]}],
    "no-shadow-restricted-names": "error",
    "no-undef": ["error", {"typeof": true}],
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-unused-vars": ["error", {"caughtErrors": "all"}],
    "no-use-before-define": ["error", {"functions": false, "classes": false}]
  }
};
