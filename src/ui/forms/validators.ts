export type ControlError = { type: string; message: string }

export type Validator = (value: any) => ControlError | undefined

export type ValidatorFn = (value: any) => ControlError | undefined

const required: ValidatorFn = value =>
	!value
		? {
				type: 'required',
				message: 'This field is required',
		  }
		: undefined

const minLength: (min: number) => ValidatorFn = min => value =>
	Number(value?.length) < min
		? {
				type: 'minLength',
				message: `Minimum length is ${min}`,
		  }
		: undefined

export { required, minLength }
