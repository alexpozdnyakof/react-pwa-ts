import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Block from './block'

export default {
	title: 'Lib/Block',
	component: Block,
} as ComponentMeta<typeof Block>

const Template: ComponentStory<typeof Block> = ({
	children,
	...props
}: React.PropsWithChildren<{}>) => <Block {...props}>{children}</Block>

export const Default = Template.bind({})

Default.args = {
	children: 'Block',
}
