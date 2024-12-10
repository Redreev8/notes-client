import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import createSvgSpritePlugin from 'vite-plugin-svg-sprite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '')
	return {
		plugins: [
			react(),
			createSvgSpritePlugin({
				symbolId: '[name]',
				include: ['**/icons/**.svg', '**/icons/sections/**.svg'],
			}),
		],
		define: {
			'process.env.USER__TOKEN': JSON.stringify(env.USER__TOKEN),
		},
	}
})
