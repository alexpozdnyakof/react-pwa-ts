import styled from 'styled-components'

const StyledTaskForm = styled.div`
	background-color: hsla(0, 0%, 0%, 0.1);
	border: 1px solid hsla(0, 0%, 100%, 0.1);
	border-radius: 10px;
	padding: 10px 10px 10px;
	cursor: text;
`

const TextArea = styled.textarea`
	width: 100%;
	background-color: transparent;
	border: none;
	outline: none;
	padding: 0;
	color: #fff;
`

export { StyledTaskForm, TextArea }
