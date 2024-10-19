import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Notes from './pages/notes'

import './assets/icons/file.svg'
import './assets/icons/folder.svg'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Notes />,
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)
