type ControlBoxShadow = Record<'default' | 'action' | 'focus', string>

const darkDefaultOutline =
	'-1px 0px 0px 1px rgba(207, 199, 210, 0.75), -1px -1px 0px 1px rgba(209, 203, 213, 0.25), -1px 1px 0px 1px rgba(209, 203, 213, 0.25), 0px -1px 0px 1px rgba(211, 207, 216, 0.5), 0px 1px 0px 1px rgba(211, 207, 216, 0.5), 1px -1px 0px 1px #D5D3DB, 1px 1px 0px 1px rgba(213, 211, 219, 0.25), 1px 0px 0px 1px rgba(215, 216, 222, 0.75)'

const darkActionOutline =
	'-1px 0px 0px 1px rgba(173, 211, 86, 0.75), -1px -1px 0px 1px rgba(130, 214, 106, 0.25), -1px 1px 0px 1px rgba(130, 214, 106, 0.25), 0px -1px 0px 1px rgba(87, 217, 126, 0.5), 0px 1px 0px 1px rgba(87, 217, 126, 0.5), 1px -1px 0px 1px rgba(44, 220, 146, 0.25), 1px 1px 0px 1px rgba(44, 220, 146, 0.25), 1px 0px 0px 1px rgba(0, 223, 166, 0.75)'

const getControlBoxShadow = () => ({
	default: darkDefaultOutline,
	action: darkActionOutline,
	focus: 'rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(48 186 108 / 36%) 0px 0px 0px 4px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(48 187 107) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(64 68 82 / 8%) 0px 2px 5px 0px',
})

export type { ControlBoxShadow }
export default getControlBoxShadow
