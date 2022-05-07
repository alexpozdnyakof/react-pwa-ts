type ControlBoxShadow = Record<'default' | 'action', string>

const getBoxShadow = (
	shade: Record<'100' | '200' | '300' | '400' | '500', string>
) =>
	[
		`-1px 0 0 1px ${shade['100']}`,
		`-1px -1px 0 1px ${shade['200']}`,
		`-1px 1px 0 1px ${shade['200']}`,
		`0 -1px 0 1px ${shade['300']}`,
		`0 1px 0 1px ${shade['300']}`,
		`1px -1px 0 1px ${shade['400']}`,
		`1px 1px 0 1px ${shade['400']}`,
		`1px 0 0 1px ${shade['500']}`,
	].join(',')

const greenShade = {
	'100': 'rgba(174, 234, 200, 0.75)',
	'200': 'rgba(141, 226, 178, 0.25)',
	'300': 'rgba(93, 213, 145, 0.5)',
	'400': 'rgba(40, 246, 129, 0.25)',
	'500': 'rgba(9, 227, 103, 0.75)',
}

const blackShade = {
	'100': 'rgba(175, 177, 189, 0.75)',
	'200': 'rgba(199, 200, 209, 0.25)',
	'300': 'rgba(199, 201, 209, 0.5)',
	'400': 'rgba(221, 223, 227, 0.25)',
	'500': 'rgba(244, 244, 246, 0.75)',
}

const getControlBoxShadow = () => ({
	default: getBoxShadow(blackShade),
	action: getBoxShadow(greenShade),
})

export type { ControlBoxShadow }
export default getControlBoxShadow
