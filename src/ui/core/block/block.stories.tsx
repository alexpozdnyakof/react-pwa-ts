import { ComponentMeta, ComponentStory } from '@storybook/react'
import Block from './block'

const textControl = () => ({
	control: 'text',
})
const colorControl = () => ({
	control: 'color',
})

const selectControl = (
	options: Array<string | number>,
	mapping?: Record<string, any>
) => ({
	control: 'select',
	options,
	mapping,
})

const selectControlWithNone = (options: Array<string>) =>
	selectControl(['none', ...options], { none: undefined })

export default {
	title: 'Core/Block',
	component: Block,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		width: textControl(),
		height: textControl(),
		children: textControl(),
		textAlign: selectControlWithNone(['left', 'center', 'right']),
		backgroundColor: colorControl(),
		display: selectControl([
			'block',
			'flex',
			'grid',
			'inline',
			'inline-block',
			'inline-flex',
			'none',
		]),
		flexDirection: selectControlWithNone(['row', 'column']),
		alignItems: selectControl([
			'flex-start',
			'center',
			'flex-end',
			'baseline',
			'stretch',
		]),
		flexWrap: selectControl(['nowrap', 'wrap']),
		justifyContent: selectControlWithNone([
			'center',
			'flex-end',
			'flex-start',
			'space-around',
			'space-between',
			'space-evenly',
		]),
		fontSize: textControl(),
		fontWeight: selectControl(['normal', 'medium', 'bold']),
		letterSpacing: textControl(),
		lineHeight: textControl(),
		color: colorControl(),

		gridAutoFlow: selectControl([
			'row',
			'column',
			'dense',
			'row dense',
			'column-dense',
		]),
		gap: textControl(),
		rowGap: textControl(),
		columnGap: textControl(),
		gridTemplateColumns: textControl(),
	},
} as ComponentMeta<typeof Block>

const Template: ComponentStory<typeof Block> = ({
	children,
	...props
}: any) => <Block {...props}>{children}</Block>

export const Default = Template.bind({})
Default.args = {}
