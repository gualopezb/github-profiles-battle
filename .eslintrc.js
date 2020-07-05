module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:jest/recommended', 'prettier', 'prettier/react'],
  plugins: ['import', 'jest', 'jsx-a11y', 'react', 'prettier'],
  env: {
    browser: true,
    'jest/globals': true,
  },
  rules: {
    'class-methods-use-this': ['off'],
    'jsx-a11y/no-autofocus': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['src/tests/**'],
        optionalDependencies: false,
      },
    ],
    'prettier/prettier': ['error'],
  },
};
