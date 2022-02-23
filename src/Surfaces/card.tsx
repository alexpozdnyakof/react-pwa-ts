import './card.scss'
import React from 'react'

function Card({
	children,
	backgroundColor = '#ffffff',
}: Partial<{
	children: React.ReactNode | Array<React.ReactNode>
	backgroundColor: string
}>) {
	return (
		<div className='card' style={{ backgroundColor }}>
			{children}
		</div>
	)
}

export { Card }
