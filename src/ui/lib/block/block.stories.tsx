import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { StoryBookControl } from '../../helpers'
import Block from './block'
import { BlockProps } from './types'

export default {
	title: 'Lib/Block',
	component: Block,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		children: StoryBookControl.Text(),
		width: StoryBookControl.Number(),
		height: StoryBookControl.Number(),
		backgroundColor: StoryBookControl.SelectColorToken(),
		borderColor: StoryBookControl.SelectColorToken(),
		color: StoryBookControl.SelectColorToken(),
		borderRadius: StoryBookControl.Number(),
		borderWidth: StoryBookControl.Number(),
		borderStyle: StoryBookControl.Select(['dashed', 'solid']),
	},
} as ComponentMeta<typeof Block>

const Template: ComponentStory<typeof Block> = ({
	children,
	...props
}: React.PropsWithChildren<Partial<BlockProps>>) => (
	<Block {...props}>{children}</Block>
)

export const Default = Template.bind({})

Default.args = {
	children: 'Block',
}
