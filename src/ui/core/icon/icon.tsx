import { Svg } from './styles'
import { IconProps } from './types'

export default function Icon({
	size = 16,
	children,
}: React.PropsWithChildren<IconProps>) {
	return (
		<Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
			{children}
		</Svg>
	)
}
