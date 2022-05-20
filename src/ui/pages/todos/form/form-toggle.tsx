import { cloneElement, useState } from 'react'
import { Block } from '../../../lib'
import ItemForm from './title-form'
import { useFocus } from './use-focus'

interface Props {
	children: [
		React.ReactElement<
			(props: {
				onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void
			}) => JSX.Element
		>,
		React.ReactElement<typeof ItemForm>
	]
	onSubmit: (value: string) => void
}

export default function FormToggle({ children, onSubmit }: Props) {
	const [inputMode, setInputMode] = useState<boolean>(false)
	const inputRef = useFocus()
	const [control, form] = children

	const show = () => {
		setInputMode(true)
		inputRef?.current?.focus()
	}

	const hide = () => {
		setInputMode(false)
	}

	const submit = () => {
		const text = inputRef?.current?.value
		if (text === undefined || text.trim().length === 0) return
		onSubmit(text)
		hide()
	}

	return (
		<Block width={{ value: 80, unit: 'pct' }}>
			{!inputMode && cloneElement(control, { onClick: show } as any)}
			{inputMode &&
				cloneElement(form, {
					onSubmit: submit,
					onCancel: hide,
					ref: inputRef,
				} as any)}
		</Block>
	)
}
