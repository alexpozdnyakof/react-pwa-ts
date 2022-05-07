import { AnimationParams } from './animation'
import borderRadius, { BorderRadiusMap, BorderRadius } from './border-radius'
import { Color } from './colors'
import fontSize, { FontSizeMap, FontSize } from './font-size'
import fontWeight, { FontWeightMap } from './font-weight'
import lineHeight, { LineHeightMap, LineHeight } from './line-height'
import size, { SizeMap, Size } from './size'
import space, { SpaceMap, Space } from './space'
import boxShadow, { BoxShadow } from './box-shadow'

enum Kind {
	primary = 'primary',
	secondary = 'secondary',
	tertiary = 'tertiary',
}
interface BaseTheme {
	fontSize: FontSizeMap
	fontWeight: FontWeightMap
	space: SpaceMap
	borderRadius: BorderRadiusMap
	lineHeight: LineHeightMap
	size: SizeMap
	boxShadow: Record<BoxShadow, string>
	animation: typeof AnimationParams
}

export default function createBaseTheme(): BaseTheme {
	return Object.assign(
		Object.create(null),
		{ fontSize },
		{ fontWeight },
		{ lineHeight },
		{ borderRadius },
		{ size },
		{ space },
		{ boxShadow },
		{ animation: AnimationParams }
	)
}

export {
	Color,
	Kind,
	FontSize,
	Space,
	BorderRadius,
	LineHeight,
	Size,
	AnimationParams,
}
export type { BaseTheme }
