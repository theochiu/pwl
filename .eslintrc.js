module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier'],
  parser: 'pluggable-babel-eslint',
  parserOptions: {
    plugins: ['typescript'],
  },
  plugins: ['emotion', 'react-hooks', 'typescript'],
  rules: {
    // 'emotion/jsx-import': 'error',
    'emotion/no-vanilla': 'error',
    'emotion/import-from-emotion': 'error',
    'emotion/styled-import': 'error',
    'emotion/syntax-preference': ['error', 'string'],
    'import/prefer-default-export': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
  },
  overrides: [
    {
      files: ['**/*.ts{,x}'],
      rules: {
        'react/prop-types': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'typescript/class-name-casing': 'error',
        'typescript/explicit-function-return-type': 'off',
        'typescript/interface-name-prefix': 'error',
        'typescript/no-angle-bracket-type-assertion': 'error',
        'typescript/no-empty-interface': 'error',
        'typescript/no-inferrable-types': [
          'error',
          { ignoreProperties: false, ignoreParameters: false },
        ],
        'typescript/no-namespace': 'error',
        'typescript/no-non-null-assertion': 'error',
        'typescript/no-parameter-properties': 'error',
        'typescript/no-triple-slash-reference': 'error',
        'typescript/no-unused-vars': 'error',
        'typescript/no-var-requires': 'error',
        // This rule is desirable but seems incompatible with our other plugins.
        // 'typescript/prefer-namespace-keyword': 'error',
        'typescript/type-annotation-spacing': 'error',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
};
