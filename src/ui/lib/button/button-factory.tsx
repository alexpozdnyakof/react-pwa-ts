import { ReusableBlockProps } from '../block'
import BaseButton, { BaseButtonProps } from './base-button'
import FilledButton from './v-filled'
import LinkButton from './v-link'
import OutlineButton from './v-outline'

interface Props {
	variant: 'outline' | 'link' | 'filled'
}

export default function ButtonFactory({
	children,
	variant = 'outline',
	...props
}: Partial<BaseButtonProps> & Partial<ReusableBlockProps> & Partial<Props>) {
	const variantMap: Record<Props['variant'], typeof BaseButton> = {
		outline: OutlineButton,
		link: LinkButton,
		filled: FilledButton,
	}
	const SelectedButton = variantMap[variant]

	return <SelectedButton {...props}>{children}</SelectedButton>
}

export type { Props as ButtonFactoryProps }
