/* eslint-disable react/prop-types */
import { Svg } from '../svg'
import getSvgProps from './get-svg-props'
import { IconProps } from './types'

export default function Icon({
	size = 'medium',
	testId,
	icon,
	tone = 'current',
}: IconProps) {
	const { paths, ...svgProps } = getSvgProps({ size, icon, tone })
	return (
		<Svg testId={testId} {...svgProps}>
			{paths.map(({ path, key }: { path: string; key: string }) => (
				<path
					d={path}
					key={key}
					fill='currentColor'
					color='currentColor'
				/>
			))}
		</Svg>
	)
}
