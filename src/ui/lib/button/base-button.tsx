import { Block, BlockProps, ReusableBlockProps } from '../block'

interface Props {
	testId: string
	children: string
	size: 'medium' | 'large'
	shape: 'rounded' | 'circular'
	type: 'button' | 'submit' | 'reset'
	stretched: boolean
	onClick: <T>(e?: React.MouseEvent<T>) => void
}

export default function BaseButton({
	testId,
	children,
	onClick,
	size = 'medium',
	shape = 'rounded',
	stretched = false,
	color = 'action',
	type,
	...blockProps
}: Partial<Props> & Partial<ReusableBlockProps>) {
	const shapesMap: Record<Props['shape'], Partial<BlockProps>> = {
		rounded: { radius: 6 },
		circular: { radius: 12 },
	}

	const sizeMap: Record<Props['size'], Partial<BlockProps>> = {
		medium: {
			height: 28,
		},
		large: {
			height: 40,
		},
	}

	const styles = {
		fontWeight: 'bold' as 'bold',
		lineHeight: 24,
		letterSpacing: -0.01,
		display: 'block' as 'block',
		width: stretched ? { value: 100, unit: 'pct' } : 'max-content',
		textAlign: 'center',
		fontSize: 'body',
		transition: 'all ease 200ms',
		color,
		...sizeMap[size],
		...shapesMap[shape],
		...blockProps,
	} as Partial<BlockProps>

	return (
		<Block
			as='button'
			testId={testId}
			type={type}
			{...styles}
			onClick={onClick}
		>
			{children}
		</Block>
	)
}

export type { Props as BaseButtonProps }
