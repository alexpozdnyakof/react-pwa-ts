import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Block } from '../block'
import TextField from './text-field'

export default {
	title: 'Lib/TextField',
	component: TextField,
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (...args: any) => (
	<Block width={320}>
		<TextField {...args} />
	</Block>
)

export const Default = Template.bind({})
Default.args = {
	value: '123',
}
