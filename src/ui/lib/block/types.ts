type ElementSize = number

interface ReusableSizeProps {
	width: ElementSize
	height: ElementSize
}

interface Attributes {
	testId: string
}
type ReusableBlockProps = ReusableSizeProps & Attributes

type BlockProps = ReusableBlockProps

export type { ElementSize, ReusableBlockProps, ReusableSizeProps, BlockProps }
