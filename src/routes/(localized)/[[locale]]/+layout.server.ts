import type { LayoutServerLoad } from './$types'

export const load = (async ({ locals: { locale, characteristics } }) => {
	return { locale, characteristics }
}) satisfies LayoutServerLoad
