module.exports = {
  "env": {
      "es6": true,
      "node": true
  },
  "extends": "eslint:recommended",
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
  globals: {
      "WebSocket": true,
      "global": true,
      "requestAnimationFrame": true,
      "cancelAnimationFrame": true
  },
  "rules": {
      "indent": [
          "error",
          2,
          { "SwitchCase": 1 }
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "semi": [
          "error",
          "always"
      ],
      "no-empty": "off",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "no-console": "off",
  }
};