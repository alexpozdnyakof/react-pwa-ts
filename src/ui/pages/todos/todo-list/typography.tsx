import { Text, TextProps } from '../../../lib/text'

type TypographyProps = React.PropsWithChildren<{
	variant: 'title' | 'caption' | 'todo-title'
}>

export default function Typography({ variant, children }: TypographyProps) {
	const styles = {
		caption: {
			size: 'small',
			tone: 'caption',
			weight: 'semibold',
			line: 16,
			spacing: -0.03,
		},
		title: {
			size: 'large',
			tone: 'action',
			spacing: -0.03,
			line: 24,
			weight: 'bold',
		},
		'todo-title': {
			size: 'medium',
			line: 24,
			spacing: -0.01,
			ml: 8,
		},
	}[variant] as TextProps

	return <Text {...styles}>{children}</Text>
}
