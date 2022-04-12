function getAlign(align: string) {
	const alignsMap = {
		left: 'flex-start',
		center: 'center',
		right: 'flex-end',
	}
	const defaultAlign = alignsMap.left

	if (!align) return defaultAlign

	return null
}

export { getAlign }
