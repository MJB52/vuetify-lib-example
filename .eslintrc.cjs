/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [],
  rules: {
    'linebreak-style': ['error', process.env.NODE_ENV === 'prod' ? 'unix' : 'windows'],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: false, fixToUnknown: false }],
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': ['error'],
    indent: ['warn', 2, { SwitchCase: 1 }],
    'max-len': 'off',
    'prefer-destructuring': 'off',
    '@typescript-eslint/interface-name-prefix': ['off'],
    'no-useless-constructor': 'off',
    'no-empty-function': ['error', { allow: ['constructors'] }],
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    'vue/script-setup-uses-vars': 'off',
    'vue/valid-v-slot': 'off',
    'vue/no-v-for-template-key': 'off',
    '@typescript-eslint/ban-types': 'off',
    'vue/no-unused-vars': 'off'
  }
};
