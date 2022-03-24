import styled from 'styled-components'
import { ButtonType } from './type'

const StyledButton = styled.button<{ type: ButtonType }>`
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 32px;
	height: 32px;
	padding: 0 10px;
	border-radius: 6px;
	border: 1px solid;
	background-color: ${({ type }) =>
		type === 'primary' ? 'rgb(169, 112, 255)' : 'transparent'};
	border-color: ${({ type }) =>
		type === 'primary' ? 'rgb(169, 112, 255)' : '#525252'};

	color: #fff !important;

	transition-property: box-shadow, border;
	transition-duration: 0.3s;
	transition-timing-function: ease;
	&:hover {
		background-color: ${({ type }) =>
			type === 'primary' ? 'rgb(169, 112, 255)' : '#3d3d3d'};
		border-color: ${({ type }) =>
			type === 'primary' ? 'rgb(169, 112, 255)' : '#393939'};
	}
`

export { StyledButton }
