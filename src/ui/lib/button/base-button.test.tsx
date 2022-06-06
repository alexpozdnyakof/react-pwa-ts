import { fireEvent } from '@testing-library/react'
import BaseButton from './base-button'

describe('BaseButton', () => {
	it('should render succesfully', () => {
		const text = 'button'
		const { getByTestId } = renderWithTheme(
			<BaseButton testId='base-button'>{text}</BaseButton>
		)

		expect(getByTestId('base-button')).toBeInTheDocument()
		expect(getByTestId('base-button')).toHaveTextContent(text)
	})

	it('should render circular shape', () => {
		const { getByTestId } = renderWithTheme(
			<BaseButton testId='base-button' shape='circular' />
		)

		expect(getByTestId('base-button')).toHaveStyle({ borderRadius: '12px' })
	})

	it('should render rounded shape', () => {
		const { getByTestId } = renderWithTheme(
			<BaseButton testId='base-button' shape='rounded' />
		)

		expect(getByTestId('base-button')).toHaveStyle({ borderRadius: '6px' })
	})

	it('should render large button', () => {
		const { getByTestId } = renderWithTheme(
			<BaseButton testId='base-button' size='large' />
		)

		expect(getByTestId('base-button')).toHaveStyle({ height: '40px' })
	})

	it('should render medium button', () => {
		const { getByTestId } = renderWithTheme(
			<BaseButton testId='base-button' size='medium' />
		)

		expect(getByTestId('base-button')).toHaveStyle({ height: '28px' })
	})

	it('should render stretched button', () => {
		const { getByTestId } = renderWithTheme(
			<BaseButton testId='base-button' stretched />
		)

		expect(getByTestId('base-button')).toHaveStyle({ width: '100%' })
	})

	it('should trigger onClick callback when user clicked', () => {
		const onClickCallback = jest.fn()
		const { getByTestId } = renderWithTheme(
			<BaseButton testId='base-button' onClick={onClickCallback} />
		)

		fireEvent.click(getByTestId('base-button'))

		expect(onClickCallback).toHaveBeenCalled()
	})
})
