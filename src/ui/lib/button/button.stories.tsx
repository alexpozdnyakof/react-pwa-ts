import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StoryBookControl } from '../../helpers'
import { ReusableBlockProps } from '../block'
import { BaseButtonProps } from './base-button'
import ButtonFactory, { ButtonFactoryProps } from './button-factory'

export default {
	title: 'Lib/Button',
	component: ButtonFactory,
	argTypes: {
		variant: StoryBookControl.SelectWithNone(['outline', 'link']),
	},
} as ComponentMeta<typeof ButtonFactory>

const Template: ComponentStory<typeof ButtonFactory> = ({
	children,
	...props
}: Partial<BaseButtonProps> &
	Partial<ReusableBlockProps> &
	Partial<ButtonFactoryProps>) => (
	<ButtonFactory {...props}>{children}</ButtonFactory>
)

export const Default = Template.bind({})

Default.args = {
	children: 'Button',
}
