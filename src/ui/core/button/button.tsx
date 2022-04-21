import { BaseButton } from './styled-components'
import { ButtonProps } from './type'
import Typography from '../typography'
import { Block } from '../block'

function Enhancer({ children }: React.PropsWithChildren<{}>) {
	return <Block display='inline-flex'>{children}</Block>
}
export default function Button({
	children,
	onClick,
	size,
	kind,
	startEnhancer,
	endEnhancer,
}: React.PropsWithChildren<Partial<ButtonProps>>) {
	return (
		<BaseButton onClick={onClick} size={size} kind={kind}>
			<Enhancer>{startEnhancer}</Enhancer>
			<Typography.Button>{children}</Typography.Button>
			<Enhancer>{endEnhancer}</Enhancer>
		</BaseButton>
	)
}
