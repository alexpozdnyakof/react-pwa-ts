import { Center, Stack } from '../../layout'
import { Typography } from '../../lib'
import SignInForm, { SignInFormValue } from './sign-in-form'

export default function SignInPage() {
	return (
		<Center testId='signinpage'>
			<Stack testId='signin-block' width={420} space={4}>
				<Typography variant='page-title'>
					Sign in to BootCamp
				</Typography>
				<SignInForm
					onSubmit={(signInForm: SignInFormValue) =>
						console.log(signInForm)
					}
				/>
			</Stack>
		</Center>
	)
}
