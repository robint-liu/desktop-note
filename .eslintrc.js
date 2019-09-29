module.exports = {
  root: true,
  extends: ["plugin:vue/essential", "@vue/prettier"],
  "parserOptions": {
    parser: "babel-eslint",
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "globalReturn": true,
      "impliedStrict": true
    }
  },
  "rules": {
    "indent": ["warn", 2],
    "accessor-pairs": 2,
    "arrow-body-style": 2,
    "arrow-spacing": 2,
    "block-spacing": 2,
    "callback-return": 2,
    "comma-spacing": 2,
    "default-case": 2,
    "line-comment-position": 2,
    "jsx-quotes": 2,
    "prefer-const": 2,
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  "env": {
    "browser": true,
    "node": true,
    "commonjs": false,
    "es6": true,
    "jquery": false
  }
};
