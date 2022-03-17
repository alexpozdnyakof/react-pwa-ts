import styled, { css } from 'styled-components'

const TaskWrapper = styled.div`
	position: relative;
	z-index: 1;
	display: flex;
	align-items: flex-start;
	border-radius: 7px;
	overflow: hidden;
	mask-image: radial-gradient(white, black);
	transition: background 0.15s linear;
	padding: 12px 8px;
	margin-left: -8px;

	> * {
		margin-left: 0;
		margin-right: 0;
	}

	> * + * {
		margin-left: 0.5rem;
	}
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

		background-color: rgb(44 44 49);
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

const TaskText = styled.div<{ checked: boolean }>`
	line-height: 24px;
	display: inline-block;
	position: relative;
	color: ${({ checked }) =>
		checked ? 'hsla(0,0%,100%,0.4)' : 'currentColor'};
	${({ checked }) =>
		checked &&
		css`
			::before {
				content: '';
				position: absolute;
				height: 1px;
				left: -2px;
				right: -2px;
				top: 50%;
				transform-origin: 0 50%;
				transform: translateY(-50%) scaleX(1) translateZ(0);
				background: currentColor;
			}
		`};
`
export { TaskWrapper, TaskStack, TaskText }
