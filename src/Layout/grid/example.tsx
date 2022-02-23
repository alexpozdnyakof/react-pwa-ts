import { Card } from '../../Surfaces'
import { Cell } from './cell'
import { LayoutGrid } from './grid'

function LayoutGridExample() {
	return (
		<div className='container'>
			<div style={{ padding: '56px 0' }}>
				<LayoutGrid>
					{[1, 2, 3, 4, 5, 6].map(el => (
						<Cell span={3}>
							<Card backgroundColor='#04009A'>
								<div
									style={{
										height: '64px',
										display: 'flex',
										color: '#ffffff',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									{el}
								</div>
							</Card>
						</Cell>
					))}
				</LayoutGrid>
			</div>
			<div
				style={{
					position: 'absolute',
					left: 0,
					top: 0,
					width: '100%',
					zIndex: -1,
					padding: '0 1em',
				}}
			>
				<LayoutGrid>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(el => (
						<div
							className='box'
							style={{
								height: '100vh',
								color: 'rgb(16, 44, 96)',
								backgroundColor: 'rgb(160, 191, 248)',
							}}
						>
							{el}
						</div>
					))}
				</LayoutGrid>
			</div>
		</div>
	)
}

export { LayoutGridExample }
