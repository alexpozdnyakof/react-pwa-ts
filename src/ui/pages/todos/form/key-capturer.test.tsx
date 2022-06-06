import { fireEvent } from '@testing-library/react'
import { TextField } from '../../../lib'
import KeyCapturer from './key-capturer'

describe('Key Capturer', () => {
	it('should run callback when cmd + enter pressed ', () => {
		const onCmdEnter = jest.fn()
		const { getByTestId } = renderWithTheme(
			<KeyCapturer onCmdEnter={onCmdEnter}>
				<TextField />
			</KeyCapturer>
		)

		fireEvent.keyDown(getByTestId('textfield'), {
			key: 'Enter',
			metaKey: true,
		})

		expect(onCmdEnter).toBeCalledTimes(1)
	})

	it('should run callback when escape pressed', () => {
		const onEscape = jest.fn()
		const { getByTestId } = renderWithTheme(
			<KeyCapturer onEscape={onEscape}>
				<TextField />
			</KeyCapturer>
		)

		fireEvent.keyDown(getByTestId('textfield'), {
			key: 'Escape',
		})

		expect(onEscape).toBeCalledTimes(1)
	})
})
