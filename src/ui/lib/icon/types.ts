import { ReusableBlockProps } from '../block'
import { ICONS_LIB, ICON_SIZE } from './lib'

export type IconProps = { icon: keyof typeof ICONS_LIB } & Partial<{
	size: keyof typeof ICON_SIZE
	tone: 'action' | 'white' | 'black' | 'current' | 'caption'
	testId: string
}> &
	Partial<ReusableBlockProps>
