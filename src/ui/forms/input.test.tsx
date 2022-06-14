import Input from './input'

describe('Input', () => {
	it('should render succesfully', () => {
		const label = 'label'
		const placeholder = 'placeholder'
		const value = 'value'
		const id = 'id'
		const errors = [{ type: 'required', message: 'required error' }]
		const { getByTestId, getByText } = renderWithTheme(
			<Input
				label={label}
				placeholder={placeholder}
				value={value}
				id={id}
				errors={errors}
			/>
		)

		expect(getByTestId('form-control-input')).toBeInTheDocument()
		expect(getByText(label)).toBeInTheDocument()
		expect(getByTestId('textfield')).toBeInTheDocument()
		expect(getByTestId('textfield')).toHaveAttribute(
			'placeholder',
			placeholder
		)
		expect(getByTestId('textfield')).toHaveAttribute('value', value)
		expect(getByTestId('textfield')).toHaveAttribute('id', id)
		expect(getByText(errors[0].message)).toBeInTheDocument()
	})
})
