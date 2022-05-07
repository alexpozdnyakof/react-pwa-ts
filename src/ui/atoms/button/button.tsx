import { Block } from '../block'
import { BaseButton } from './styled-components'

interface Props {
	startEnhancer?: React.ReactNode | string
	endEnhancer?: React.ReactNode | string
	disabled?: boolean
	onClick?: (event: React.SyntheticEvent) => void
}

function Enhancer({ children }: React.PropsWithChildren<{}>) {
	return <Block display='inline-flex'>{children}</Block>
}
export default function Button({
	children,
	onClick,
	startEnhancer,
	endEnhancer,
	disabled = false,
}: React.PropsWithChildren<Partial<Props>>) {
	return (
		<BaseButton onClick={onClick} disabled={disabled}>
			<Enhancer>{startEnhancer}</Enhancer>
			{children}
			<Enhancer>{endEnhancer}</Enhancer>
		</BaseButton>
	)
}
