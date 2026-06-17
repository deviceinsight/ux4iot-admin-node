const eslint = require('@eslint/js');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const prettierRecommended = require('eslint-plugin-prettier/recommended');
const globals = require('globals');

module.exports = [
	eslint.configs.recommended,
	...tsPlugin.configs['flat/recommended'],
	prettierRecommended,
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'module',
			},
			globals: {
				...globals.node,
				...globals.es2015,
			},
		},
		rules: {
			'linebreak-style': ['error', 'unix'],
			semi: ['error', 'always'],
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
		},
	},
	{
		ignores: ['dist/**', 'node_modules/**'],
	},
];
