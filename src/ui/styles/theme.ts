import {
	Animation,
	FontSize,
	Space,
	BorderRadius,
	Color,
	LineHeight,
	Size,
	Width,
} from './tokens'

interface Theme {
	color: Record<Color, string>
	fontSize: Record<FontSize, string>
	space: Record<Space, string>
	borderRadius: Record<BorderRadius, string>
	lineHeight: Record<LineHeight, string>
	size: Record<Size, string>
	width: Record<Width, string>
	animation: {
		[Animation.time]: number
	}

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
		[Color.transparent]: 'transparent',
		[Color.text]: '#f5f4f3',

		[Color.textDisabled]: '#6a696a',
		[Color.textWeak]: '#a2a0a2',
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

		[Color.successText]: '#86bca4',
		[Color.successTextHover]: '#afd6c6',
		[Color.successTextStrong]: '#1e1f21',

		[Color.successIcon]: '#5da283',
		[Color.successIconHover]: '#86bca4',
		[Color.successIconStrong]: '#1e1f21',

		[Color.successBorder]: '#32695d',
		[Color.successBorderHover]: '#5da283',

		[Color.successBackground]: '#192c29',
		[Color.successBackgroundHover]: '#21433d',
		[Color.successBackgroundActive]: '#244c45',
		[Color.successBackgroundStrong]: '#5da283',
		[Color.successBackgroundStrongHover]: '#5a9b7e',
		[Color.successBackgroundStrongActive]: '#559377',
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
		[Space.zero]: '0px',
		[Space.micro]: '2px',
		[Space.xsmall]: '4px',
		[Space.small]: '8px',
		[Space.normal]: '12px',
		[Space.medium]: '16px',
		[Space.large]: '20px',
		[Space.xlarge]: '24px',
		[Space.xxlarge]: '32px',
		[Space.xxxlarge]: '36px',
	},
	borderRadius: {
		[BorderRadius.small]: '2px',
		[BorderRadius.medium]: '4px',
		[BorderRadius.large]: '8px',
	},
	width: {
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
	size: {
		[Size.zero]: '0px',
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
	animation: {
		[Animation.time]: 200,
	},
}))()

export { darkTheme }
export type { Theme }
