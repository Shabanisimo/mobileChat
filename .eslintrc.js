module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "node": true
  },
  "extends": "airbnb",
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
  },
  "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
      "react/destructuring-assignment": [0, 'never'],
      "react/static-property-placement": [0],
      "react/jsx-props-no-spreading": [{ 
        "explicitSpread": "ignore" 
        }]
  },
  "parser": "babel-eslint",
};