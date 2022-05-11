import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { StoryBookControl } from '../../helpers'
import { TEXT_SIZE_KEYS, TEXT_TONE_KEYS } from '../../theme'
import Text from './text'

export default {
	title: 'Lib/Text',
	component: Text,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		children: StoryBookControl.Text(),
		size: StoryBookControl.Select(TEXT_SIZE_KEYS),
		weight: StoryBookControl.Select(['normal', 'semibold', 'bold']),
		tone: StoryBookControl.Select(TEXT_TONE_KEYS),
		line: StoryBookControl.Number(),
		mono: StoryBookControl.Boolean(),
		align: StoryBookControl.Select(['left', 'center', 'right']),
		spacing: StoryBookControl.Number(),
		...StoryBookControl.ReusableBlock(),
	},
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = ({
	children,
	...props
}: React.PropsWithChildren<{}>) => <Text {...props}>{children}</Text>

export const Default = Template.bind({})
Default.args = {
	children: 'Text',
}
