module.exports = {
  "env": {
    "node": true,
    "es6": true
  },
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "js": true,
      "modules": true
    },
    "sourceType": "module"
  },
  "settings": {
    "react": {
      "version": "16.7.0"
    }
  },
  "rules": {
    "no-extra-boolean-cast": 0,
    "object-curly-newline": ["error", { "multiline": true, "minProperties": 4 }],
    "arrow-parens": [2, "as-needed"],
    "no-console": [
      "error",
      {
        "allow": ["log", "error"]
      }
    ],
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
