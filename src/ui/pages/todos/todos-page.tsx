import { Stack, Surface } from '../../layout'
import { Block, Button, Typography } from '../../lib'
import { FormToggle, TitleForm } from './form'
import { useTodoState } from './state'
import { TodoList } from './todo-list'

export default function TodosPage() {
	const { state } = useTodoState()

	return (
		<Surface>
			<Block m='0 auto'>
				<Stack space={4}>
					<Stack space={1}>
						<Typography variant='page-title'>
							{state?.projectName}
						</Typography>

						<FormToggle onSubmit={t => console.log({ t })}>
							<Button variant='link'>Add new list</Button>
							<TitleForm placeholder='Type list title' mt={8} />
						</FormToggle>
					</Stack>
					{state?.lists.map(list => (
						<TodoList
							{...list}
							key={list.type.concat(list.id.toString())}
						/>
					))}
				</Stack>
			</Block>
		</Surface>
	)
}
