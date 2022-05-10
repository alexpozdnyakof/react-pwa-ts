import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '../theme'

function renderWithTheme(toRender: JSX.Element) {
	return render(<ThemeProvider theme={darkTheme}>{toRender}</ThemeProvider>)
}

function getStyleObject(
	toRender: (args: any) => { type: { styledComponentId: string } }
): CSSStyleDeclaration {
	return window.getComputedStyle(
		document.getElementsByClassName(toRender({}).type.styledComponentId)[0]
	)
}

function getHTMLElement<T>(Component: React.FC<T>, props: T): HTMLElement {
	const testId = 'elementToTest'

	const { getByTestId } = renderWithTheme(
		<Component {...props} testId={testId} />
	)

	return getByTestId(testId)
}

export { renderWithTheme, getStyleObject, getHTMLElement }
