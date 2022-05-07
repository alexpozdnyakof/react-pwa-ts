import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StoryBookControl } from '../../helpers'
import { darkTheme } from '../../theme/theme'
import Block from './block'
import { BlockProps } from './types'

export default {
	title: 'Lib/Block',
	component: Block,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		children: StoryBookControl.Text(),
		width: StoryBookControl.Number(),
		height: StoryBookControl.Number(),
		backgroundColor: StoryBookControl.SelectColorToken(),
		borderColor: StoryBookControl.SelectColorToken(),
		color: StoryBookControl.SelectColorToken(),
		borderRadius: StoryBookControl.Number(),
		borderWidth: StoryBookControl.Number(),
		borderStyle: StoryBookControl.Select(['dashed', 'solid']),
	},
} as ComponentMeta<typeof Block>

const Template: ComponentStory<typeof Block> = ({
	children,
	...props
}: React.PropsWithChildren<Partial<BlockProps>>) => (
	<ThemeProvider theme={darkTheme as any}>
		<Block {...props}>{children}</Block>
	</ThemeProvider>
)

export const Default = Template.bind({})

Default.args = {
	children: 'Block',
}
