module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "google", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["graphql-operations.ts", "resolvers-types.ts", "next-env.d.ts"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "require-jsdoc": "off",
    "react/no-unescaped-entities": 0,
  },
};
