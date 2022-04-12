import { Space } from '../styles'

const Text = () => ({
	control: 'text',
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

const ReusableBlock = () => ({
	width: Text(),
	height: Text(),
	backgroundColor: Color(),
	padding: SelectWithNone(Object.values(Space)),
	paddingTop: SelectWithNone(Object.values(Space)),
	paddingRight: SelectWithNone(Object.values(Space)),
	paddingBottom: SelectWithNone(Object.values(Space)),
	paddingLeft: SelectWithNone(Object.values(Space)),

	margin: SelectWithNone(Object.values(Space)),
	marginTop: SelectWithNone(Object.values(Space)),
	marginRight: SelectWithNone(Object.values(Space)),
	marginBottom: SelectWithNone(Object.values(Space)),
	marginLeft: SelectWithNone(Object.values(Space)),
})

export const StoryBookControl = {
	Text,
	Color,
	Select,
	SelectWithNone,
	ReusableBlock,
}
