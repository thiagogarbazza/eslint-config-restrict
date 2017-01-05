# eslint-config-restrict

[![Build Status](https://travis-ci.org/thiagogarbazza/eslint-config-restrict.svg?branch=0.0.6)](https://travis-ci.org/thiagogarbazza/eslint-config-restrict)


[<img src="http://eslint.org/img/logo.svg" width="80" align="right" alt="eslint">](http://eslint.org)

> An [ESLint] [shareable config] for the _restrict js_ coding style.

Ensure your source code adheres to the _restrict js_ coding style by linting
your code with [ESLint]. Hook ESLint into your editor and build pipeline for
maximum effect.

## Install
```sh
npm i --save-dev eslint-config-restrict
```

## Usage
In your `.eslintrc.json` file:
```json
{
  "extends": "restrict"
}
```

### Overrides
You can easily override rules in your own `.eslintrc.json` config. For example,
to use 4 space indents instead of 2:
```json
{
  "extends": "restrict",
  "rules": {
    "indent": ["error", 4]
  }
}
```

### ES5
`eslint-config-restrict` is ES6+ by default. To use ES5, extend `restrict/es-5`
in your `.eslintrc.json`:
```json
{
  "extends": "restrict/es-5"
}
```

### Angular 1.x
To use Angular 1.x, extend `restrict/angular-1` in your `.eslintrc.json`:

```json
{
  "extends": "restrict/angular-1"
}
```

### Jasmine
To use Jasmine, extend `restrict/jasmine` in your `.eslintrc.json`:
```json
{
  "extends": "restrict/jasmine"
}
```

[ESLint]: http://eslint.org/
[ESLint rules]: http://eslint.org/docs/rules/
[shareable config]: http://eslint.org/docs/developer-guide/shareable-configs.html
[awesome-eslint]: https://github.com/dustinspecker/awesome-eslint
