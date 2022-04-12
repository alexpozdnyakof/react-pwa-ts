import React from 'react'
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Block } from '../../core/block'
import * as Typography from '../../core/typography'
import { Color, Space } from '../../styles'

function TodoListGrid({ children }: React.PropsWithChildren<{}>) {
	return (
		<Block
			display='grid'
			width='100%'
			gridAutoFlow='column'
			gridTemplateColumns='1fr repeat(3,120px)'
			height='36px'
		>
			{children}
		</Block>
	)
}

function TodoListCell({ children }: React.PropsWithChildren<{}>) {
	return (
		<Block
			height='36px'
			display='flex'
			alignItems='center'
			justifyContent='flex-start'
			whiteSpace='nowrap'
			textOverflow='ellipsis'
			overflow='hidden'
			paddingLeft={Space.small}
			paddingRight={Space.small}
			borderBottomColor={Color.border}
			borderBottomWidth='1px'
			borderBottomStyle='solid'
		>
			{children}
		</Block>
	)
}

export default function TodoList({ children }: React.PropsWithChildren<{}>) {
	return (
		<>
			<TodoListGrid>
				{['Task name', 'Assignee', 'Due date', 'Priority'].map(
					title => (
						<TodoListCell>
							<Typography.Caption color={Color.textWeak}>
								{title}
							</Typography.Caption>
						</TodoListCell>
					)
				)}
			</TodoListGrid>
			<TodoListGrid>
				{[
					'Сделать отправку письма курьеру когда он будет зареган',
					'Alex Pozdnyakof',
					'today',
					'low priority',
				].map(value => (
					<TodoListCell>
						<Typography.Body>{value}</Typography.Body>
					</TodoListCell>
				))}
			</TodoListGrid>
		</>
	)
}
