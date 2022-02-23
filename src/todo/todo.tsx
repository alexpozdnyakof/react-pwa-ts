import './todo.scss'

export type TodoProps = {
	id: number
	title: string
	date: Date
	done: boolean
}

export function Todo({ title, date, done, id }: TodoProps) {
	return (
		<div className='todo'>
			<div>
				{id} {done}
			</div>
			<div className='todo__title'>{title}</div>
			<div className='todo__date'>{date.toString()}</div>
		</div>
	)
}
