import { ICON_SIZE, ICONS_LIB } from './lib'
import { IconProps } from './types'

const getSvgProps = ({ size, tone, icon }: Omit<IconProps, 'testId'>) => {
	const iconSize = ICON_SIZE[size!]

	const paths = ICONS_LIB[icon].map((path, i) => ({
		path,
		key: icon.concat('icon').concat(i.toString()),
	}))

	return {
		width: iconSize,
		maxWidth: iconSize,
		height: iconSize,
		maxHeight: iconSize,
		color: tone,
		transition: 'box-shadow ease 200ms ,background-color ease 200ms',
		paths,
	}
}

export default getSvgProps
