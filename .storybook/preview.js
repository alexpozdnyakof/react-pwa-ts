import { ThemeProvider } from 'styled-components'
import { GlobalStyles, darkTheme, lightTheme} from '../src/ui/styles'

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