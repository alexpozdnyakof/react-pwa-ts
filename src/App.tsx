import { lazy, PropsWithChildren, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { TopBar } from './ui/layout'
import { Block } from './ui/lib'

const TodosPage = lazy(
	() =>
		import(
			/* webpackChunkName: "TodosPage", webpackPrefetch: true  */ './ui/pages/todos/todos-page'
		)
)
const SignInPage = lazy(
	() =>
		import(
			/* webpackChunkName: "SignInPage", webpackPrefetch: true  */ './ui/pages/sign-in/sign-in'
		)
)
const SignUpPage = lazy(
	() =>
		import(
			/* webpackChunkName: "SignUpPage", webpackPrefetch: true  */ './ui/pages/sign-up/sign-up'
		)
)

const SuspendedRoute = ({ children }: PropsWithChildren<{}>) => (
	<Suspense fallback={<Block>Loading ...</Block>}> {children}</Suspense>
)

function App() {
	return (
		<>
			<TopBar overlay='overlay' />
			<SuspendedRoute>
				<Routes>
					<Route path='/todos' element={<TodosPage />} />
					<Route path='/sign-in' element={<SignInPage />} />
					<Route path='/sign-up' element={<SignUpPage />} />
				</Routes>
			</SuspendedRoute>
		</>
	)
}

export default App
