import { TODO_LISTS } from '../../../data/todo-list'
import { Stack, Surface } from '../../layout'
import { Block, Button, Text } from '../../lib'
import { TodoList } from './todo-list'

interface Props {
	projectName: string
}

export default function TodosPage({ projectName }: Props) {
	const title = projectName.concat(' To-dos')
	const addNewList = () => {
		console.log('add new list')
	}
	const todolists = TODO_LISTS

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
							{title}
						</Text>
						<Button onClick={addNewList} variant='link'>
							Add new list
						</Button>
					</Stack>
					{todolists.map(list => (
						<TodoList {...list} />
					))}
				</Stack>
			</Block>
		</Surface>
	)
}
