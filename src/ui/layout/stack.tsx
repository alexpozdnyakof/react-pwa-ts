import styled from 'styled-components'
import { Space, Theme } from '../styles'

type StackProps = { space?: Space }

function getSpace(theme: Theme, s: Space | undefined) {
	if (!s) return '0'
	return `${theme.space[s]}px`
}

const StyledStack = styled.div(
	({ theme, space }: { theme: any; space: Space }) => ({
		display: 'grid',
		gridAutoFlow: 'row',
		rowGap: getSpace(theme, space),
		width: '100%',
	})
)

export function Stack({
	children,
	space = Space.xsmall,
}: React.PropsWithChildren<StackProps>) {
	return <StyledStack space={space}>{children}</StyledStack>
}
