import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'
import getFiles from '../api/files/get-files'
import File from '../api/files/type'
import postFile from '../api/files/post-file'

interface FilesState {
	files: File[]
	loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}
const initialState: FilesState = {
	files: [],
	loading: 'idle',
}

export const fetchFiles = createAsyncThunk(
	'files/fetch',
	async (name: string | undefined) => {
		const response = await getFiles(name)
		return response.data
	},
)
export const fetchCreateFile = createAsyncThunk(
	'files/create',
	async ({ name, isFile }: { name: string; isFile: boolean }) => {
		const response = await postFile(name, isFile)
		return response.data
	},
)

const filesSlice = createSlice({
	name: 'files',
	initialState,
	reducers: {
		add: (state, { payload }: PayloadAction<File>) => {
			state.files.push(payload)
		},
		remove: (state, { payload }: PayloadAction<number>) => {
			state.files.slice(payload, 1)
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchFiles.fulfilled, (state, action) => {
			state.files = action.payload
		})
		builder.addCase(fetchCreateFile.fulfilled, (state, action) => {
			if (action.payload.type === 'file') {
				state.files = []
				return
			}
			state.files.push(action.payload)
		})
	},
})

export const { add, remove } = filesSlice.actions

export const selectFiles = (state: RootState) => state.files

export default filesSlice
