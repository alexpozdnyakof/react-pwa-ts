import { COLOR_KEYS } from '../theme'

const Text = () => ({
	control: 'text',
})

const Number = () => ({
	control: 'number',
})

const Boolean = () => ({
	control: 'boolean',
})

const Color = () => ({
	control: 'color',
})

const Select = (
	options: Array<string | number>,
	mapping?: Record<string, any>
) => ({
	control: 'select',
	options,
	mapping,
})

const SelectWithNone = (options: Array<string>) =>
	Select(['none', ...options], { none: undefined })

const SelectColorToken = () => SelectWithNone(COLOR_KEYS)

const ReusableBlock = () => ({
	m: Text(),
	mt: Number(),
	mr: Number(),
	mb: Number(),
	ml: Number(),
	p: Number(),
	pt: Number(),
	pr: Number(),
	pb: Number(),
	pl: Number(),
	width: Number(),
	height: Number(),
})

export const StoryBookControl = {
	Text,
	Boolean,
	Number,
	Color,
	Select,
	SelectWithNone,
	SelectColorToken,
	ReusableBlock,
}
