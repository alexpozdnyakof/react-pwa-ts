enum BorderRadius {
	small = 'small',
	medium = 'medium',
	large = 'large',
}

type BorderRadiusMap = Record<BorderRadius, string>

const borderRadius: BorderRadiusMap = {
	[BorderRadius.small]: '3px',
	[BorderRadius.medium]: '4px',
	[BorderRadius.large]: '6px',
}

export default borderRadius
export { BorderRadius }
export type { BorderRadiusMap }
