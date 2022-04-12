import { ComponentMeta, ComponentStory } from '@storybook/react'
import TextField from './text-field'

export default {
	title: 'Core/TextField',
	component: TextField,
	parameters: {
		layout: 'centered',
	},
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = () => <TextField />

export const Default = Template.bind({})

Default.args = {}
