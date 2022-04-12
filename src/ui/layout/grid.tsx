import styled from 'styled-components'

export const Grid = styled.div<{ size: string }>`
	display: grid;
	grid-gap: '24px';
	align-content: start;
	width: 100%;
	grid-template-columns: repeat(auto-fit, minmax(0px, min-content));
`
