import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '../../theme/theme'
import Block from './block'
import { BlockProps } from './types'

function renderWithTheme(toRender: JSX.Element) {
	return render(
		<ThemeProvider theme={darkTheme as any}>{toRender}</ThemeProvider>
	)
}

const renderBlockWithProps = ({
	children,
	...props
}: React.PropsWithChildren<Partial<BlockProps>>): HTMLElement => {
	const testId = 'baseBlock'
	const { getByTestId } = renderWithTheme(
		<Block {...props} testId={testId}>
			{children}
		</Block>
	)

	return getByTestId(testId)
}

describe('Block Component', () => {
	it('should render correctly', () => {
		renderBlockWithProps({ children: 'text' })
		const children = screen.getByText(/text/i)
		expect(children).toBeInTheDocument()
	})

	it('should add px for size properties', () => {
		const props = {
			width: 100,
			height: 50,
		}

		const result = renderBlockWithProps(props)

		expect(result).toHaveStyle({
			width: '100px',
			height: '50px',
		})
	})
})
