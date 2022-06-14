import Label from './error'

describe('Label', () => {
	it('should render correctly', () => {
		const labelText = 'label text'
		const { getByText } = renderWithTheme(<Label>{labelText}</Label>)
		expect(getByText(labelText)).toBeInTheDocument()
	})
})
