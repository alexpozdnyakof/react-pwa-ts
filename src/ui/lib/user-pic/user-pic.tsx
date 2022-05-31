import { Block } from '../block'

interface Props {
	image: string
}
export default function UserPic({ image }: Props) {
	const size = 32
	return (
		<Block
			testId='userpic'
			as='img'
			src={image}
			width={size}
			height={size}
			minWidth={size}
			minHeight={size}
			radius={32}
		/>
	)
}
