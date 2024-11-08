import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '.'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ReactNode } from 'react'

interface HeaderItemsState {
	left: ReactNode
	center: ReactNode
	right: ReactNode
}

const initialState: HeaderItemsState = {
	left: null,
	center: null,
	right: null,
}

const headerItemsSlice = createSlice({
	name: 'haederItems',
	initialState,
	reducers: {
		addItems: (_, { payload }: PayloadAction<Partial<HeaderItemsState>>) => {
			return {
				...initialState,
				...payload,
			}
		},
	},
})

export const { addItems } = headerItemsSlice.actions

export const selectHeaderItems = (state: RootState) => state.haederItems

export default headerItemsSlice
