import { darkTheme, lightTheme, Theme } from './theme'

describe('theme tests', () => {
	it('should create theme', () => {
		console.log(darkTheme)
		expect(darkTheme).toBeDefined()
		expect(lightTheme).toBeDefined()
	})

	it('should have all required properties', () => {
		const required = [
			'space',
			'size',
			'lineHeight',
			'fontWeight',
			'fontSize',
			'color',
			'borderRadius',
			'animation',
		]
		const isAllRequiredKeysInTheme = (theme: Theme): boolean => {
			const themeMap = new Map(Object.entries(theme))
			const result = required.map(prop => themeMap.has(prop))
			return result.every(v => Boolean(v))
		}

		expect(isAllRequiredKeysInTheme(darkTheme)).toBeTruthy()
		expect(isAllRequiredKeysInTheme(lightTheme)).toBeTruthy()
	})
})
