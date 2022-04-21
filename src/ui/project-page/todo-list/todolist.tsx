import React from 'react'
import styled from 'styled-components'
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Block, BlockProps } from '../../core/block'
import Typography from '../../core/typography'
import { Color, Space } from '../../styles'
import SpreadSheetBodyRow from './body-row'
import TodoListCell from './todo-cell'
import TodoComplete from './todo-complete'
import TodoDescriptionField, {
	EditableDescription,
} from './todo-description-field'

const TodoRow = styled(Block)`
	&:hover {
		background-color: ${({ theme }) => theme.color[Color.backgroundWeak]};
		${EditableDescription} {
			border-color: ${({ theme }) => theme.color[Color.borderActive]};
		}
	}
`

function TodoListGrid({ children }: React.PropsWithChildren<{}>) {
	return (
		<TodoRow
			display='grid'
			width='100%'
			gridAutoFlow='column'
			gridTemplateColumns='2fr 1fr'
		>
			{children}
		</TodoRow>
	)
}

function TodoListSplitGrid({ children }: React.PropsWithChildren<{}>) {
	return (
		<Block
			display='grid'
			width='100%'
			gridAutoFlow='column'
			gridTemplateColumns='repeat(auto-fit, minmax(120px, 1fr))'
		>
			{children}
		</Block>
	)
}

function TodoCellsScrollContainer({ children }: React.PropsWithChildren<{}>) {
	return (
		<Block width='max-content' whiteSpace='nowrap' overflow='scroll'>
			{children}
		</Block>
	)
}

function TodoListSplit({ children }: React.PropsWithChildren<{}>) {
	const splitProps = {
		position: 'relative',
	} as Partial<BlockProps>
	return <Block {...splitProps}>{children}</Block>
}

function TodoOrderControl() {
	const styles = {
		borderBottomWidth: '1px',
		borderBottomStyle: 'solid',
		borderBottomColor: Color.background,
		position: 'absolute',
		display: 'flex',
		alignItems: 'center',
		top: '0',
		left: '0',
		width: '24px',
		height: '36px',
		zIndex: 1,
	} as Partial<BlockProps>
	return <Block {...styles} />
}

export default function TodoList({ children }: React.PropsWithChildren<{}>) {
	function onInput(e: any) {
		console.log({ e })
	}
	return (
		<>
			<TodoListGrid>
				<TodoListCell paddingLeft={Space.xlarge}>
					<TodoOrderControl />
					<Typography.Caption color={Color.textWeak} width='24px'>
						#
					</Typography.Caption>
					<Typography.Caption color={Color.textWeak}>
						Task name
					</Typography.Caption>
				</TodoListCell>

				<TodoListSplit>
					<TodoListSplitGrid>
						{['Assignee', 'Due date', 'Priority'].map(title => (
							<TodoListCell>
								<Typography.Caption color={Color.textWeak}>
									{title}
								</Typography.Caption>
							</TodoListCell>
						))}
					</TodoListSplitGrid>
				</TodoListSplit>
			</TodoListGrid>
			<SpreadSheetBodyRow />
			<TodoListGrid>
				<TodoListCell paddingLeft={Space.xlarge}>
					<TodoOrderControl />
					<Typography.Caption color={Color.textWeak} width='32px'>
						1
					</Typography.Caption>

					<TodoComplete complete={false} />
					<TodoDescriptionField
						value='Сделать отправку письма курьеру когда он будет зареган'
						onInput={e => onInput(e)}
					/>
				</TodoListCell>

				<TodoListSplit>
					<TodoListSplitGrid>
						{['Alex Pozdnyakof', 'today', 'low priority'].map(
							value => (
								<TodoListCell>
									<Typography.Body>{value}</Typography.Body>
								</TodoListCell>
							)
						)}
					</TodoListSplitGrid>
				</TodoListSplit>
			</TodoListGrid>
		</>
	)
}

enum TodoPriority {
	low = 'low priority',
	medium = 'medium priority',
	high = 'high priority',
}
interface Todo {
	id: number
	text: string
	done: boolean
	duedate: string
	priority: TodoPriority
}
