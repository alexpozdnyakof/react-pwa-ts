import { Align } from '../../styles/types'

function getAlign(align: Align | undefined): Align[keyof Align] {
	const alignsMap = {
		[Align.left]: 'flex-start',
		[Align.center]: 'center',
		[Align.right]: 'flex-end',
	}
	const defaultAlign = alignsMap[Align.left]

	if (!align) return defaultAlign

	return alignsMap[align]
}

export { getAlign }
