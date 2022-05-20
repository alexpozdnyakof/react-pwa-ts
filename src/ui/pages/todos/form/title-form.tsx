import { ForwardedRef, forwardRef } from 'react'
import { Stack } from '../../../layout'
import { TextField, Text, Shortcut } from '../../../lib'
import { ReusableBlockProps } from '../../../lib/block'
import KeyCapturer from './key-capturer'

interface Props {
	onSubmit: () => void
	onCancel: () => void
	placeholder: string
}

const TitleForm = forwardRef(
	(
		{
			placeholder,
			onSubmit,
			onCancel,
			...blockProps
		}: Partial<Props & ReusableBlockProps>,
		ref: ForwardedRef<HTMLInputElement>
	) => (
		<Stack space={1} {...blockProps}>
			<KeyCapturer onCmdEnter={onSubmit} onEscape={onCancel}>
				<TextField ref={ref} placeholder={placeholder} />
			</KeyCapturer>

			<Text
				size='small'
				tone='caption'
				display='grid'
				gap={8}
				gridAutoFlow='column'
				width='max-content'
			>
				Press <Shortcut>Enter + ⌘</Shortcut> to create or
				<Shortcut>Esc</Shortcut> to cancel
			</Text>
		</Stack>
	)
)

TitleForm.displayName = 'TitleForm'
export default TitleForm
