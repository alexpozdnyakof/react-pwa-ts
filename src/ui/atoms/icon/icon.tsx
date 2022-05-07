import { Color, Size } from '../../styles'
import { Svg } from './styled-components'

export interface IconProps {
	size: Size.small | Size.medium | Size.large
	fill: Color | 'transparent'
	stroke: Color | 'transparent'
	viewBox: string
}

export default function Icon({
	size = Size.medium,
	children,
	viewBox,
	...props
}: React.PropsWithChildren<Partial<IconProps>>) {
	return (
		<Svg width={size} height={size} {...props} viewBox={viewBox}>
			{children}
		</Svg>
	)
}
