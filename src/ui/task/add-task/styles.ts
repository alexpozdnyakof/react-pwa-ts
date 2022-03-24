import styled from 'styled-components'

const StyledTaskForm = styled.div`
	background-color: hsla(0, 0%, 0%, 0.1);
	border: 1px solid hsla(0, 0%, 100%, 0.1);
	border-radius: 10px;
	padding: 10px 10px 10px;
	cursor: text;
	margin-bottom: 1rem;
`

const TextArea = styled.textarea`
	width: 100%;
	background-color: transparent;
	border: none;
	outline: none;
	padding: 0;
	color: #fff;
`

const StyledAddTaskButton = styled.button`
	display: flex;
	display: block;
	align-items: center;
	flex-wrap: nowrap;
	white-space: nowrap;
	line-height: 1.25;
	font-size: 1rem;
	color: grey;
	border-radius: 3px;
	color: hsla(0, 0%, 100%, 0.6);
	padding: 12px 8px;

	&:hover {
		color: #a970ff;
	}
`

const ButtonInner = styled.div`
	position: static;
	margin: 0;
	display: inline-flex;
	align-items: center;

	> * {
		margin-left: 0;
		margin-right: 0;
	}

	> * + * {
		margin-left: 0.5rem;
	}
`

const ButtonsStack = styled.div`
	display: flex;
	> * {
		margin-left: 0;
		margin-right: 0;
	}

	> * + * {
		margin-left: 0.5rem;
	}
`

export {
	StyledTaskForm,
	TextArea,
	ButtonInner,
	StyledAddTaskButton,
	ButtonsStack,
}
