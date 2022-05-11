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
		paths,
	}
}

export default getSvgProps
