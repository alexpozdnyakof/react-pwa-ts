/* eslint-disable @typescript-eslint/no-unused-vars */

import styled from 'styled-components'
import { BorderRadius, Kind, Size, Space, WithStyledTheme } from '../../styles'
import { BoxShadow } from '../../styles/tokens/box-shadow'

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

const BaseButton = styled.button(({ theme, disabled }) => ({
	position: 'relative' as 'relative',
	display: 'inline-flex',
	flexDirection: 'row' as 'row',
	alignItems: 'center',
	justifyContent: 'center',
	border: '1px solid transparent',
	textDecoration: 'none',
	width: 'max-content',

	// paddingLeft: theme.space[Space.small],
	// paddingRight: theme.space[Space.small],
	// height: theme.size[Size.xlarge],
	// borderRadius: theme.borderRadius[BorderRadius.large],
	// boxShadow: theme.boxShadow[BoxShadow.inactive],
	// pointerEvents: disabled ? 'none' : 'auto',
	// cursor: disabled ? 'not-allowed' : 'pointer',
	// transition: `box-shadow ease ${theme.animation.time}ms ,background-color ease ${theme.animation.time}ms`,
	'&:before': {
		content: '""',
		position: 'absolute' as 'absolute',
		top: '-8px',
		right: '-8px',
		bottom: '-8px',
		left: '-8px',
	},
	// '> *:not(:empty) + *:not(:empty)': {
	// 	marginLeft: theme.space[Space.small],
	// },
	// '&:hover': {
	// 	backgroundColor: 'rgb(40 246 129 / 25%)',
	// 	boxShadow: theme.boxShadow[BoxShadow.active],
	// },
}))

export { StyledButton, BaseButton }
