import styled from 'styled-components'

import { Box, ReusableBoxProps } from './box'
import { WithSpace } from './types'

type InlineProps = WithSpace<Partial<ReusableBoxProps>>

export const StyledInline = styled(Box)<InlineProps>`
	margin: ${({ theme, space }) =>
		`-${theme.space[space]}px 0 0 -${theme.space[space]}px}`};

	> * {
		margin: ${({ theme, space }) =>
			`${theme.space[space]}px 0 0 ${theme.space[space]}px}`};
	}
`

export function Inline({
	children,
	space,
	justifyContent = 'flex-start',
	align = 'center',
	...props
}: React.PropsWithChildren<InlineProps>) {
	return (
		<StyledInline
			display='flex'
			justifyContent={justifyContent}
			space={space}
			align={align}
			{...props}
		>
			{children}
		</StyledInline>
	)
}
