import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import eslintConfigPrettier from 'eslint-config-prettier'
import tailwindcss from 'eslint-plugin-tailwindcss'

export default [
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...tailwindcss.configs['flat/recommended'],
	pluginReact.configs.flat.recommended,
	{
		"settings": {
		  "react": {
			"version": "detect"
		  }
		}
	},
	{
		files: ['src/**/*.{ts,tsx}'],
		rules: {
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'react/jsx-props-no-spreading': 'off',
			'no-console': 'error',
			'@typescript-eslint/no-unused-vars': 'off',
		},
	},
	{
		ignores: [
			'tailwind.config.js',
			'vite.config.ts',
			'eslint.config.js',
			'vite.config.ts.timestamp-*.mjs',
			'node_modules',
		],
	},
	{
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: {
				...globals.browser,
			},
			parserOptions: {
				project: ['./tsconfig.app.json'],
			},
		},
	},
	eslintConfigPrettier,
]
