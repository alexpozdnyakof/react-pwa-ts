import { TaskData } from '../../domain'

export type TaskDTO = Pick<TaskData, 'text'>
