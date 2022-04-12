/* eslint-disable @typescript-eslint/no-unused-vars */

import styled from 'styled-components'
import { Kind, Size, Space } from '../../styles'

import { ButtonProps } from './type'

const StyledButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 32px;
	height: 32px;
	padding: 0 10px;
	border-radius: 6px;
	border: 1px solid;
	color: #fff !important;

	transition-property: box-shadow, border;
	transition-duration: 0.3s;
	transition-timing-function: ease;
`

function getKindStyles(theme: any, kind: Kind) {
	const fontColors = {
		[Kind.primary]: theme.colors.onPrimary,
		[Kind.secondary]: theme.colors.onSecondary,
		[Kind.tertiary]: theme.colors.onTertiary,
	}
	return {
		backgroundColor: theme.colors[kind],
		color: fontColors[kind],
		'&:hover': {
			backgroundColor: theme.colors[`${kind}Hover`],
		},
		'&:active': {
			backgroundColor: theme.colors[`${kind}Active`],
		},
	}
}

function getSizeStyles(theme: any, size: Size) {
	return {
		height: theme.buttonHeight[size],
		padding: `0 ${theme.buttonPadding[size]}`,
	}
}

function getShape(theme: any, size: Size) {
	// const radius = {
	// 	[Size.mini]: BorderRadius.mini,
	// 	[Size.default]: BorderRadius.default,
	// }[size]
	return {
		borderRadius: '12',
	}
}

const BaseButton = styled.button(
	({
		theme,
	}: // kind = Kind.primary,
	// size = Size.default,
	ButtonProps & { theme: any }) => ({
		position: 'relative' as 'relative',
		display: 'inline-flex',
		flexDirection: 'row' as 'row',
		alignItems: 'center',
		justifyContent: 'center',
		border: '1px solid transparent',
		textDecoration: 'none',
		cursor: 'pointer',
		// ...getKindStyles(theme, kind),
		// ...getSizeStyles(theme, size),
		// ...getShape(theme, size),
		transition: 'border-color ease .15s,background-color ease .15s',
		'&:before': {
			content: '""',
			position: 'absolute' as 'absolute',
			top: '-8px',
			right: '-8px',
			bottom: '-8px',
			left: '-8px',
		},
		'> *:not(:empty) + *:not(:empty)': {
			marginLeft: theme.space[Space.small],
		},
	})
)

export { StyledButton, BaseButton }
