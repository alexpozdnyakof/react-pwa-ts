import { fireEvent } from '@testing-library/react'
import Form from './form'
import Input from './input'

describe('Form', () => {
	it('should render succesfully', () => {
		const { getByTestId } = renderWithTheme(
			<Form testId='form'>
				<Input testId='input' />
			</Form>
		)

		expect(getByTestId('form')).toBeInTheDocument()
		expect(getByTestId('input')).toBeInTheDocument()
	})
	it('should trigger onSubmit callback when form submitted', () => {
		const onSubmit = jest.fn()

		const { getByTestId } = renderWithTheme(
			<Form testId='form' onSubmit={onSubmit}>
				<Input testId='input' />
			</Form>
		)

		fireEvent.submit(getByTestId('form'))

		expect(onSubmit).toHaveBeenCalled()
	})
})
