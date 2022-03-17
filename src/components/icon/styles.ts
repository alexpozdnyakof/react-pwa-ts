import styled from 'styled-components'

const Svg = styled.svg<{ width: number; height: number }>`
	display: block;
	border: 1px solid transparent;
	height: ${({ width }) => `${width}px`};
	width: ${({ height }) => `${height}px`};
	transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
	pointer-events: none;
	color: currentColor;
	box-sizing: content-box;
`

export { Svg }
