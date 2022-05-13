type ControlBoxShadow = Record<'default' | 'action', string>

const darkDefaultOutline =
	'-1px 0px 0px 1px rgba(207, 199, 210, 0.75), -1px -1px 0px 1px rgba(209, 203, 213, 0.25), -1px 1px 0px 1px rgba(209, 203, 213, 0.25), 0px -1px 0px 1px rgba(211, 207, 216, 0.5), 0px 1px 0px 1px rgba(211, 207, 216, 0.5), 1px -1px 0px 1px #D5D3DB, 1px 1px 0px 1px rgba(213, 211, 219, 0.25), 1px 0px 0px 1px rgba(215, 216, 222, 0.75)'

const darkActionOutline =
	'-1px 0px 0px 1px rgba(173, 211, 86, 0.75), -1px -1px 0px 1px rgba(130, 214, 106, 0.25), -1px 1px 0px 1px rgba(130, 214, 106, 0.25), 0px -1px 0px 1px rgba(87, 217, 126, 0.5), 0px 1px 0px 1px rgba(87, 217, 126, 0.5), 1px -1px 0px 1px rgba(44, 220, 146, 0.25), 1px 1px 0px 1px rgba(44, 220, 146, 0.25), 1px 0px 0px 1px rgba(0, 223, 166, 0.75)'

const getControlBoxShadow = () => ({
	default: darkDefaultOutline,
	action: darkActionOutline,
})

export type { ControlBoxShadow }
export default getControlBoxShadow
