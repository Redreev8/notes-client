import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'
import getFileContent, { FileContent } from '../api/files/get-file-content'
import { AxiosError } from 'axios'

interface FileContentState {
	data: FileContent | null
	loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}
const initialState: FileContentState = {
	data: null,
	loading: 'idle',
}

export const fetchFileContent = createAsyncThunk(
	'files/fetch',
	async (patch: string[], { rejectWithValue }) => {
		try {
			const response = await getFileContent(patch)
			return response.data
		} catch (e) {
			const error = e as AxiosError<{ messange: string }>
			return rejectWithValue(error.response!.data)
		}
	},
)

const fileContentSlice = createSlice({
	name: 'fileContent',
	initialState,
	reducers: {
		add: (state, { payload }: PayloadAction<FileContent>) => {
			state.data = payload
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchFileContent.fulfilled, (state, action) => {
			state.loading = 'idle'
			state.data = action.payload
		})
		builder.addCase(fetchFileContent.rejected, state => {
			state.loading = 'failed'
			state.data = null
		})
		builder.addCase(fetchFileContent.pending, state => {
			if (state.loading === 'idle') {
				state.loading = 'pending'
				state.data = null
			}
		})
	},
})

export const { add } = fileContentSlice.actions

export const selectFileContent = (state: RootState) => state.fileContent

export default fileContentSlice
