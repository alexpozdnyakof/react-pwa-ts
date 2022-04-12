import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Placeholder } from '../../layout/storybook-helpers'
import InlineRow from './inline-row'

export default {
	title: 'Core/Inline Row',
	component: InlineRow,
} as ComponentMeta<typeof InlineRow>

const Template: ComponentStory<typeof InlineRow> = ({
	children,
	...props
}: any) => <InlineRow {...props}>{children}</InlineRow>

export const Default = Template.bind({})

Default.args = {
	children: (
		<>
			<Placeholder width={120} />
			<Placeholder width={60} />
			<Placeholder width={80} />
			<Placeholder width={80} />
		</>
	),
}
