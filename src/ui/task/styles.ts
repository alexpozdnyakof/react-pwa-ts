import styled from 'styled-components'

const TaskWrapper = styled.div`
	width: 100%;
	position: relative;
	z-index: 1;
	display: flex;
	align-items: flex-start;
	border-radius: 7px;
	overflow: hidden;
	mask-image: radial-gradient(white, black);
	transition: background 0.15s linear;
	padding: 6px 8px;
	margin-left: -8px;

	::before {
		content: '';
		position: absolute;
		width: 32px;
		height: 6px;
		right: 100%;
		top: -11px;
		border-radius: 50%;
		box-shadow: 0 4px 4px var(--color-switch-checked);
		transform: translateX(var(--blur-x, 0));
		opacity: var(--blur-o, 0);
		transition: opacity 0.15s, transform 1.2s;
	}
	:hover {
		--blur-x: 372px;
		--blur-o: 1;

		background-color: ${({ theme }) => theme.color.backgroundHover};
	}
`

const TaskStack = styled.div`
	> * {
		margin-left: 0;
		margin-right: 0;
	}

	> * + * {
		margin-top: 0.25rem;
	}
`

const ListTitleContainer = styled.div`
	padding-top: ${({ theme }) => `${theme.space.xlarge}`};
	padding-bottom: ${({ theme }) => `${theme.space.large}`};
	margin: 0 auto;
`
export { TaskWrapper, TaskStack, ListTitleContainer }
