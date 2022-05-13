export type Unit = 'pct' | 'vh' | 'vw' | 'px' | 'em'
// const units: Array<Unit> ['pct', ]

export default function unit(value: number): Record<Unit, string> {
	const stringify = value.toString()

	return {
		px: stringify.concat('px'),
		pct: stringify.concat('%'),
		vh: stringify.concat('vh'),
		vw: stringify.concat('vw'),
		em: stringify.concat('em'),
	}
}
