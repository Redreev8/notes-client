# React + TypeScript + Vite + Tallwind

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import createSvgSpritePlugin from 'vite-plugin-svg-sprite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		createSvgSpritePlugin({
			symbolId: '[name]',
			include: ['**/icons/**.svg', '**/icons/sections/**.svg'],
		}),
	],
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import eslintConfigPrettier from 'eslint-config-prettier'
import tailwindcss from 'eslint-plugin-tailwindcss'

export default [
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	...tailwindcss.configs['flat/recommended'],
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
```
