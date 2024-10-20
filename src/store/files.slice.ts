import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'
import getFiles from '../api/files/get-files'

interface FilesState {
	files: string[]
	loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}
const initialState: FilesState = {
	files: [],
	loading: 'idle'
}

export const fetchFiles = createAsyncThunk(
	'files/fetch',
	async () => {
	  const response = await getFiles()
	  return response.data
	},
)

const filesSlice = createSlice({
	name: 'files',
	initialState,
	reducers: {
		add: (state, { payload }: PayloadAction<string>) => {
			state.files.push(payload)
		},
		change: (state, action: PayloadAction<{ i: number, name: string }>) => {
			const { i, name } = action.payload
			state.files[i] = name
		},
		remove: (state, { payload }: PayloadAction<number>) => {
			state.files.slice(payload, 1)
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchFiles.fulfilled, (state, action) => {
			state.files = action.payload
		})
	},
})

export const { add, remove, change } = filesSlice.actions

export const selectFiles = (state: RootState) => state.files

export default filesSlice
