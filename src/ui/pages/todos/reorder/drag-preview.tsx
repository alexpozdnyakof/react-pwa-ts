/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDragLayer, XYCoord } from 'react-dnd'
import { Block } from '../../../lib'
import { ReusableBlockProps } from '../../../lib/block'

type DragPreviewProps = {
	position: {
		x: number
		y: number
	}
}

export function snapToGrid(x: number, y: number) {
	const snappedX = Math.round(x / 32) * 32
	const snappedY = Math.round(y / 32) * 32
	return [snappedX, snappedY]
}

function getItemStyles(
	initialOffset: XYCoord,
	currentOffset: XYCoord,
	isSnapToGrid: boolean
): Partial<ReusableBlockProps> {
	if (!initialOffset || !currentOffset) {
		return {
			display: 'none',
		}
	}
	let { x, y } = currentOffset

	if (isSnapToGrid) {
		x -= initialOffset.x
		y -= initialOffset.y
		;[x, y] = snapToGrid(x, y)
		x += initialOffset.x
		y += initialOffset.y
	}
	const transform = `translate(${x}px, ${y}px)`
	return {
		transform,
	}
}

export default function DragPreview({
	position,
	children,
}: React.PropsWithChildren<DragPreviewProps>) {
	const { currentOffset, initialOffset } = useDragLayer(monitor => ({
		initialOffset: monitor.getInitialSourceClientOffset(),
		currentOffset: monitor.getSourceClientOffset(),
	}))
	const { x, y } = position

	return (
		<Block
			// {...getItemStyles(currentOffset!, initialOffset!, false)}
			transition='all ease 15ms'
			transform={`translate(${x}px, ${y}px)`}
		>
			{children}
		</Block>
	)
}
