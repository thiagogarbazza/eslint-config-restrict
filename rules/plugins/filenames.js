'use strict'

module.exports = {
  "plugins": ["filenames"],
  "rules": {
    "filenames/match-exported": ["error", "kebab"],
    "filenames/match-regex": ["error", "^[a-z-]+$", true],
    "filenames/no-index": "error"
  }
};
