import { EventHandlers } from '../block'
import { WithTestId } from '../helpers'

type ButtonProps = React.PropsWithChildren<
	Partial<WithTestId<Pick<EventHandlers, 'onClick'> & { shape: ButtonShape }>>
>

type ButtonVariant = 'outline' | 'link'
type ButtonShape = 'rounded' | 'circular'
type ButtonFactoryProps = ButtonProps &
	Partial<{ variant: ButtonVariant; shape: ButtonShape }>

const buttonVariants: Array<ButtonVariant> = ['outline', 'link']

export { buttonVariants }
export type { ButtonProps, ButtonFactoryProps, ButtonVariant, ButtonShape }
