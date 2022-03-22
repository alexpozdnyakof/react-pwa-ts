import styled from 'styled-components'

const TagButton = styled.button`
	display: flex;
	display: block;
	align-items: center;
	flex-wrap: nowrap;
	white-space: nowrap;
	height: 16px;
	line-height: 16px;
	font-size: 12px;
	color: grey;
	border-radius: 3px;
`

const TagInner = styled.div`
	line-height: 12px;
	position: static;
	margin: 0;
	font-size: 12px;
	display: inline-flex;
	align-items: center;
	color: hsla(0, 0%, 100%, 0.6);
	> * {
		margin-left: 0;
		margin-right: 0;
	}

	> * + * {
		margin-left: 0.15rem;
	}
`

const TagsStack = styled.div`
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

export { TagButton, TagInner, TagsStack }
