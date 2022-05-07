import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StoryBookControl } from '../../helpers'

import Block from './block'

export default {
	title: 'Atoms/Block',
	component: Block,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		children: StoryBookControl.Text(),
		textAlign: StoryBookControl.SelectWithNone(['left', 'center', 'right']),
		display: StoryBookControl.Select([
			'block',
			'flex',
			'grid',
			'inline',
			'inline-block',
			'inline-flex',
			'none',
		]),
		flexDirection: StoryBookControl.SelectWithNone(['row', 'column']),
		alignItems: StoryBookControl.Select([
			'flex-start',
			'center',
			'flex-end',
			'baseline',
			'stretch',
		]),
		flexWrap: StoryBookControl.Select(['nowrap', 'wrap']),
		justifyContent: StoryBookControl.SelectWithNone([
			'center',
			'flex-end',
			'flex-start',
			'space-around',
			'space-between',
			'space-evenly',
		]),
		fontSize: StoryBookControl.Text(),
		fontWeight: StoryBookControl.Select(['normal', 'medium', 'bold']),
		letterSpacing: StoryBookControl.Text(),
		lineHeight: StoryBookControl.Text(),
		color: StoryBookControl.Color(),

		gridAutoFlow: StoryBookControl.Select([
			'row',
			'column',
			'dense',
			'row dense',
			'column-dense',
		]),
		gap: StoryBookControl.Text(),
		rowGap: StoryBookControl.Text(),
		columnGap: StoryBookControl.Text(),
		gridTemplateColumns: StoryBookControl.Text(),
		...StoryBookControl.ReusableBlock(),
	},
} as ComponentMeta<typeof Block>

const Template: ComponentStory<typeof Block> = ({
	children,
	...props
}: any) => <Block {...props}>{children}</Block>

export const Default = Template.bind({})
Default.args = {}
