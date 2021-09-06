module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    // "airbnb",
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-undef': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
// Influence: extends > plugins > rules
// Priority: rules > plugins > extends
