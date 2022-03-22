function Cell({
	children,
	span = 1,
}: React.PropsWithChildren<Partial<{ span: number }>>) {
	return (
		<div style={{ gridColumn: `span ${span}/span ${span}` }}>
			{children}
		</div>
	)
}

export { Cell }
