import { fireEvent } from '@testing-library/react'
import SignInForm from './sign-in-form'

describe('Sign-In Form', () => {
	it('should render correctly', () => {
		const { getByTestId, getByLabelText } = renderWithTheme(<SignInForm />)

		expect(getByTestId('signin-form')).toBeInTheDocument()
		expect(getByLabelText('Username or e-mail address')).toBeInTheDocument()
		expect(getByLabelText('Password')).toBeInTheDocument()
	})

	it('should return form result', () => {
		const onSubmit = jest.fn()
		const { getByTestId, getByLabelText } = renderWithTheme(
			<SignInForm onSubmit={onSubmit} />
		)
		fireEvent.change(getByLabelText('Username or e-mail address'), {
			target: { value: 'username' },
		})
		fireEvent.change(getByLabelText('Password'), {
			target: { value: '123' },
		})

		fireEvent.submit(getByTestId('signin-form'))

		expect(onSubmit).toHaveBeenCalledWith({
			username: 'username',
			password: '123',
		})
	})
	it('should prevent submit for invalid form', () => {
		const onSubmit = jest.fn()
		const { getByTestId } = renderWithTheme(
			<SignInForm onSubmit={onSubmit} />
		)

		fireEvent.submit(getByTestId('signin-form'))
		expect(onSubmit).not.toHaveBeenCalled()
	})
})
