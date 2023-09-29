export default function <T>(elements: T[]) {
	const randomIndex = Math.floor(Math.random() * elements.length)
	const item = elements[randomIndex]

	return item
}
