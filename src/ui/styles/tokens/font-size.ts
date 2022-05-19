enum FontSize {
	small = 'small',
	medium = 'medium',
	large = 'large',
	xlarge = 'xlarge',
	xxlarge = 'xxlarge',
}

type FontSizeMap = Record<FontSize, string>

const fontSize: FontSizeMap = {
	[FontSize.small]: '12px',
	[FontSize.medium]: '14px',
	[FontSize.large]: '16px',
	[FontSize.xlarge]: '18px',
	[FontSize.xxlarge]: '24px',
}

export default fontSize
export type { FontSizeMap }
export { FontSize }
