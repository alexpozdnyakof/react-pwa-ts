import { fireEvent } from '@testing-library/react'
import Form from './form'
import Input from './input'
import useForm from './use-form'

const TestComponent = ({ onSubmit }: any) => {
	const { register, handleSubmit } = useForm()
	return (
		<Form onSubmit={() => handleSubmit(onSubmit)} testId='form'>
			<Input
				id='username'
				testId='username'
				label='Username or e-mail address'
				size='large'
				{...register('username')}
			/>
			<Input
				id='password'
				testId='password'
				label='Password'
				size='large'
				type='password'
				{...register('password')}
			/>
		</Form>
	)
}

describe('useForm', () => {
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
