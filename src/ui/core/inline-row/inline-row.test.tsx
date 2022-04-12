import { cleanup, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import { ThemeProvider } from 'styled-components'
import { Block } from '../block'
import InlineRow from './inline-row'

import { darkTheme, Space } from '../../styles'

afterEach(cleanup)

describe('Inline Row', () => {
	it('should render childs', () => {
		const { getByTestId } = render(
			<ThemeProvider theme={darkTheme}>
				<InlineRow space={Space.medium}>
					<Block data-testid='BlockA' />
				</InlineRow>
			</ThemeProvider>
		)

		// expect(getByTestId('BlockB')).toBeDefined()
	})
})
