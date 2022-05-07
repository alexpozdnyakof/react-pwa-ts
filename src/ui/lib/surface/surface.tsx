import { Block } from '../block'

export default function Surface({ children }: React.PropsWithChildren<{}>) {
	return (
		<Block
			width={1088}
			backgroundColor='surface'
			borderWidth={1}
			borderStyle='solid'
			borderRadius={6}
			borderColor='border'
		>
			{children}
		</Block>
	)
}
