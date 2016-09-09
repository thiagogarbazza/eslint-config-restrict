'use strict'
module.exports = {
  "parserOptions": {
    "ecmaVersion": 5
  },
  "plugins": [
    "promise"
  ],
  "extends": [
    "restrict/core"
  ],
  "rules": {
    // Strict Mode
    "strict": ["warn", "function"],

    // Plugin promise
    "promise/no-native": "error",
  }
}
