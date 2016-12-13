'use strict'

module.exports = {
  "plugins": ["jsdoc"],
  "rules": {
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
  }
};
