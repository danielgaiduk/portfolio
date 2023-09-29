import { loadTranslations } from '$lib/translations'
import type { LayoutLoad } from './$types'

export const load = (async ({ data: { locale, characteristics } }) => {
	await loadTranslations(locale)

	return { locale, title: 'app.title', description: 'app.description', characteristics }
}) satisfies LayoutLoad
