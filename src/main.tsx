import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from '././store'
import { Provider } from 'react-redux'

import Notes from './pages/notes'
import NoteFile from './pages/note-file'

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
	{
		path: 'note-file/*',
		element: <NoteFile />,
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<div>
				<RouterProvider router={router} />
			</div>
		</Provider>
	</StrictMode>,
)
