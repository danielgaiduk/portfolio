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
	type SelectedLanguage = { language: string; rating: number }
	type Temporal = [number, 'day' | 'month' | 'year']
	type ImgProps = { src: string; w: number }
	type ImgPropsH = ImgProps & { h: number }
	type ImgMeta = { img: ImgPropsH; sources: { [key: string]: ImgProps[] } }
}

export {}
