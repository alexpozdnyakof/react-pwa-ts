import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StoryBookControl } from '../../helpers'
import Toggle, { ToggleProps } from './toggle'

export default {
	title: 'Lib/Toggle',
	component: Toggle,
	argTypes: {
		on: StoryBookControl.Boolean(),
	},
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = ({ ...props }: ToggleProps) => (
	<Toggle {...props} />
)

export const Default = Template.bind({})

Default.args = {
	on: false,
	onClick: e => console.log({ e }),
}
