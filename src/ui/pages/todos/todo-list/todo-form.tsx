import { useState } from 'react'
import { useFocus } from './use-focus'
import { Block, Button, TextField, Text, Shortcut } from '../../../lib'
import KeyCapturer from './key-capturer'
import { Stack } from '../../../layout'

interface Props {
	onAddNewTodo: (title: string | undefined) => void
}

export default function TodoForm({ onAddNewTodo }: Props) {
	const [inputMode, setInputMode] = useState<boolean>(false)
	const inputRef = useFocus()

	const showForm = () => {
		setInputMode(true)
		inputRef?.current?.focus()
	}

	const hideForm = () => {
		setInputMode(false)
	}

	const addTodo = () => {
		const title = inputRef?.current?.value
		if (title?.trim().length === 0) return
		onAddNewTodo(inputRef?.current?.value)
		setInputMode(false)
	}

	return (
		<Block width={{ value: 80, unit: 'pct' }}>
			{!inputMode && <Button onClick={showForm}>Add a todo</Button>}

			{inputMode && (
				<Stack space={1}>
					<KeyCapturer onCmdEnter={addTodo} onEscape={hideForm}>
						<TextField ref={inputRef} ariaLabel='todoTitleField' />
					</KeyCapturer>

					<Text
						size='small'
						tone='caption'
						display='grid'
						gap={8}
						gridAutoFlow='column'
						width='max-content'
					>
						Press <Shortcut>Enter + ⌘</Shortcut>
						or <Shortcut>Esc</Shortcut> to cancel
					</Text>
				</Stack>
			)}
		</Block>
	)
}
