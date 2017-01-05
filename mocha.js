'use strict'

module.exports = {
  "env": {
    "mocha": true
  },
  "plugins": ["mocha"],
  "rules": {
    "mocha/no-exclusive-tests": "error",
    "mocha/no-skipped-tests": "error",
    "mocha/no-pending-tests": "error",
    "mocha/handle-done-callback": "error",
    "mocha/no-synchronous-tests": "off",
    "mocha/no-global-tests": "error",
    "mocha/no-hooks-for-single-case": "error",
    "mocha/no-top-level-hooks": "error",
    "mocha/no-identical-title": "error",
    "mocha/max-top-level-suites": ["warn", {"limit": 1}],
    "mocha/no-nested-tests": "error",

    "global-require": "off",

    "promise/no-callback-in-promise": "off"
  }
};
