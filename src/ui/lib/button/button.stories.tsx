import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StoryBookControl } from '../../helpers'
import ButtonFactory from './button-factory'
import { ButtonFactoryProps, buttonVariants } from './types'

export default {
	title: 'Lib/Button',
	component: ButtonFactory,
	argTypes: {
		variant: StoryBookControl.SelectWithNone(buttonVariants),
	},
} as ComponentMeta<typeof ButtonFactory>

const Template: ComponentStory<typeof ButtonFactory> = ({
	children,
	...props
}: ButtonFactoryProps) => <ButtonFactory {...props}>{children}</ButtonFactory>

export const Default = Template.bind({})

Default.args = {
	children: 'Button',
}
