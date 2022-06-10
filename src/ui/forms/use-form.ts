/* eslint-disable @typescript-eslint/no-unused-vars */
import { createRef, ForwardedRef, RefObject, useRef, useState } from 'react'

type RegisterControl = {
	(name: string): {
		name: string
		ref: RefObject<HTMLInputElement>
		onChange: <T>(e?: React.KeyboardEvent<T>) => void
	}
}

type SubmitCallback = (formValue: any) => void

interface VirtualForm<Result = {}> {
	register: RegisterControl
	handleSubmit: (callback: SubmitCallback) => void
	getFormValue: () => Record<string, any>
	// errors: Record<string, string>
}

type Controls = Record<string, RefObject<HTMLInputElement>>

interface FormState {
	controls: Controls
}

export default function useForm(): VirtualForm {
	const formRef = useRef<FormState>({ controls: {} })

	const getFormValue = () =>
		Object.entries(formRef.current.controls).reduce(
			(
				values: Record<string, any>,
				[name, ref]: [string, RefObject<HTMLInputElement>]
			) => Object.assign(values, { [name]: ref?.current?.value }),
			{}
		)

	return {
		register: (name: string) => {
			formRef.current.controls[name] = createRef()

			return {
				name,
				ref: formRef.current.controls[name],
				onChange: <T>(e?: React.KeyboardEvent<T>) => {
					console.log({ e })
				},
			}
		},
		getFormValue,
		handleSubmit: (callback: SubmitCallback) => {
			const formValue = getFormValue()

			return callback(formValue)
		},
	}
}
