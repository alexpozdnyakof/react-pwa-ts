/* eslint-disable react/prop-types */
import { Svg } from '../svg'
import getSvgProps from './get-svg-props'
import { IconProps } from './types'

export default function Icon({
	size = 'medium',
	testId = 'icon',
	icon,
	tone = 'current',
	opacity,
}: IconProps) {
	const { paths, ...svgProps } = getSvgProps({ size, icon, tone })
	return (
		<Svg testId={testId} {...svgProps} opacity={opacity}>
			{paths.map(({ path, key }: { path: string; key: string }) => (
				<path
					d={path}
					key={key}
					fill='currentColor'
					stroke='currentColor'
				/>
			))}
		</Svg>
	)
}
