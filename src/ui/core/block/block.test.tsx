import { cleanup, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import Block from './block'

afterEach(cleanup)

describe('Block', () => {
	it('should render div', () => {
		const { getByTestId } = render(<Block />)
		expect(getByTestId).toBeDefined()
	})

	it('should set props', () => {
		const props = {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'space-between',
			alignItems: 'center',
		} as any

		const { getByTestId } = render(<Block {...props} />)

		expect(getByTestId('StyledBlock')).toHaveStyle({
			display: 'flex',
			'flex-direction': 'row',
			'flex-wrap': 'wrap',
			'justify-content': 'space-between',
			'align-items': 'center',
		})
	})

	it('should set flex specify properties when display flex', () => {
		const props = {
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'space-between',
			alignItems: 'center',
		} as any

		const { getByTestId } = render(<Block {...props} />)

		expect(getByTestId('StyledBlock')).toHaveStyle(props)
	})

	it('should not set flex specify properties when not display flex', () => {
		const props = {
			display: 'block',
			flexDirection: 'row',
			flexWrap: 'wrap',
			justifyContent: 'space-between',
			alignItems: 'center',
		} as any

		const { getByTestId } = render(<Block {...props} />)

		expect(getByTestId('StyledBlock')).not.toHaveStyle(props)
	})

	it('should  set grid specify properties when  display grid', () => {
		const props = {
			display: 'grid',
			gridAutoFlow: 'row',
			gap: '12px',
			rowGap: '12px',
			columnGap: '12px',
			gridTemplateColumns: 'repeat(12, 1fr);',
		} as any

		const { getByTestId } = render(<Block {...props} />)

		expect(getByTestId('StyledBlock')).toHaveStyle({
			'grid-auto-flow': 'row',
			gap: '12px',
			'row-gap': '12px',
			'column-gap': '12px',
			'grid-template-columns': 'repeat(12,1fr)',
		})
	})

	it('should not set grid specify properties when not display grid', () => {
		const props = {
			display: 'block',
			gridAutoFlow: 'row',
			gridGap: '12px',
			rowGap: '12px',
			columnGap: '12px',
			gridTemplateColumns: 'repeat(12, 1fr);',
		} as any

		const { getByTestId } = render(<Block {...props} />)

		expect(getByTestId('StyledBlock')).not.toHaveStyle({
			'grid-auto-flow': 'row',
			gap: '12px',
			'row-gap': '12px',
			'column-gap': '12px',
			'grid-template-columns': 'repeat(12,1fr)',
		})
	})
})
