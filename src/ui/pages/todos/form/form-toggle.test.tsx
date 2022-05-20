import { fireEvent } from '@testing-library/react'
import { renderWithTheme } from '../../../helpers'
import { Button } from '../../../lib'
import ItemForm from './title-form'
import FormToggle from './form-toggle'

describe('Form Toggle', () => {
	it('should show button and hide form by default', () => {
		const { getByTestId, queryByTestId } = renderWithTheme(
			<FormToggle onSubmit={() => {}}>
				<Button>text</Button>
				<ItemForm />
			</FormToggle>
		)
		expect(getByTestId('outlineButton')).toBeInTheDocument()
		expect(queryByTestId('textfield')).not.toBeInTheDocument()
	})

	it('should show form and hide button after click', () => {
		const { getByTestId, queryByTestId } = renderWithTheme(
			<FormToggle onSubmit={() => {}}>
				<Button>text</Button>
				<ItemForm />
			</FormToggle>
		)
		fireEvent.click(getByTestId('outlineButton'))

		expect(queryByTestId('outlineButton')).not.toBeInTheDocument()
		expect(getByTestId('textfield')).toBeInTheDocument()
	})

	it('should hide form', () => {
		const { getByTestId, queryByTestId } = renderWithTheme(
			<FormToggle onSubmit={() => {}}>
				<Button>text</Button>
				<ItemForm />
			</FormToggle>
		)
		fireEvent.click(getByTestId('outlineButton'))

		fireEvent.keyDown(getByTestId('textfield'), {
			key: 'Escape',
		})
		expect(getByTestId('outlineButton')).toBeInTheDocument()
		expect(queryByTestId('textField')).not.toBeInTheDocument()
	})

	it('should not trigger onSubmit for empty form', () => {
		const onSubmit = jest.fn()

		const { getByTestId } = renderWithTheme(
			<FormToggle onSubmit={onSubmit}>
				<Button>text</Button>
				<ItemForm />
			</FormToggle>
		)
		fireEvent.click(getByTestId('outlineButton'))
		const input = getByTestId('textfield') as HTMLInputElement

		fireEvent.keyDown(input, {
			key: 'Enter',
			metaKey: true,
		})

		expect(onSubmit).not.toHaveBeenCalled()
	})

	it('should  trigger onSubmit for meta+enter click', () => {
		const onSubmit = jest.fn()

		const { getByTestId } = renderWithTheme(
			<FormToggle onSubmit={onSubmit}>
				<Button>text</Button>
				<ItemForm />
			</FormToggle>
		)
		fireEvent.click(getByTestId('outlineButton'))
		const input = getByTestId('textfield') as HTMLInputElement
		fireEvent.change(input, { target: { value: '138' } })
		fireEvent.keyDown(input, {
			key: 'Enter',
			metaKey: true,
		})

		expect(onSubmit).toHaveBeenCalledTimes(1)
	})
})
