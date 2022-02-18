import React from 'react'
import './Stack.scss'

function Stack({ children }: { children: Array<React.ReactNode> }) {
	return <div className='stack'>{children}</div>
}

export { Stack }
