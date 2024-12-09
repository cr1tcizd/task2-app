import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
	plugins: [svgr(), react()],
	// base: '/task2-app',
	resolve: {
		alias: {
			app: path.resolve(__dirname, 'src/app'),
			shared: path.resolve(__dirname, 'src/shared'),
			pages: path.resolve(__dirname, 'src/pages'),
			widget: path.resolve(__dirname, 'src/widget'),
		},
	},
})
