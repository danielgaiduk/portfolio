import { toKebabCase } from '$lib/utils'

export const APP_NAME = 'Daniel Gaiduk Portfolio'
export const AUTHOR_NAME = 'Daniel Gaiduk'
export const DEFAULT_LOCALE = 'de'
export const EMAIL = 'daniel@gaiduk.dev'
export const LOADERS = [
	'aboutme',
	'app',
	'error',
	'footer',
	'imprint',
	'navbar',
	'privacy',
	'resume',
	'start',
	'techstack'
]
export const LOCALES = ['en', 'de']
export const PHONE_NUMBER = '+49 175 8606312'

export const KEBAB_APP_NAME = toKebabCase(APP_NAME)
export const LOCALE_COOKIE_NAME = `${KEBAB_APP_NAME}_locale`
