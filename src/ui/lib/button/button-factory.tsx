import { ReusableBlockProps } from '../block'
import BaseButton, { BaseButtonProps } from './base-button'
import LinkButton from './button-link'
import OutlineButton from './button-outline'

interface Props {
	variant: 'outline' | 'link'
}

export default function ButtonFactory({
	children,
	variant = 'outline',
	...props
}: Partial<BaseButtonProps> & Partial<ReusableBlockProps> & Partial<Props>) {
	const variantMap: Record<Props['variant'], typeof BaseButton> = {
		outline: OutlineButton,
		link: LinkButton,
	}
	const SelectedButton = variantMap[variant]

	return <SelectedButton {...props}>{children}</SelectedButton>
}

export type { Props as ButtonFactoryProps }
