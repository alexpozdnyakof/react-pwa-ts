import { Theme } from './theme'

type WithStyledTheme<T> = T & { theme: Theme }

export type { WithStyledTheme }
