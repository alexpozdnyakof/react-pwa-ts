enum LineHeight {
	small = 'small',
	medium = 'medium',
	large = 'large',
	xlarge = 'xlarge',
	xxlarge = 'xxlarge',
}

type LineHeightMap = Record<LineHeight, string>

const lineHeight: LineHeightMap = {
	[LineHeight.small]: '14px',
	[LineHeight.medium]: '16px',
	[LineHeight.large]: '20px',
	[LineHeight.xlarge]: '24px',
	[LineHeight.xxlarge]: '28px',
}

export default lineHeight
export type { LineHeightMap }
export { LineHeight }
