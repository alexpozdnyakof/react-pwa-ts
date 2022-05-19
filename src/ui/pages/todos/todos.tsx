import { Stack, Surface } from '../../layout'
import { Block, Button, Text } from '../../lib'
import { useTodoState } from './state'
import { TodoList } from './todo-list'

export default function TodosPage() {
	const { state } = useTodoState()

	const addNewList = () => {
		console.log('add new list')
	}

	return (
		<Surface>
			<Block width={840} m='0 auto'>
				<Stack space={4}>
					<Stack space={1}>
						<Text
							size='huge'
							line={32}
							weight='bold'
							spacing={-0.03}
						>
							{state?.projectName}
						</Text>
						<Button onClick={addNewList} variant='link'>
							Add new list
						</Button>
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
