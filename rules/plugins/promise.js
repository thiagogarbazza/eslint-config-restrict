'use strict'

module.exports = {
  "plugins": ["promise"],
  "rules": {
    "promise/always-return": "error",
    "promise/avoid-new": "warn",
    "promise/catch-or-return": "error",
    "promise/no-callback-in-promise": "warn",
    "promise/no-nesting": "warn",
    "promise/no-promise-in-callback": "warn",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error"
  }
};
