/**
 * Default ESLint configuration for Sapphire Projects
 * @example
 * ```json
 * {
 *   "extends": "@sapphire"
 * }
 * ```
 */
export const config = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		extraFileExtensions: ['.mjs'],
		project: './tsconfig.eslint.json',
		sourceType: 'module',
		ecmaVersion: 2020
	},
	extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier/@typescript-eslint'],
	env: {
		node: true,
		es6: true,
		es2017: true,
		es2020: true,
		jest: true,
		browser: true,
		commonjs: true
	},
	rules: {
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': 'off',
		'@typescript-eslint/await-thenable': 'off',
		'@typescript-eslint/ban-ts-comment': [
			'error',
			{
				minimumDescriptionLength: 3,
				'ts-check': true,
				'ts-expect-error': 'allow-with-description',
				'ts-ignore': 'allow-with-description',
				'ts-nocheck': true
			}
		],
		'@typescript-eslint/class-literal-property-style': 'error',
		'@typescript-eslint/consistent-type-definitions': 'error',
		'@typescript-eslint/default-param-last': 'error',
		'@typescript-eslint/dot-notation': [
			'error',
			{
				allowKeywords: true,
				allowPattern: '(^[A-Z])|(^[a-z]+(_[a-z]+)+$)',
				allowPrivateClassPropertyAccess: true
			}
		],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'error',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/init-declarations': 'error',
		'@typescript-eslint/member-ordering': [
			'error',
			{
				default: [
					'signature',
					'public-instance-field',
					'protected-instance-field',
					'private-instance-field',
					'instance-field',
					'public-constructor',
					'protected-constructor',
					'private-constructor',
					'constructor',
					'public-instance-method',
					'protected-instance-method',
					'private-instance-method',
					'instance-method',
					'public-static-field',
					'protected-static-field',
					'private-static-field',
					'static-field',
					'public-static-method',
					'protected-static-method',
					'private-static-method',
					'static-method'
				]
			}
		],
		'@typescript-eslint/naming-convention': [
			'error',
			{
				filter: {
					match: false,
					regex: '^(?:VariableDeclarator|AssignmentExpression)$'
				},
				format: ['camelCase'],
				leadingUnderscore: 'forbid',
				selector: 'default',
				trailingUnderscore: 'forbid'
			},
			{
				format: ['camelCase'],
				leadingUnderscore: 'allow',
				selector: 'parameter'
			},
			{
				format: ['camelCase'],
				modifiers: ['readonly'],
				selector: 'property'
			},
			{
				format: ['PascalCase'],
				selector: 'enumMember'
			},
			{
				format: ['PascalCase'],
				selector: 'typeLike'
			}
		],
		'@typescript-eslint/no-base-to-string': 'error',
		'@typescript-eslint/no-dupe-class-members': 'error',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-extra-non-null-assertion': 'error',
		'@typescript-eslint/no-extraneous-class': 'error',
		'@typescript-eslint/no-floating-promises': 'error',
		'@typescript-eslint/no-for-in-array': 'error',
		'@typescript-eslint/no-implied-eval': 'error',
		'@typescript-eslint/no-invalid-this': 'error',
		'@typescript-eslint/no-invalid-void-type': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-throw-literal': 'error',
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
		'@typescript-eslint/no-unnecessary-qualifier': 'error',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-use-before-define': [
			'error',
			{
				functions: false,
				typedefs: false
			}
		],
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/prefer-as-const': 'error',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-reduce-type-parameter': 'error',
		'@typescript-eslint/prefer-string-starts-ends-with': 'error',
		'@typescript-eslint/promise-function-async': 'off',
		'@typescript-eslint/require-await': 'error',
		'@typescript-eslint/restrict-plus-operands': 'error',
		'@typescript-eslint/switch-exhaustiveness-check': 'warn',
		'@typescript-eslint/unbound-method': 'error',
		'@typescript-eslint/unified-signatures': 'error',
		'accessor-pairs': 'off',
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		'callback-return': 'off',
		'capitalized-comments': 'off',
		'class-methods-use-this': 'off',
		complexity: 'off',
		'consistent-return': 'off',
		'consistent-this': ['error', 'self'],
		'constructor-super': 'off',
		'default-case': 'off',
		'dot-notation': 'off',
		eqeqeq: ['error', 'smart'],
		'for-direction': 'off',
		'func-name-matching': ['warn', 'always'],
		'func-names': ['warn', 'as-needed'],
		'func-style': 'off',
		'global-require': 'off',
		'guard-for-in': 'warn',
		'handle-callback-err': 'off',
		'id-blacklist': 'off',
		'id-length': 'off',
		'id-match': 'off',
		'init-declarations': 'off',
		'line-comment-position': 'off',
		'lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true
			}
		],
		'max-depth': 'off',
		'max-lines': 'off',
		'max-nested-callbacks': 'off',
		'max-params': 'off',
		'max-statements': 'off',
		'max-statements-per-line': [
			'error',
			{
				max: 1
			}
		],
		'multiline-comment-style': 'off',
		'new-cap': 'off',
		'no-alert': 'error',
		'no-array-constructor': 'off',
		'no-await-in-loop': 'off',
		'no-bitwise': 'off',
		'no-buffer-constructor': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-catch-shadow': 'error',
		'no-class-assign': 'warn',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'warn',
		'no-console': 'off',
		'no-const-assign': 'error',
		'no-constant-condition': 'off',
		'no-control-regex': 'off',
		'no-debugger': 'error',
		'no-delete-var': 'error',
		'no-div-regex': 'off',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'off',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': [
			'error',
			{
				includeExports: false
			}
		],
		'no-else-return': 'warn',
		'no-empty': 'off',
		'no-empty-character-class': 'error',
		'no-empty-function': 'off',
		'no-empty-pattern': 'off',
		'no-eq-null': 'warn',
		'no-eval': 'warn',
		'no-ex-assign': 'off',
		'no-extend-native': 'warn',
		'no-extra-bind': 'off',
		'no-extra-boolean-cast': 'off',
		'no-extra-label': 'warn',
		'no-fallthrough': 'off',
		'no-func-assign': 'off',
		'no-global-assign': 'off',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'off',
		'no-implied-eval': 'off',
		'no-import-assign': 'warn',
		'no-inline-comments': 'off',
		'no-inner-declarations': 'off',
		'no-invalid-regexp': 'warn',
		'no-invalid-this': 'off',
		'no-irregular-whitespace': [
			'error',
			{
				skipComments: true,
				skipRegExps: true,
				skipStrings: true,
				skipTemplates: true
			}
		],
		'no-iterator': 'off',
		'no-label-var': 'error',
		'no-labels': 'off',
		'no-lone-blocks': 'off',
		'no-lonely-if': 'error',
		'no-loop-func': 'off',
		'no-magic-numbers': 'off',
		'no-mixed-requires': 'error',
		'no-multi-assign': 'warn',
		'no-multi-str': 'error',
		'no-negated-condition': 'warn',
		'no-nested-ternary': 'off',
		'no-new': 'off',
		'no-new-func': 'warn',
		'no-new-object': 'error',
		'no-new-require': 'error',
		'no-new-symbol': 'warn',
		'no-new-wrappers': 'warn',
		'no-obj-calls': 'warn',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'off',
		'no-path-concat': 'warn',
		'no-plusplus': 'off',
		'no-process-env': 'off',
		'no-process-exit': 'off',
		'no-proto': 'off',
		'no-prototype-builtins': 'off',
		'no-redeclare': 'off',
		'no-regex-spaces': 'warn',
		'no-restricted-globals': 'off',
		'no-restricted-imports': 'off',
		'no-restricted-modules': 'off',
		'no-restricted-properties': 'off',
		'no-restricted-syntax': 'off',
		'no-return-assign': 'off',
		'no-return-await': 'warn',
		'no-script-url': 'off',
		'no-self-assign': 'error',
		'no-self-compare': 'warn',
		'no-setter-return': 'warn',
		'no-shadow': 'off',
		'no-shadow-restricted-names': 'error',
		'no-sparse-arrays': 'warn',
		'no-sync': 'off',
		'no-template-curly-in-string': 'error',
		'no-ternary': 'off',
		'no-this-before-super': 'off',
		'no-throw-literal': 'off',
		'no-undef': 'off',
		'no-undef-init': 'off',
		'no-undefined': 'off',
		'no-underscore-dangle': 'off',
		'no-unmodified-loop-condition': 'off',
		'no-unneeded-ternary': 'off',
		'no-unreachable': 'warn',
		'no-unsafe-finally': 'warn',
		'no-unsafe-negation': 'error',
		'no-unused-expressions': 'off',
		'no-unused-labels': 'error',
		'no-unused-vars': 'off',
		'no-use-before-define': 'off',
		'no-useless-call': 'off',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'warn',
		'no-useless-constructor': 'off',
		'no-useless-escape': 'off',
		'no-useless-rename': 'error',
		'no-useless-return': 'warn',
		'no-var': 'error',
		'no-void': 'off',
		'no-warning-comments': 'off',
		'no-with': 'error',
		'object-shorthand': ['error', 'always'],
		'one-var': ['error', 'never'],
		'operator-assignment': ['error', 'always'],
		'padding-line-between-statements': 'off',
		'prefer-const': [
			'error',
			{
				destructuring: 'all'
			}
		],
		'prefer-destructuring': [
			'error',
			{
				AssignmentExpression: {
					array: true,
					object: false
				},
				VariableDeclarator: {
					array: false,
					object: true
				}
			}
		],
		'prefer-numeric-literals': 'off',
		'prefer-promise-reject-errors': 'error',
		'prefer-rest-params': 'warn',
		'prefer-spread': 'error',
		'prefer-template': 'warn',
		radix: 'error',
		'require-await': 'off',
		'require-jsdoc': 'off',
		'require-yield': 'warn',
		'sort-imports': 'off',
		'sort-keys': 'off',
		'sort-vars': 'off',
		'spaced-comment': ['error', 'always'],
		strict: ['error', 'never'],
		'symbol-description': 'warn',
		'use-isnan': 'error',
		'valid-jsdoc': 'off',
		'valid-typeof': 'error',
		'vars-on-top': 'off',
		yoda: 'error'
	}
};

module.exports = config;
export default config;
