import styled from 'styled-components'

const CheckboxContainer = styled.div`
	display: flex;
	align-items: center;
	> * {
		margin-left: 0;
		margin-right: 0;
	}

	> * + * {
		margin-left: 0.5rem;
	}
`
const Svg = styled.svg`
	display: block;
	border: 1px solid transparent;
	height: 16px;
	width: 16px;
	margin-left: -8px;
	transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
	margin-top: -8px;
	pointer-events: none;
	color: currentColor;
	box-sizing: content-box;
`
const CheckboxButton = styled.button<{ checked: boolean }>`
	width: 24px;
	height: 24px;
	cursor: pointer;
	position: relative;
	user-select: none;
	display: flex;
	flex-shrink: 0;
	align-items: center;
	justify-content: center;
	color: hsl(0deg 0% 100% / 87%);
	${Svg} {
		opacity: ${props => (props.checked ? 1 : 0)};
	}
	&:hover ${Svg} {
		opacity: 1;
	}
	::before {
		content: '';
		position: absolute;
		top: -4px;
		right: -4px;
		bottom: -4px;
		left: -4px;
	}
`

const CheckboxCircle = styled.div`
	height: 16px;
	width: 16px;
	border: 1px solid #dcdcdc;
	border-radius: 6px;
	box-sizing: content-box;
	overflow: hidden;
	display: flex;
	flex-shrink: 0;
	align-items: center;
	justify-content: center;
	${CheckboxButton}:hover & {
		background-color: hsla(0, 0%, 50.2%, 0.2);
	}
`

export { CheckboxContainer, Svg, CheckboxButton, CheckboxCircle }
