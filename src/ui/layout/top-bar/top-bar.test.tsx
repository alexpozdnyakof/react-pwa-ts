import { renderWithTheme } from '../../helpers'
import TopBar from './top-bar'

describe('TopBar', () => {
	const testId = 'top-bar'
	it('should render sucessfully', () => {
		const { getByTestId } = renderWithTheme(<TopBar testId={testId} />)
		expect(getByTestId('top-bar')).toBeInTheDocument()
	})

	it('should render logo', () => {
		const { getByTestId } = renderWithTheme(<TopBar testId={testId} />)
		expect(getByTestId('logo')).toBeInTheDocument()
	})

	it('should render userpic', () => {
		const { getByTestId } = renderWithTheme(<TopBar testId={testId} />)
		expect(getByTestId('userpic')).toBeInTheDocument()
	})
	it('should set absolute position', () => {
		const { getByTestId } = renderWithTheme(
			<TopBar testId={testId} overlay='overlay' />
		)
		expect(getByTestId('top-bar')).toHaveStyle({ position: 'absolute' })
	})
	it('should set absolute sticky', () => {
		const { getByTestId } = renderWithTheme(
			<TopBar testId={testId} overlay='sticky' />
		)
		expect(getByTestId('top-bar')).toHaveStyle({ position: 'sticky' })
	})
})
