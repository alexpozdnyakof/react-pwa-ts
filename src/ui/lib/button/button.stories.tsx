import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button, { ButtonProps } from './button'

export default {
	title: 'Lib/Button',
	component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = ({
	children,
	...props
}: ButtonProps) => <Button {...props}>{children}</Button>

export const Default = Template.bind({})

Default.args = {
	children: 'Button',
}
