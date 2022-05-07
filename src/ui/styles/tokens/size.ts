enum Size {
	small = 'small',
	medium = 'medium',
	xmedium = 'xmedium',
	large = 'large',
	xlarge = 'xlarge',
	xxlarge = 'xxlarge',
}

type SizeMap = Record<Size, string>

const size: SizeMap = {
	[Size.small]: '16px',
	[Size.xmedium]: '18px',
	[Size.medium]: '20px',
	[Size.large]: '24px',
	[Size.xlarge]: '28px',
	[Size.xxlarge]: '32px',
}

export { Size }
export default size
export type { SizeMap }
