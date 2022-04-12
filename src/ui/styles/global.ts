import { createGlobalStyle } from 'styled-components'
import { Normalize } from './normalize'
import { Color } from './tokens'

export default createGlobalStyle`
body{
  font-family: -apple-system, system-ui, 'Segoe UI', roboto, noto,
		oxygen-sans, ubuntu, cantrell, 'Helvetica Neue', sans-serif,
		'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-size-adjust: 100%;
	  color: #fff;
	  background-color: ${({ theme }: any) => theme.color[Color.background]};
	  height: 100%;
}
code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
		monospace;
}

*,
*::before,
*::after {
	box-sizing: border-box;
}

html,
body,
div,
header,
nav,
main,
footer {
	max-width: none;
}

button,
input,
optgroup,
select,
textarea {
	font-family: inherit; /* 1 */
	font-size: 100%; /* 1 */
	line-height: 1.15; /* 1 */
	margin: 0; /* 2 */
}
button {
	font-family: inherit;
	text-decoration: none;
	cursor: pointer;
	background-color: transparent;
	border: none;
	padding: 0;
	margin: 0;
}
${Normalize}

`