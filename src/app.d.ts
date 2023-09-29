declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			locale: string
			characteristics: string[]
		}
		interface PageData {
			description: string
			title: string
		}
		// interface Platform {}
	}
	type AlternateLinks = { href: string; hreflang: string }
	type Cookie = Record<string, string>
	type SelectedLanguage = { language: string; rating: number }
	type Temporal = [number, 'day' | 'month' | 'year']
}

export {}
