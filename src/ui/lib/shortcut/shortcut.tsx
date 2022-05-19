import { Block, BlockProps } from '../block'
import { Text } from '../text'

interface ShortcutProps {
	children: string
}

const shortcutStyles = {
	backgroundColor: 'background',
	borderColor: 'border',
	borderStyle: 'solid',
	borderWidth: 1,
	radius: 6,
	fontSize: 'micro',
	fontFamily: 'mono',
	lineHeight: 10,
	color: 'text',
	pt: 4,
	pr: 6,
	pb: 4,
	pl: 6,
} as BlockProps

export default function Shortcut({ children }: ShortcutProps) {
	const keys = children.split(' ')

	return (
		<Block display='grid' gap={4} gridAutoFlow='column' width='max-content'>
			{keys.map((key, i) =>
				key === '+' ? (
					<Text
						size='small'
						tone='text'
						key={'key'.concat(i.toString())}
					>
						+
					</Text>
				) : (
					<Block
						{...shortcutStyles}
						as='kbd'
						key={'key'.concat(i.toString())}
					>
						{key}
					</Block>
				)
			)}
		</Block>
	)
}
