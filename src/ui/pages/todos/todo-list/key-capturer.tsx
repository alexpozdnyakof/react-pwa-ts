import { cloneElement } from 'react'

type EventHandler = (event?: React.SyntheticEvent) => void

interface EventHandlerProps {
	onCmdEnter?: EventHandler
	onEscape?: EventHandler
}

type KeyCapturerProps = EventHandlerProps & {
	children: React.ReactElement<unknown>
}

export default function KeyCapturer({
	onCmdEnter,
	onEscape,
	children,
}: KeyCapturerProps) {
	const eventName = 'onKeyDown'

	const handleKeyEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const { key, metaKey } = event

		if (key === 'Enter' && metaKey && onCmdEnter) {
			event.preventDefault()

			onCmdEnter()
		}
		if (key === 'Escape' && onEscape) {
			event.preventDefault()

			onEscape()
		}
		return event
	}

	return cloneElement(children, {
		[eventName]: handleKeyEvent,
	} as any)
}
