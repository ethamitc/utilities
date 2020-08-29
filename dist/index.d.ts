/**
 * Default ESLint configuration for Sapphire Projects
 * @example
 * ```json
 * {
 *   "extends": "@sapphire"
 * }
 * ```
 */
export declare const config: {
    root: boolean;
    parser: string;
    parserOptions: {
        extraFileExtensions: string[];
        project: string;
        sourceType: string;
        ecmaVersion: number;
    };
    extends: string[];
    env: {
        node: boolean;
        es6: boolean;
        es2017: boolean;
        es2020: boolean;
        jest: boolean;
        browser: boolean;
        commonjs: boolean;
    };
    rules: {
        'for-direction': string;
        'getter-return': string;
        'no-await-in-loop': string;
        'no-compare-neg-zero': string;
        'no-cond-assign': string;
        'no-console': string;
        'no-constant-condition': string;
        'no-control-regex': string;
        'no-debugger': string;
        'no-dupe-args': string;
        'no-dupe-keys': string;
        'no-duplicate-case': string;
        'no-empty': string;
        'no-empty-character-class': string;
        'no-ex-assign': string;
        'no-extra-boolean-cast': string;
        'no-extra-parens': string;
        'no-extra-semi': string;
        'no-func-assign': string;
        'no-inner-declarations': string;
        'no-invalid-regexp': string;
        'no-irregular-whitespace': (string | {
            skipStrings: boolean;
            skipComments: boolean;
            skipRegExps: boolean;
            skipTemplates: boolean;
        })[];
        'no-obj-calls': string;
        'no-prototype-builtins': string;
        'no-regex-spaces': string;
        'no-sparse-arrays': string;
        'no-template-curly-in-string': string;
        'no-unexpected-multiline': string;
        'no-unreachable': string;
        'no-unsafe-finally': string;
        'no-unsafe-negation': string;
        'use-isnan': string;
        'valid-jsdoc': string;
        'valid-typeof': string;
        'accessor-pairs': string;
        'array-callback-return': string;
        'block-scoped-var': string;
        'class-methods-use-this': string;
        complexity: string;
        'consistent-return': string;
        curly: string[];
        'default-case': string;
        'dot-location': string[];
        'dot-notation': string;
        eqeqeq: string[];
        'guard-for-in': string;
        'no-alert': string;
        'no-caller': string;
        'no-case-declarations': string;
        'no-div-regex': string;
        'no-else-return': string;
        'no-empty-function': string;
        'no-empty-pattern': string;
        'no-eq-null': string;
        'no-eval': string;
        'no-extend-native': string;
        'no-extra-bind': string;
        'no-extra-label': string;
        'no-fallthrough': string;
        'no-floating-decimal': string;
        'no-global-assign': string;
        'no-implicit-coercion': string;
        'no-implicit-globals': string;
        'no-implied-eval': string;
        'no-invalid-this': string;
        'no-iterator': string;
        'no-labels': string;
        'no-lone-blocks': string;
        'no-loop-func': string;
        'no-magic-numbers': string;
        'no-multi-spaces': (string | {
            ignoreEOLComments: boolean;
        })[];
        'no-multi-str': string;
        'no-new': string;
        'no-new-func': string;
        'no-new-wrappers': string;
        'no-octal': string;
        'no-octal-escape': string;
        'no-param-reassign': string;
        'no-proto': string;
        'no-redeclare': string;
        'no-restricted-properties': string;
        'no-return-assign': string;
        'no-return-await': string;
        'no-script-url': string;
        'no-self-assign': string;
        'no-self-compare': string;
        'no-sequences': string;
        'no-throw-literal': string;
        'no-unmodified-loop-condition': string;
        'no-unused-expressions': string;
        'no-unused-labels': string;
        'no-useless-call': string;
        'no-useless-concat': string;
        'no-useless-escape': string;
        'no-useless-return': string;
        'no-void': string;
        'no-warning-comments': string;
        'no-with': string;
        'prefer-promise-reject-errors': string;
        radix: string;
        'require-await': string;
        'vars-on-top': string;
        'wrap-iife': string[];
        yoda: string;
        strict: string[];
        'init-declarations': string;
        'no-catch-shadow': string;
        'no-delete-var': string;
        'no-label-var': string;
        'no-restricted-globals': string;
        'no-shadow': string;
        'no-shadow-restricted-names': string;
        'no-undef': string;
        'no-undef-init': string;
        'no-undefined': string;
        'no-unused-vars': string;
        'no-use-before-define': string;
        'callback-return': string;
        'global-require': string;
        'handle-callback-err': string;
        'no-buffer-constructor': string;
        'no-mixed-requires': string;
        'no-new-require': string;
        'no-path-concat': string;
        'no-process-env': string;
        'no-process-exit': string;
        'no-restricted-modules': string;
        'no-sync': string;
        'array-bracket-newline': string[];
        'array-bracket-spacing': (string | {
            singleValue: boolean;
            objectsInArrays: boolean;
            arraysInArrays: boolean;
        })[];
        'array-element-newline': string;
        'block-spacing': string[];
        'brace-style': (string | {
            allowSingleLine: boolean;
        })[];
        'capitalized-comments': string;
        'comma-dangle': string[];
        'comma-spacing': string;
        'comma-style': string[];
        'computed-property-spacing': string[];
        'consistent-this': string[];
        'eol-last': string[];
        'func-call-spacing': string[];
        'func-name-matching': string[];
        'func-names': string[];
        'func-style': string;
        'function-paren-newline': string[];
        'id-blacklist': string;
        'id-length': string;
        'id-match': string;
        indent: string;
        'jsx-quotes': string[];
        'key-spacing': (string | {
            beforeColon: boolean;
            afterColon: boolean;
            mode: string;
        })[];
        'keyword-spacing': string;
        'line-comment-position': string;
        'linebreak-style': string[];
        'lines-around-comment': string;
        'lines-between-class-members': (string | {
            exceptAfterSingleLine: boolean;
        })[];
        'max-depth': string;
        'max-len': string;
        'max-lines': string;
        'max-nested-callbacks': string;
        'max-params': string;
        'max-statements': string;
        'max-statements-per-line': (string | {
            max: number;
        })[];
        'multiline-comment-style': string;
        'multiline-ternary': string[];
        'new-cap': string;
        'new-parens': string;
        'newline-per-chained-call': (string | {
            ignoreChainWithDepth: number;
        })[];
        'no-array-constructor': string;
        'no-bitwise': string;
        'no-inline-comments': string;
        'no-lonely-if': string;
        'no-mixed-operators': string;
        'no-mixed-spaces-and-tabs': string[];
        'no-multi-assign': string;
        'no-multiple-empty-lines': string;
        'no-negated-condition': string;
        'no-nested-ternary': string;
        'no-new-object': string;
        'no-plusplus': string;
        'no-restricted-syntax': string;
        'no-tabs': string;
        'no-ternary': string;
        'no-trailing-spaces': string;
        'no-underscore-dangle': string;
        'no-unneeded-ternary': string;
        'no-whitespace-before-property': string;
        'nonblock-statement-body-position': string;
        'object-curly-newline': (string | {
            multiline: boolean;
            consistent: boolean;
        })[];
        'object-curly-spacing': string[];
        'object-property-newline': string;
        'one-var': string[];
        'one-var-declaration-per-line': string;
        'operator-assignment': string[];
        'operator-linebreak': (string | {
            overrides: {
                '+': string;
                '-': string;
            };
        })[];
        'padded-blocks': string;
        'padding-line-between-statements': string;
        'quote-props': (string | {
            keywords: boolean;
            unnecessary: boolean;
            numbers: boolean;
        })[];
        quotes: (string | {
            avoidEscape: boolean;
            allowTemplateLiterals: boolean;
        })[];
        'require-jsdoc': string;
        semi: string;
        'semi-spacing': (string | {
            before: boolean;
            after: boolean;
        })[];
        'semi-style': string[];
        'sort-keys': string;
        'sort-vars': string;
        'space-before-blocks': string[];
        'space-before-function-paren': (string | {
            anonymous: string;
            named: string;
            asyncArrow: string;
        })[];
        'space-in-parens': string[];
        'space-infix-ops': (string | {
            int32Hint: boolean;
        })[];
        'space-unary-ops': (string | {
            words: boolean;
            nonwords: boolean;
        })[];
        'spaced-comment': string[];
        'switch-colon-spacing': (string | {
            after: boolean;
            before: boolean;
        })[];
        'template-tag-spacing': string[];
        'unicode-bom': string[];
        'wrap-regex': string;
        'arrow-body-style': string[];
        'arrow-parens': (string | {
            requireForBlockBody: boolean;
        })[];
        'arrow-spacing': (string | {
            before: boolean;
            after: boolean;
        })[];
        'constructor-super': string;
        'generator-star-spacing': string[];
        'no-class-assign': string;
        'no-confusing-arrow': string;
        'no-const-assign': string;
        'no-dupe-class-members': string;
        'no-duplicate-imports': (string | {
            includeExports: boolean;
        })[];
        'no-new-symbol': string;
        'no-restricted-imports': string;
        'no-this-before-super': string;
        'no-useless-computed-key': string;
        'no-useless-constructor': string;
        'no-useless-rename': string;
        'no-var': string;
        'object-shorthand': string[];
        'prefer-arrow-callback': string;
        'prefer-const': (string | {
            destructuring: string;
        })[];
        'prefer-destructuring': (string | {
            VariableDeclarator: {
                array: boolean;
                object: boolean;
            };
            AssignmentExpression: {
                array: boolean;
                object: boolean;
            };
        })[];
        'prefer-numeric-literals': string;
        'prefer-rest-params': string;
        'prefer-spread': string;
        'prefer-template': string;
        'require-yield': string;
        'rest-spread-spacing': string[];
        'sort-imports': string;
        'symbol-description': string;
        'template-curly-spacing': string[];
        'yield-star-spacing': string[];
        '@typescript-eslint/no-invalid-void-type': string;
        '@typescript-eslint/dot-notation': (string | {
            allowKeywords: boolean;
            allowPattern: string;
            allowPrivateClassPropertyAccess: boolean;
        })[];
        '@typescript-eslint/keyword-spacing': (string | {
            before: boolean;
            after: boolean;
        })[];
        '@typescript-eslint/init-declarations': string;
        '@typescript-eslint/prefer-reduce-type-parameter': string;
        '@typescript-eslint/class-literal-property-style': string;
        '@typescript-eslint/no-base-to-string': string;
        '@typescript-eslint/switch-exhaustiveness-check': string;
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': string;
        '@typescript-eslint/no-dupe-class-members': string;
        '@typescript-eslint/prefer-as-const': string;
        '@typescript-eslint/comma-spacing': (string | {
            before: boolean;
            after: boolean;
        })[];
        '@typescript-eslint/no-extra-non-null-assertion': string;
        '@typescript-eslint/no-non-null-asserted-optional-chain': string;
        '@typescript-eslint/naming-convention': (string | {
            selector: string;
            format: string[];
            leadingUnderscore: string;
            trailingUnderscore: string;
            filter: {
                regex: string;
                match: boolean;
            };
            modifiers?: undefined;
        } | {
            selector: string;
            format: string[];
            leadingUnderscore: string;
            trailingUnderscore?: undefined;
            filter?: undefined;
            modifiers?: undefined;
        } | {
            selector: string;
            modifiers: string[];
            format: string[];
            leadingUnderscore?: undefined;
            trailingUnderscore?: undefined;
            filter?: undefined;
        } | {
            selector: string;
            format: string[];
            leadingUnderscore?: undefined;
            trailingUnderscore?: undefined;
            filter?: undefined;
            modifiers?: undefined;
        })[];
        '@typescript-eslint/default-param-last': string;
        '@typescript-eslint/no-extra-semi': string;
        '@typescript-eslint/no-throw-literal': string;
        '@typescript-eslint/no-implied-eval': string;
        '@typescript-eslint/no-invalid-this': string;
        '@typescript-eslint/adjacent-overload-signatures': string;
        '@typescript-eslint/array-type': string;
        '@typescript-eslint/await-thenable': string;
        '@typescript-eslint/explicit-member-accessibility': string;
        '@typescript-eslint/indent': string;
        '@typescript-eslint/member-ordering': (string | {
            default: string[];
        })[];
        '@typescript-eslint/require-await': string;
        '@typescript-eslint/no-floating-promises': string;
        '@typescript-eslint/unbound-method': string;
        '@typescript-eslint/prefer-includes': string;
        '@typescript-eslint/prefer-string-starts-ends-with': string;
        '@typescript-eslint/prefer-for-of': string;
        '@typescript-eslint/no-unnecessary-qualifier': string;
        '@typescript-eslint/no-empty-interface': string;
        '@typescript-eslint/no-extraneous-class': string;
        '@typescript-eslint/no-for-in-array': string;
        '@typescript-eslint/no-unused-vars': string;
        '@typescript-eslint/no-misused-new': string;
        '@typescript-eslint/no-non-null-assertion': string;
        '@typescript-eslint/no-useless-constructor': string;
        '@typescript-eslint/no-var-requires': string;
        '@typescript-eslint/consistent-type-definitions': string;
        '@typescript-eslint/promise-function-async': string;
        '@typescript-eslint/restrict-plus-operands': string;
        '@typescript-eslint/type-annotation-spacing': string;
        '@typescript-eslint/unified-signatures': string;
        '@typescript-eslint/no-explicit-any': string;
        '@typescript-eslint/no-use-before-define': (string | {
            typedefs: boolean;
            functions: boolean;
        })[];
        '@typescript-eslint/member-delimiter-style': (string | {
            multiline: {
                delimiter: string;
                requireLast: boolean;
            };
            singleline: {
                delimiter: string;
                requireLast: boolean;
            };
        })[];
        '@typescript-eslint/no-extra-parens': string;
        '@typescript-eslint/explicit-function-return-type': string;
        '@typescript-eslint/semi': string;
        '@typescript-eslint/no-unsafe-member-access': string;
        '@typescript-eslint/no-unsafe-call': string;
        '@typescript-eslint/explicit-module-boundary-types': string;
        '@typescript-eslint/no-unsafe-assignment': string;
        '@typescript-eslint/no-unsafe-return': string;
        '@typescript-eslint/ban-ts-comment': (string | {
            'ts-expect-error': string;
            'ts-ignore': string;
            'ts-nocheck': boolean;
            'ts-check': boolean;
            minimumDescriptionLength: number;
        })[];
    };
};
export default config;
//# sourceMappingURL=index.d.ts.map