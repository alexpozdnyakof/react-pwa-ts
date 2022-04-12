export default function getType(x: unknown): string {
	const leftUnusedTextLength = 8
	const rightUnusedTextLength = -1

	return Object.prototype.toString
		.call(x)
		.slice(leftUnusedTextLength, rightUnusedTextLength)
}
