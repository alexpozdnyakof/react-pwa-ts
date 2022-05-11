import { getHTMLElement } from '../../helpers'
import Icon from './icon'
import { ICONS_LIB, ICON_SIZE } from './lib'
import { IconProps } from './types'

const renderIcon = (props: IconProps) => getHTMLElement<IconProps>(Icon, props)

describe('Icon Component', () => {
	it('should render correctly', () => {
		const result = renderIcon({ icon: 'check' })

		expect(result.innerHTML).toBe(`<path d="${ICONS_LIB.check[0]}"></path>`)
	})

	it('should set size', () => {
		const result = renderIcon({ size: 'small', icon: 'check' })

		expect(result).toHaveStyle({
			width: `${ICON_SIZE.small}px`,
			height: `${ICON_SIZE.small}px`,
			maxWidth: `${ICON_SIZE.small}px`,
			maxHeight: `${ICON_SIZE.small}px`,
		})
	})

	it('should set color', () => {
		const result = renderIcon({ tone: 'current', icon: 'check' })

		expect(result).toHaveStyle({
			color: 'currentColor',
		})
	})
})
