/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components'
import { BorderRadius, Color, Size, WithStyledTheme } from '../../styles'
import { BoxShadow } from '../../styles/tokens/box-shadow'

const StyledCheckbox = styled.button(
	({
		theme,
		checked,
		disabled,
	}: WithStyledTheme<{ checked: boolean; disabled: boolean }>) => ({
		// width: theme.size[Size.small],
		// height: theme.size[Size.small],
		borderWidth: '1px',
		borderStyle: 'solid',
		borderRadius: theme.borderRadius[BorderRadius.large],
		borderColor: 'transparent',
		// backgroundColor: checked ? theme.color[Color.action] : 'transparent',
		// boxShadow: checked
		// 	? theme.boxShadow[BoxShadow.active]
		// 	: theme.boxShadow[BoxShadow.inactive],
		color: theme.color[Color.white],
		position: 'relative' as 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		cursor: disabled ? 'not-allowed' : 'pointer',
		// transition: `box-shadow ease ${theme.animation.time}ms ,background-color ease ${theme.animation.time}ms`,
		'&:hover': {
			backgroundColor:
				disabled || checked ? undefined : 'rgb(40 246 129 / 25%)',
			boxShadow:
				disabled || checked
					? undefined
					: theme.boxShadow[BoxShadow.active],
		},
		'&:before': {
			content: '""',
			position: 'absolute' as 'absolute',
			top: '-8px',
			right: '-8px',
			bottom: '-8px',
			left: '-8px',
		},
	})
)

// const CheckboxWithLogic = styled(StyledCheckbox)`

// 	box-shadow:  ${({ checked }) =>
// 		checked ? boxShadow.activeDark : boxShadow.inactive},
// `
export { StyledCheckbox }
