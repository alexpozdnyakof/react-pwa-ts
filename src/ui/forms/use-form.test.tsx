import { fireEvent } from '@testing-library/react'
import Form from './form'
import Input from './input'
import Error from './error'
import useForm from './use-form'
import * as Validators from './validators'

const TestComponent = ({ onSubmit, username, password }: any) => {
	const { register, handleSubmit, errors } = useForm()
	return (
		<Form onSubmit={() => handleSubmit(onSubmit)} testId='form'>
			<Input
				id='username'
				testId='username'
				label='Username or e-mail address'
				size='large'
				value={password}
				{...register('username', [Validators.required])}
			/>
			{errors?.username?.map(error => (
				<Error
					testId={'username_'.concat(error.type)}
					key={'password_'.concat(error.type)}
				>
					{error.message}
				</Error>
			))}
			<Input
				id='password'
				testId='password'
				label='Password'
				size='large'
				type='password'
				value={username}
				{...register('password', [
					Validators.required,
					Validators.minLength(3),
				])}
			/>
			{errors?.password?.map(error => (
				<Error
					testId={'password_'.concat(error.type)}
					key={'password_'.concat(error.type)}
				>
					{error.message}
				</Error>
			))}
		</Form>
	)
}

describe('useForm', () => {
	it('should show errors', () => {
		const onSubmit = jest.fn()
		const { getByTestId, queryByTestId } = renderWithTheme(
			<TestComponent onSubmit={onSubmit} />
		)
		fireEvent.submit(getByTestId('form'))

		expect(queryByTestId('username_required')).toBeInTheDocument()
		expect(queryByTestId('password_required')).toBeInTheDocument()
		expect(queryByTestId('password_minLength')).toBeInTheDocument()
	})

	it('should prevent submit for invalid form', () => {
		const onSubmit = jest.fn()
		const { getByTestId } = renderWithTheme(
			<TestComponent onSubmit={onSubmit} />
		)

		fireEvent.submit(getByTestId('form'))

		expect(onSubmit).not.toHaveBeenCalled()
	})
	it('should return form value', () => {
		const onSubmit = jest.fn()
		const { getByTestId } = renderWithTheme(
			<TestComponent onSubmit={onSubmit} />
		)

		fireEvent.change(getByTestId('username'), {
			target: { value: 'username' },
		})
		fireEvent.change(getByTestId('password'), {
			target: { value: 'password' },
		})
		fireEvent.submit(getByTestId('form'))

		expect(onSubmit).toHaveBeenCalledWith({
			username: 'username',
			password: 'password',
		})
	})
})
