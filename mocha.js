'use strict'

module.exports = {
  "env": {
    "mocha": true
  },
  "plugins": ["mocha"],
  "rules": {
    "mocha/handle-done-callback": "error",
    "mocha/max-top-level-suites": ["warn", {"limit": 1}],
    "mocha/no-exclusive-tests": "error",
    "mocha/no-hooks-for-single-case": "error",
    "mocha/no-identical-title": "error",
    "mocha/no-global-tests": "error",
    "mocha/no-nested-tests": "error",
    "mocha/no-pending-tests": "error",
    "mocha/no-skipped-tests": "error",
    "mocha/no-synchronous-tests": "off",
    "mocha/no-top-level-hooks": "error",
    "mocha/valid-suite-description": ["warning", "^[A-Z]"],
    "mocha/valid-test-description": ["warning", "^[a-z]"],

    "global-require": "off",

    "promise/no-callback-in-promise": "off"
  }
};
