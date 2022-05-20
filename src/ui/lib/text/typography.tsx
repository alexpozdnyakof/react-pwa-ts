import Text, { TextProps } from './text'

type TypographyProps = React.PropsWithChildren<{
	variant: 'page-title' | 'list-title' | 'caption' | 'todo-title'
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
		'list-title': {
			size: 'large',
			tone: 'action',
			spacing: -0.03,
			line: 24,
			weight: 'bold',
		},
		'page-title': {
			size: 'huge',
			spacing: -0.03,
			line: 32,
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
