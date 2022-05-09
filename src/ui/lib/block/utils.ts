const unit = (value: number): { px: string } => ({
	px: value.toString().concat('px'),
})

const margin = (value: number | 'auto'): string =>
	typeof value === 'number' ? unit(value).px : value

export { unit, margin }
