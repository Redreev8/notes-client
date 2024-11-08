import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from '././store'
import { Provider } from 'react-redux'

import Notes from './pages/notes'
import NoteFile from './pages/note-file'

import './assets/icons/file.svg'
import './assets/icons/file-down.svg'
import './assets/icons/file-minus.svg'
import './assets/icons/file-plus.svg'
import './assets/icons/folder.svg'
import './assets/icons/folder-minus.svg'
import './assets/icons/folder-plus.svg'
import Layout from './pages/layout'

const router = createBrowserRouter([
	{
		path: 'notes/',
		element: (
			<Layout>
				<Notes />
			</Layout>
		),
	},
	{
		path: 'notes/*',
		element: (
			<Layout>
				<Notes />
			</Layout>
		),
	},
	{
		path: 'note-file/*',
		element: (
			<Layout>
				<NoteFile />
			</Layout>
		),
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>,
)
