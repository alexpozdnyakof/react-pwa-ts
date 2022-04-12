/* eslint-disable react/prop-types */
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Kind } from '../../styles'

import Button from '../button/button'
import ButtonGroup from './button-group'

export default {
	title: 'Core/Button Group',
	component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>

const Template: ComponentStory<typeof ButtonGroup> = ({ buttons }: any) => (
	<ButtonGroup>{buttons}</ButtonGroup>
)

export const Default = Template.bind({})

Default.args = {
	buttons: (
		<>
			<Button>Primary</Button>
			<Button kind={Kind.secondary}>Secondary</Button>
			<Button kind={Kind.tertiary}>Tertiary</Button>
		</>
	),
} as any
