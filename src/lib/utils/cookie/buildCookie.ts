import { KEBAB_APP_NAME } from '$lib/constants'

export default function (
	name: string,
	value: string,
	date: Date = new Date(),
	months: number = 12
): string {
	let cookie = `${KEBAB_APP_NAME}_${name}=${value};`

	date.setMonth(date.getMonth() + months)

	cookie += `path=/;`
	cookie += `secure=true;`
	cookie += `sameSite=strict;`
	cookie += `httpOnly=true;`
	cookie += `expires=${date.toUTCString()};`

	return cookie
}
