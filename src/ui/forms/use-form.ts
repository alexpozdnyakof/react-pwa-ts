import { createRef, RefObject, useRef, useState } from 'react'
import { ControlError, ValidatorFn } from './validators'

type RegisterFormControl = (
	name: string,
	validators?: Array<ValidatorFn>
) => {
	name: string
	ref: RefObject<HTMLInputElement>
}

type FormErrors = {
	[key: string]: Array<ControlError>
}

type SubmitCallback<F> = (formValue: F) => void

interface FormState {
	controls: {
		[key: string]: {
			ref: RefObject<HTMLInputElement>
			validators: Array<ValidatorFn>
		}
	}
}
interface UseForm<F> {
	register: RegisterFormControl
	handleSubmit: (callback: SubmitCallback<F>) => void
	errors: FormErrors
}

export default function useForm<F = any>(): UseForm<F> {
	const formState = useRef<FormState>({
		controls: {},
	})

	const [errors, setErrors] = useState<FormErrors>({})

	const getFormValue = () =>
		Object.entries(formState.current.controls).reduce(
			(formValue, [name, field]) =>
				Object.assign(formValue, {
					[name]: field.ref?.current?.value,
				}),
			{} as F
		)

	const validateFields = (formValue: Record<string, any>) =>
		Object.entries(formValue).reduce(
			(formErrors, [name, value]: [string, any]) => {
				const validationResult = formState.current.controls[
					name
				].validators
					.map(fn => fn(value))
					.filter(Boolean) as Array<ControlError>

				return validationResult.length > 0
					? Object.assign(formErrors, {
							[name]: validationResult,
					  })
					: formErrors
			},
			{} as FormErrors
		)

	return {
		register: (name: string, validators?: Array<ValidatorFn>) => {
			formState.current.controls[name] = {
				ref: createRef(),
				validators: validators ?? [],
			}

			return {
				name,
				ref: formState.current.controls[name].ref,
			}
		},
		handleSubmit: (callback: SubmitCallback<F>) => {
			const formValue = getFormValue()
			const fieldErrors = validateFields(formValue)
			setErrors(fieldErrors)
			const valid = Object.keys(fieldErrors).length === 0

			if (valid && callback) callback(formValue)
		},
		errors,
	}
}
