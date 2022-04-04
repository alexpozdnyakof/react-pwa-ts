/* eslint-disable react/destructuring-assignment */
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BorderRadius } from '../../styles/types'
import { Box } from './box'
import { Placeholder } from './storybook-helpers'

export default {
	title: 'Layout/Box',
	component: Box,
	argTypes: {
		width: {
			control: {
				type: 'number',
			},
		},
		height: {
			control: {
				type: 'number',
			},
		},
		children: {
			hide: true,
			control: false,
		},
	},
} as ComponentMeta<typeof Box>

const Template: ComponentStory<typeof Box> = args => (
	<Box {...args}>{args.children}</Box>
)

export const Default = Template.bind({})

Default.args = {
	width: 480,
	height: 48,
	background: 'linear-gradient(135deg,#f08, #d0e)',
	borderRadius: BorderRadius.default,
}

export const WithChildren = Template.bind({})

WithChildren.args = {
	width: 'max-content',
	children: (
		<>
			<Placeholder width={100} />
			<Placeholder width={80} />
			<Placeholder width={150} />
			<Placeholder width={32} />
		</>
	),
}
