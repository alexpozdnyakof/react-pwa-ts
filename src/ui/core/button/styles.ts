import styled from 'styled-components'

const StyledButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 32px;
	height: 32px;
	padding: 0 10px;
	border-radius: 6px;
	background-color: rgb(169, 112, 255) !important;
	border-color: rgb(169, 112, 255) !important;
	color: #fff !important;

	transition-property: box-shadow, border;
	transition-duration: 0.3s;
	transition-timing-function: ease;
`

export { StyledButton }
