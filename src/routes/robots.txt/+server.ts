export const prerender = true

export async function GET({ url }): Promise<Response> {
	const body = ['User-agent: *', 'Allow: /', `Sitemap: ${url.origin}/sitemap.xml`]
	const headers = { 'Content-Type': 'text/plain' }

	return new Response(body.join('\n').trim(), { headers })
}
