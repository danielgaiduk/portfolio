import { defineConfig } from 'vitest/config'
import { imagetools } from 'vite-imagetools'
import { sentrySvelteKit } from '@sentry/sveltekit'
import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('vitest/config').UserConfigExport} */
export default defineConfig({
	plugins: [
		sentrySvelteKit({
			sourceMapsUploadOptions: {
				org: 'daniel-gaiduk',
				project: 'portfolio'
			}
		}),
		sveltekit(),
		imagetools()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
})
