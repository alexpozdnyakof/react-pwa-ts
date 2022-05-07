import 'styled-components'
import { VisualTheme } from './ui/theme'

declare module 'styled-components' {
	export interface DefaultTheme extends VisualTheme {}
}
