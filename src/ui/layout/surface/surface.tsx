import { Block } from '../../lib/block'

export default function Surface({ children }: React.PropsWithChildren<{}>) {
	return (
		<Block
			width={1088}
			backgroundColor='surface'
			borderWidth={1}
			borderStyle='solid'
			radius={6}
			borderColor='border'
			m='0 auto'
			pt={48}
			pl={124}
			pr={124}
			pb={56}
		>
			{children}
		</Block>
	)
}
