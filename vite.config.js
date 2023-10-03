import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfigExport} */
export default defineConfig({
	plugins: [sveltekit()]
})
