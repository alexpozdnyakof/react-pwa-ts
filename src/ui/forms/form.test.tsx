import { fireEvent } from '@testing-library/react'
import { Button } from '../lib'
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
	it('should trigger onSubmit callback after form submitted', () => {
		const onSubmit = jest.fn()

		const { getByTestId } = renderWithTheme(
			<Form testId='form' onSubmit={onSubmit}>
				<Input testId='input' />
			</Form>
		)

		fireEvent.submit(getByTestId('form'))

		expect(onSubmit).toHaveBeenCalled()
	})

	it('should trigger onSubmit callback after submit button clicked', () => {
		const onSubmit = jest.fn()

		const { getByTestId } = renderWithTheme(
			<Form testId='form' onSubmit={onSubmit}>
				<Input testId='input' />
				<Button type='submit' testId='submitButton' />
			</Form>
		)

		fireEvent.click(getByTestId('submitButton'))

		expect(onSubmit).toHaveBeenCalled()
	})
})
