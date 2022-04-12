import {
	FontSize,
	Space,
	BorderRadius,
	Color,
	LineHeight,
	Size,
} from './tokens'

interface Theme {
	color: Record<Color, string>
	fontSize: Record<FontSize, string>
	space: Record<Space, string>
	borderRadius: Record<BorderRadius, string>
	lineHeight: Record<LineHeight, string>
	size: Record<Size, string>
	buttonHeight: { [Size.medium]: string; [Size.large]: string }
	buttonPadding: { [Size.medium]: string; [Size.large]: string }
}

const darkTheme = ((): Theme => ({
	buttonHeight: {
		[Size.medium]: '24px',
		[Size.large]: '36px',
	},
	buttonPadding: {
		[Size.medium]: '8px',
		[Size.large]: '16px',
	},
	color: {
		[Color.text]: '#f5f4f3',
		[Color.textDisabled]: '#6a696a',
		[Color.textWeak]: 'a2a0a2',
		[Color.textWeakHover]: '#f5f4f3',
		[Color.icon]: '#a2a0a2',
		[Color.iconHover]: '#f5f4f3',
		[Color.border]: '#424244',
		[Color.borderHover]: '#6a696a',
		[Color.borderActive]: '#a2a0a2',
		[Color.borderStrong]: '#f5f4f3',

		[Color.backgroundHover]: 'rgba(255, 255, 255, 0.06)',
		[Color.backgroundActive]: 'rgba(255, 255, 255, 0.11)',
		[Color.backgroundWeak]: '#2e2e30',
		[Color.background]: '#1e1f21',
		[Color.backgroundMedium]: '#363639',
		[Color.backgroundStrong]: '#424244',

		[Color.darkText]: '#1e1f21',
		[Color.darkTextDisabled]: '#afabac',

		[Color.darkBackgroundHover]: 'rgba(55, 23, 23, 0.03)',
		[Color.darkBackgroundActive]: 'rgba(55, 23, 23, 0.05)',
	},

	fontSize: {
		[FontSize.small]: '12px',
		[FontSize.body]: '14px',
		[FontSize.medium]: '16px',
		[FontSize.large]: '20px',
		[FontSize.xlarge]: '24px',
	},
	lineHeight: {
		[LineHeight.small]: '16px',
		[LineHeight.body]: '20px',
		[LineHeight.medium]: '24px',
		[LineHeight.large]: '28px',
		[LineHeight.xlarge]: '32px',
	},

	space: {
		[Space.xsmall]: '4px',
		[Space.small]: '8px',
		[Space.medium]: '12px',
		[Space.large]: '16px',
		[Space.xlarge]: '24px',
		[Space.xxlarge]: '32px',
	},
	borderRadius: {
		[BorderRadius.small]: '2px',
		[BorderRadius.medium]: '4px',
		[BorderRadius.large]: '8px',
	},
	size: {
		[Size.micro]: '2px',
		[Size.xsmall]: '4px',
		[Size.small]: '8px',
		[Size.normal]: '12px',
		[Size.medium]: '16px',
		[Size.large]: '20px',
		[Size.xlarge]: '24px',
		[Size.xxlarge]: '32px',
		[Size.xxxlarge]: '36px',
	},
}))()

export { darkTheme }
export type { Theme }
