import styled from 'styled-components'
import { WithStyledTheme } from '../../styles'

/**
 * Зачем нужен блок?
 * Чтобы пробросить токены: цвета, шрифт
 */

interface Props {
	width?: string
	height?: string
}

export const BaseBlock = styled.div(
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	({ theme, width, height }: WithStyledTheme<Props>) => ({
		width,
		height,
	})
)
