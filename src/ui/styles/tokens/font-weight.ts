enum FontWeight {
	normal = 'normal',
	semibold = 'semibold',
	bold = 'bold',
}
type FontWeightMap = Record<FontWeight, number>

const fontWeight: FontWeightMap = {
	[FontWeight.normal]: 400,
	[FontWeight.semibold]: 600,
	[FontWeight.bold]: 700,
}

export default fontWeight

export { FontWeight }
export type { FontWeightMap }
