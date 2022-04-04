import styled from 'styled-components'

function sample<T>(arr: Array<T>) {
	return arr[Math.floor(Math.random() * arr.length)]
}

const gradients = [
	['#f08', '#d0e'],
	['#d0e', '#91f'],
	['#91f', '#70f'],
	['#70f', '#40f'],
	['#40f', '#05f'],
	['#05f', '#09f'],
]

export const Placeholder = styled.div<{ width: number; unit?: 'px' | '%' }>`
	width: ${({ width, unit }) => `${width}${unit ?? 'px'}`};
	height: 48px;
	border-radius: 8px;
	background: linear-gradient(135deg, ${() => sample(gradients).join(',')});
`

function randomNum(min: number, max: number) {
	return Math.floor(Math.random() * (max - min) + min)
}

export function randomNumbersList(
	min: number,
	max: number,
	u: number
): Array<number> {
	const length = randomNum(min, max)
	return [...new Array(length)].map(() => randomNum(min, max) * u)
}
