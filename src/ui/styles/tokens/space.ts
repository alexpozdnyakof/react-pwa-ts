enum Space {
	xxsmall = 'xxsmall',
	xsmall = 'xsmall',
	small = 'small',
	micro = 'micro',
	medium = 'medium',
	large = 'large',
	xlarge = 'xlarge',
	xxlarge = 'xxlarge',
	xxxlarge = 'xxxlarge',
}

type SpaceMap = Record<Space, string>

const space: SpaceMap = {
	[Space.xxsmall]: '2px',
	[Space.xsmall]: '4px',
	[Space.micro]: '6px',
	[Space.small]: '8px',
	[Space.medium]: '12px',
	[Space.large]: '16px',
	[Space.xlarge]: '24px',
	[Space.xxlarge]: '32px',
	[Space.xxxlarge]: '36px',
}

export default space
export { Space }
export type { SpaceMap }
