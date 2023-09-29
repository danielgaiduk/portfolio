import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				'fly-up': 'fly-up 1s forwards 500ms',
				'fly-up-headline': 'fly-up-headline 1s forwards 500ms',
				'wide-in': 'wide-in 750ms forwards'
			},
			colors: {
				primary: {
					darker: '#171717',
					dark: 'rgba(32, 31, 31, 1)',
					highlight: '#618EF4',
					normal: '#878787'
				}
			},
			fontFamily: {
				shapiro: ['Shapiro', ...defaultTheme.fontFamily.sans],
				switzer: ['Switzer', ...defaultTheme.fontFamily.sans]
			},
			keyframes: {
				'fly-up': {
					'0%': { transform: 'translatey(100%)' },
					'100%': { transform: 'translatey(0)' }
				},
				'fly-up-headline': {
					'0%': { transform: 'translatey(100%)' },
					'100%': { transform: 'translatey(10%)' }
				},
				'wide-in': {
					'0%': { width: '100%' },
					'100%': { width: '0' }
				}
			}
		}
	},
	plugins: []
}
