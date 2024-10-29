module.exports = {
  parser: 'babel-eslint', // Use Babel for linting
  extends: ['airbnb'], // Use Airbnb config
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 'off',
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
};
