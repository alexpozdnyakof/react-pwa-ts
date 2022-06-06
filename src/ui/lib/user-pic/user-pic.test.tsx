import UserPic from './user-pic'

describe('UserPic', () => {
	it('should set src', () => {
		const src = 'src'
		const { getByTestId } = renderWithTheme(<UserPic image={src} />)
		expect(getByTestId('userpic')).toHaveAttribute('src', src)
	})
})
