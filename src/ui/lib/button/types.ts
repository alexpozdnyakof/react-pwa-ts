import { EventHandlers } from '../block'
import { WithTestId } from '../helpers'

type ButtonProps = React.PropsWithChildren<
	Partial<WithTestId<Pick<EventHandlers, 'onClick'>>>
>

type ButtonVariant = 'outline' | 'link'

type ButtonFactoryProps = ButtonProps & Partial<{ variant: ButtonVariant }>

const buttonVariants: Array<ButtonVariant> = ['outline', 'link']

export { buttonVariants }
export type { ButtonProps, ButtonFactoryProps, ButtonVariant }
