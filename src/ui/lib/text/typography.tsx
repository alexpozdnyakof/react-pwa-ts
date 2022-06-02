import Text, { TextProps } from './text'

interface Props {
	variant: 'page-title' | 'list-title' | 'caption' | 'todo-title' | 'label'
}

export default function Typography({
	variant,
	children,
}: Props & React.PropsWithChildren<{}>) {
	const styles: Record<Props['variant'], TextProps> = {
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
			line: 32,
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
		label: {
			as: 'label',
			size: 'body',
			line: 20,
			spacing: -0.01,
		},
	}

	const variantStyle = styles[variant]

	return <Text {...variantStyle}>{children}</Text>
}
