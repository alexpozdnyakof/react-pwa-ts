import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Align, Space } from '../../styles/types'
import { Inline } from './inline'
import { Placeholder, randomNumbersList } from './storybook-helpers'

export default {
	title: 'Layout/Inline',
	component: Inline,
	parametrs: {
		layout: 'fullscreen',
	},
	argTypes: {
		size: {
			options: Object.values(Space),
			control: { type: 'select' },
		},
		align: {
			options: Object.values(Align),
			control: { type: 'select' },
		},
		padding: {
			labels: { none: 'none', ...Space },
			control: { type: 'select' },
			options: ['none', ...Object.values(Space)],
			mapping: {
				none: undefined,
			},
		},
		paddingTop: {
			labels: { none: 'none', ...Space },
			control: { type: 'select' },
			options: ['none', ...Object.values(Space)],
			mapping: {
				none: undefined,
			},
		},
		paddingRight: {
			labels: { none: 'none', ...Space },
			control: { type: 'select' },
			options: ['none', ...Object.values(Space)],
			mapping: {
				none: undefined,
			},
		},
		paddingBottom: {
			labels: { none: 'none', ...Space },
			control: { type: 'select' },
			options: ['none', ...Object.values(Space)],
			mapping: {
				none: undefined,
			},
		},
		paddingLeft: {
			labels: { none: 'none', ...Space },
			control: { type: 'select' },
			options: ['none', ...Object.values(Space)],
			mapping: {
				none: undefined,
			},
		},
	},
} as ComponentMeta<typeof Inline>

const unit = 8
const placeholderWidthList = randomNumbersList(10, 20, unit)
const Template: ComponentStory<typeof Inline> = args => (
	<Inline {...args}>
		{placeholderWidthList.map(width => (
			<Placeholder width={width} />
		))}
	</Inline>
)

export const Default = Template.bind({})

Default.args = {
	space: Space.medium,
}
