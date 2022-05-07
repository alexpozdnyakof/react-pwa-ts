import { ThemeProvider } from 'styled-components'
import { GlobalStyles, } from '../src/ui/styles'
import { darkTheme } from '../src/ui/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  Story => (
    <ThemeProvider theme={darkTheme}>
      <Story/>
      <GlobalStyles />
    </ThemeProvider>
  )
]