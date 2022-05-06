export type Unit = '%' | 'vh' | 'vw' | 'px'

export default function addUnit(value: number, unit: Unit): string {
	return value.toString().concat(unit)
}
