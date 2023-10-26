import * as sitemap from 'super-sitemap'
import type { RequestHandler } from '@sveltejs/kit'
import { LOCALES } from '$lib/constants'

export const prerender = true

export const GET: RequestHandler = async ({ url }) => {
	return await sitemap.response({
		origin: url.origin,
		excludePatterns: ['/404/'],
		paramValues: {
			'/[[locale]]': LOCALES,
			'/[[locale]]/imprint': LOCALES,
			'/[[locale]]/privacy': LOCALES
		}
	})
}
