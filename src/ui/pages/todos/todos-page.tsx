import { Container, Stack } from '../../layout'
import { Block, Button, Typography } from '../../lib'
import { addTodoList } from './actions'
import { useTodoState } from './context'
import { FormToggle, TitleForm } from './form'
import { TodoList } from './todo-list'

export default function TodosPage() {
	const { state, dispatch } = useTodoState()

	return (
		<Container>
			<Block
				m='0 auto'
				pt={48}
				pl={124}
				pr={124}
				pb={56}
				testId='todo-page'
			>
				<Stack space={4}>
					<Stack space={1}>
						<Typography variant='page-title'>
							{state?.projectName}
						</Typography>

						<FormToggle
							onSubmit={(title: string) =>
								dispatch(addTodoList(title))
							}
						>
							<Button variant='link'>Add new list</Button>
							<TitleForm placeholder='Type list title' mt={8} />
						</FormToggle>
					</Stack>

					<Stack space={3}>
						{state?.lists.map(list => (
							<TodoList
								{...list}
								key={list.type.concat(list.id.toString())}
							/>
						))}
					</Stack>
				</Stack>
			</Block>
		</Container>
	)
}
