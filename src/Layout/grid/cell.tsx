import { WithChildren } from '../../types'

function Cell({ children, span = 1 }: Partial<WithChildren<{ span: number }>>) {
	return (
		<div style={{ gridColumn: `span ${span}/span ${span}` }}>{children}</div>
	)
}

export { Cell }
