const libraryGlobals = {
  "d3": "readonly"
};

module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint-config-i-am-meticulous",
  "globals": Object.assign({
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  }, libraryGlobals),
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
  }
};