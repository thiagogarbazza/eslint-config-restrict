'use strict'
module.exports = {
  "plugins": [
    "angular"
  ],
  "extends": [
    "angular",
  ],
  "rules": {
    "consistent-this": ["error", "vm"],

    // Plugin angular
    "angular/component-limit": "error",
    "angular/controller-as-route": "error",
    "angular/di": ["error", "$inject"],
    "angular/di-order": ["warn", true, "case_insensitive"],
    "angular/di-unused": "error",
    "angular/directive-restrict": ["off", {"explicit": "always"}], // ativar depois de corrção https://github.com/Gillespie59/eslint-plugin-angular/issues/326
    "angular/dumb-inject": "error",
    "angular/empty-controller": "error",
    "angular/file-name": ["error", {"typeSeparator": "dash", "nameStyle": "dash", "ignoreTypeSuffix": true}],
    "angular/function-type": ["warn", "named"],
    "angular/module-dependency-order": ["error", {"grouped": true}],
    "angular/no-angular-mock": "error",
    "angular/no-directive-replace": "error",
    "angular/no-http-callback": "error",
    "angular/no-inline-template": "error",
    "angular/no-run-logic": "error",
    "angular/no-services": ["error", {"directive": ["$http", "$resource"], "controller": ["$http"]}],
    "angular/on-destroy": "error",
    "angular/prefer-component": "warn",
  }
}