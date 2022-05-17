import { fireEvent } from '@testing-library/react'
import { renderWithTheme } from '../../helpers'
import TextField from './text-field'

describe('Text Field', () => {
	it('should handle key pressed', () => {
		const onKeyDownFn = jest.fn(e => {
			console.log({ e })
		})
		const { getByTestId } = renderWithTheme(
			<TextField onKeyDown={onKeyDownFn} />
		)

		fireEvent.keyDown(getByTestId('textfield'), { code: 'Enter' })

		expect(onKeyDownFn).toHaveBeenCalledTimes(1)
	})
})
