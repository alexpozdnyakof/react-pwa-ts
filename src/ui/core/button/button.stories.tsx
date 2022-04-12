/* eslint-disable react/destructuring-assignment */
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Size, Kind } from '../../styles/tokens'
import { PlusIcon } from '../icon'
import Button from './button'

export default {
	title: 'Core/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => (
	<Button {...args}>{args.children}</Button>
)

export const Default = Template.bind({})

Default.args = {
	children: 'Button',
	kind: Kind.primary,
	size: Size.medium,
}

export const Icon = Template.bind({})

Icon.args = {
	children: 'Button',
	kind: Kind.primary,
	size: Size.medium,
	startEnhancer: <PlusIcon />,
}

export const Text = Template.bind({})

Text.args = {
	children: 'Button',
	kind: Kind.primary,
	size: Size.medium,
	startEnhancer: '123',
	endEnhancer: '123',
}
