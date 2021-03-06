import userEvent from '@testing-library/user-event'
import { TextField } from '../lib'

import FormControl from './form-control'

describe('FormControl', () => {
	const FControlTID = 'formControl'
	const TextFieldTID = 'textField'
	const LabelText = 'text-field'

	it('should render succesfully', () => {
		const { getByTestId, queryByTestId } = renderWithTheme(
			<FormControl testId={FControlTID}>
				<TextField testId={TextFieldTID} />
			</FormControl>
		)
		expect(getByTestId(FControlTID)).toBeInTheDocument()
		expect(queryByTestId('label')).not.toBeInTheDocument()
		expect(getByTestId(TextFieldTID)).toBeInTheDocument()
	})

	it('should render label', () => {
		const { getByTestId } = renderWithTheme(
			<FormControl testId={FControlTID} label={LabelText}>
				<TextField testId={TextFieldTID} />
			</FormControl>
		)
		const label = getByTestId('label')

		expect(label).toBeInTheDocument()
		expect(label.textContent).toBe(LabelText)
	})

	it('should focus textfield when label clicked', () => {
		const { getByTestId, getByLabelText } = renderWithTheme(
			<FormControl testId={FControlTID} label={LabelText} id='138'>
				<TextField testId={TextFieldTID} />
			</FormControl>
		)

		const field = getByTestId(TextFieldTID)
		userEvent.click(getByLabelText(LabelText))

		expect(field).toHaveFocus()
	})

	it('should render errors', () => {
		const errors = [
			{ type: 'required', message: 'required error' },
			{ type: 'pattern', message: 'pattern error' },
		]
		const { getByText } = renderWithTheme(
			<FormControl errors={errors}>
				<TextField />
			</FormControl>
		)

		errors.forEach(error => {
			expect(getByText(error.message)).toBeInTheDocument()
		})
	})
})
