'use strict'

module.exports = {
  "plugins": ["jasmine"],
  "extends": ["plugin:jasmine/recommended"],
  "rules": {
    "jasmine/named-spy": "warn",
    "jasmine/missing-expect": "error"
  }
}
