import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Space } from '../styles'

import { Stack } from './stack'
import { Placeholder } from './storybook-helpers'

export default {
	title: 'Layout/Stack',
	component: Stack,
	argTypes: {
		size: {
			options: Object.values(Space),
			control: { type: 'select' },
		},
	},
} as ComponentMeta<typeof Stack>

const Template: ComponentStory<typeof Stack> = args => (
	<Stack {...args}>
		<Placeholder width={480} />
		<Placeholder width={128} />
		<Placeholder width={320} />
		<Placeholder width={560} />
		<Placeholder width={160} />
	</Stack>
)

export const Default = Template.bind({})

Default.args = {
	space: Space.medium,
}
