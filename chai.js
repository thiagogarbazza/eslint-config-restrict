'use strict'

module.exports = {
  "globals":{
    "expect": true
  },
  "plugins": ["chai-expect"],
  "rules": {
    "chai-expect/missing-assertion": "error",
    "chai-expect/no-inner-compare": "error",
    "chai-expect/terminating-properties": "warn",

    "no-unused-expressions": "off",
  }
};
