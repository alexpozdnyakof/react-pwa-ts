export type TaskTag = {
	id: number
	text: string
}

export type TaskData = {
	id: number
	text: string
	done: boolean
	duedate?: string
	tags?: Array<TaskTag>
}
