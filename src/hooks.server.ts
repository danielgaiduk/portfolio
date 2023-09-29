import { PUBLIC_SENTRY_DSN } from '$env/static/public'
import { sequence } from '@sveltejs/kit/hooks'
import { dev } from '$app/environment'
import * as Sentry from '@sentry/sveltekit'
import {
	buildCookie,
	buildLocalizedUrl,
	getLocaleFromRequest,
	isLocaleAvailable,
	log,
	parseCookie,
	redirect,
	replaceHtmlFragments
} from '$lib/utils'
import type { Handle } from '@sveltejs/kit'

Sentry.init({
	enabled: !dev,
	dsn: PUBLIC_SENTRY_DSN,
	tracesSampleRate: 1
})

export const handle = sequence(Sentry.sentryHandle(), (async ({ event, resolve }) => {
	log('SERVER HOOK CALLED')

	const { params, request, route, url } = event
	const { locale = '' } = params
	const { id } = route

	if (id && !id?.includes('(localized)')) {
		return resolve(event)
	}

	const cookie = parseCookie(request)

	if (!id) {
		const locale = getLocaleFromRequest(cookie, request)

		return redirect(`/${locale}/404`)
	}

	if (!isLocaleAvailable(locale)) {
		const location = buildLocalizedUrl(cookie, request, url)

		if (location) return redirect(location)
	}
	try {
		const { characteristics } = await import(`./lib/translations/${locale}/aboutme.json`)

		event.locals.characteristics = characteristics
	} catch (_) {
		//do nothing
	}

	event.locals.locale = locale

	const response = await resolve(
		event,
		replaceHtmlFragments({
			'%lang%': locale
		})
	)

	response.headers.append('set-cookie', buildCookie('locale', locale))

	return response
}) satisfies Handle)

export const handleError = Sentry.handleErrorWithSentry()
