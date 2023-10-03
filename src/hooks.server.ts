import { LOCALE_COOKIE_NAME } from '$lib/constants'
import {
	buildLocalizedUrl,
	getLocaleFromRequest,
	isLocaleAvailable,
	log,
	redirect,
	replaceHtmlFragments
} from '$lib/utils'
import type { Handle } from '@sveltejs/kit'

export const handle = (async ({ event, resolve }) => {
	log('SERVER HOOK CALLED')

	const { params, request, route, url, cookies } = event
	const { locale = '' } = params
	const { id } = route

	if (id && !id?.includes('(localized)')) {
		return resolve(event)
	}

	if (!id) {
		const locale = getLocaleFromRequest(cookies, request)

		return redirect(`/${locale}/404`)
	}

	if (!isLocaleAvailable(locale)) {
		const location = buildLocalizedUrl(cookies, request, url)

		if (location) return redirect(location)
	}

	try {
		const { characteristics } = await import(`./lib/translations/${locale}/aboutme.json`)

		event.locals.characteristics = characteristics
	} catch (_) {
		//do nothing
	}

	cookies.set(LOCALE_COOKIE_NAME, locale, { path: '/' })
	event.locals.locale = locale

	return await resolve(
		event,
		replaceHtmlFragments({
			'%lang%': locale
		})
	)
}) satisfies Handle
