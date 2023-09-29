import { PUBLIC_ORIGIN } from '$env/static/public'

export const prerender = true

export async function GET(): Promise<Response> {
	const body = ['User-agent: *', 'Allow: /', '', `Sitemap: ${PUBLIC_ORIGIN}/sitemap.xml`]
		.join('\n')
		.trim()

	const headers = {
		'Content-Type': 'text/plain'
	}

	return new Response(body, { headers })
}
