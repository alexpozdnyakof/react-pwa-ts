import React from 'react'
import styled from 'styled-components'
import { Space } from '../../styles/tokens'

import { Block } from '../block'

export const StyledInlineRow = styled(Block)<{ space: Space }>`
	margin-top: ${({ theme, space }) => `-${theme.space[space]}px`};
	margin-left: ${({ theme, space }) => `-${theme.space[space]}px`};
	> * {
		margin-top: ${({ theme, space }) => `${theme.space[space]}px`};
		margin-left: ${({ theme, space }) => `${theme.space[space]}px`};
	}
`

export default function InlineRow({
	children,
	space,
}: React.PropsWithChildren<{ space: Space }>) {
	return (
		<StyledInlineRow space={space} display='flex' alignItems='flex-start'>
			{children}
		</StyledInlineRow>
	)
}
