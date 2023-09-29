export default function (phone_number: string): string {
	return phone_number.replace(/\s/g, '').replace(/-/g, '')
}
