import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { StoryBookControl } from '../../helpers'
import { Block } from '../../lib'
import Stack from './stack'
import { StackProps, STACK_SPACE_VALUES } from './types'

export default {
	title: 'Layout/Stack',
	component: Stack,
	argTypes: {
		space: StoryBookControl.Select(STACK_SPACE_VALUES),
	},
} as ComponentMeta<typeof Stack>

const Template: ComponentStory<typeof Stack> = ({
	children,
	...props
}: StackProps) => <Stack {...props}>{children}</Stack>

export const Default = Template.bind({})

Default.args = {
	space: 2,
	children: (
		<>
			{[1, 2, 3].map(() => (
				<Block height={48} radius={6} backgroundColor='action' />
			))}
		</>
	),
}
