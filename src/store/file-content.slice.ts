import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'
import getFileContent, { FileContent } from '../api/files/get-file-content'

interface FileContentState {
	content: FileContent | null
	loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}
const initialState: FileContentState = {
	content: null,
	loading: 'idle',
}

export const fetchFileContent = createAsyncThunk(
	'files/fetch',
	async (patch: string[]) => {
		const response = await getFileContent(patch)
		return response.data
	},
)

const fileContentSlice = createSlice({
	name: 'fileContent',
	initialState,
	reducers: {
		add: (state, { payload }: PayloadAction<FileContent>) => {
			state.content = payload
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchFileContent.fulfilled, (state, action) => {
			state.content = action.payload
		})
	},
})

export const { add } = fileContentSlice.actions

export const selectFileContent = (state: RootState) => state.fileContent.content

export default fileContentSlice
