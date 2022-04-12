import styled from 'styled-components'

export const StyledTextField = styled.input(({ theme: { space, color } }) => ({
	display: 'block',
	width: '100%',
	height: '32px',
	backgroundColor: `${color.background}`,
	padding: [space.small, space.medium].map(s => `${s}px`).join(' '),
	border: '1px solid #ddd',
	outline: 'none',
	fontSize: '14px',
	borderRadius: '4px',
	color: '#fff',
	'&:focus': {
		borderColor: '#aaaa',
	},
}))
