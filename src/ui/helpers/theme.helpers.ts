import { Space, Theme } from '../styles'

function convertSpaceTokensToPixels<
	T extends Record<string, Space | undefined>
>(space: Theme['space'], withTokens: T): Record<keyof T, string> {
	const entries = Object.entries(withTokens).filter(
		([, value]) => value !== undefined
	) as unknown as Array<[keyof T, Space]>
	const withPixels = entries.map(([key, value]) => [key, space[value]])

	return Object.fromEntries(withPixels)
}

export { convertSpaceTokensToPixels }
