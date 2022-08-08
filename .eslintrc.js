module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:compat/recommended',
		// 'plugin:jest/recommended',
		'plugin:import/typescript',
		'plugin:jsx-a11y/recommended',
	],
	// setting: {
	// 	react: {
  //     version: 'detect',
  //   },
	// },
	plugins: [
		'react',
		'jsx-a11y',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
			},
		],
		indent: ['error', 'tab'],
		'linebreak-style': ['warn', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		eqeqeq: ['error', 'smart'],
		curly: ['error', 'multi-line'],
		'default-case': ['error'],
		'dot-location': ['error', 'property'],
		'no-alert': ['error'],
		'no-else-return': ['error'],
		'no-empty-function': ['error'],
		'no-floating-decimal': ['error'],
		'no-implicit-coercion': ['error'],
		'no-lone-blocks': ['error'],
		'no-multi-spaces': ['error'],
		'no-multi-str': ['error'],
		'no-sequences': ['error'],
		radix: ['error'],
		'comma-dangle': ['error', 'always-multiline'],
		'block-spacing': ['error'],
		'brace-style': ['error'],
		camelcase: [
			'error',
			{
				properties: 'never',
			},
		],
		'comma-spacing': ['error'],
		'eol-last': ['error'],
		'key-spacing': [
			'error',
			{
				afterColon: true,
			},
		],
		'max-len': [
			'warn',
			{
				code: 250,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
			},
		],
		'new-cap': ['error'],
		// 'no-lonely-if': ['error'],
		'no-multiple-empty-lines': [
			'error',
			{
				max: 2,
			},
		],
		'no-trailing-spaces': ['error'],
		'space-infix-ops': ['error'],
		'space-unary-ops': ['error'],
		'arrow-parens': [
			'error',
			'as-needed',
			{
				'requireForBlockBody': true,
			},
		],
		'arrow-body-style': ['error', 'as-needed'],
		'no-var': ['error'],
		'prefer-arrow-callback': ['error'],
		'prefer-const': ['warn'],
		'prefer-destructuring': ['warn'],
		'no-whitespace-before-property': ['error'],
	},
};