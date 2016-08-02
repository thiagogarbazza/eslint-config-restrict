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
    // Plugin promise
    "promise/no-native": "error",
  }
}
