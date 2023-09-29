import * as Sentry from '@sentry/sveltekit'
import { dev } from '$app/environment'

import { PUBLIC_SENTRY_DSN } from '$env/static/public'

Sentry.init({
	enabled: !dev,
	dsn: PUBLIC_SENTRY_DSN,
	tracesSampleRate: 1,
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1,
	integrations: [new Sentry.Replay()]
})

export const handleError = Sentry.handleErrorWithSentry()
