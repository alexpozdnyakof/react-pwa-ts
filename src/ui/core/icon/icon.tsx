import { Color, Size } from '../../styles'
import { Svg } from './styled-components'

export interface IconProps {
	size?: Size.normal | Size.medium | Size.xlarge
	fill?: Color
	stroke?: Color
	viewBox?: string
}

export default function Icon({
	size = Size.medium,
	children,
	viewBox,
	...props
}: React.PropsWithChildren<IconProps>) {
	return (
		<Svg width={size} height={size} {...props} viewBox={viewBox}>
			{children}
		</Svg>
	)
}
