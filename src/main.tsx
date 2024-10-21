import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from '././store'
import { Provider } from 'react-redux'

import Notes from './pages/notes'

import './assets/icons/file.svg'
import './assets/icons/folder.svg'

const router = createBrowserRouter([
	{
		path: 'notes/',
		element: <Notes />,
	},
	{
		path: 'notes/*',
		element: <Notes />,
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<>
				<RouterProvider router={router} />
			</>
		</Provider>
	</StrictMode>,
)
