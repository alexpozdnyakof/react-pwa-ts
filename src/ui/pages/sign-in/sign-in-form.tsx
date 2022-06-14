import { Form, Input, useForm } from '../../forms'
import * as Validators from '../../forms/validators'
import { Stack } from '../../layout'
import { Button } from '../../lib'

type FormValue = {
	username: string
	password: string
}

interface Props {
	onSubmit: (formValue: FormValue) => void
}

export default function SignInForm({ onSubmit }: Partial<Props>) {
	const { register, handleSubmit, errors } = useForm()

	return (
		<Form
			onSubmit={() => handleSubmit(onSubmit as any)}
			testId='signin-form'
		>
			<Stack space={4}>
				<Input
					id='username'
					label='Username or e-mail address'
					size='large'
					{...register('username', [Validators.required])}
					errors={errors?.username?.slice(0, 1)}
				/>
				<Input
					id='password'
					label='Password'
					size='large'
					type='password'
					{...register('password', [
						Validators.required,
						Validators.minLength(3),
					])}
					errors={errors?.password?.slice(0, 1)}
				/>
				<Button
					stretched
					variant='filled'
					size='large'
					mt={12}
					type='submit'
				>
					Sign In
				</Button>
			</Stack>
		</Form>
	)
}

export type { FormValue as SignInFormValue }
