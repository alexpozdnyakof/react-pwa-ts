import { Surface } from '../../lib/surface'

interface Props {
	projectName: string
}

export default function TodosPage({ projectName }: Props) {
	const title = projectName.concat(' To-dos')
	return <Surface>{title}</Surface>
}
