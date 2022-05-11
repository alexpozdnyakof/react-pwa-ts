import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { StoryBookControl } from '../../helpers'
import { TEXT_SIZE_KEYS } from '../../theme'
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
		...StoryBookControl.ReusableBlock(),
		backgroundColor: StoryBookControl.SelectColorToken(),
		borderColor: StoryBookControl.SelectColorToken(),
		color: StoryBookControl.SelectColorToken(),
		radius: StoryBookControl.Number(),
		borderWidth: StoryBookControl.Number(),
		borderStyle: StoryBookControl.Select(['dashed', 'solid']),

		fontSize: StoryBookControl.Select(TEXT_SIZE_KEYS),
		fontWeight: StoryBookControl.Select(['normal', 'semibold', 'bold']),
		lineHeight: StoryBookControl.Number(),
		textAlign: StoryBookControl.Select(['left', 'center', 'right']),
		letterSpacing: StoryBookControl.Number(),
		fontFamily: StoryBookControl.Select(['sans', 'mono']),
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
	width: 480,
	height: 120,
}
