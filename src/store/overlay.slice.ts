import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '.'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ReactNode } from 'react'

export interface OverlayState {
	content: ReactNode
	className?: string | null
	isOpen: boolean
	isHiden: boolean
	isClose: boolean
}

export const initialState: OverlayState = {
	content: null,
	className: null,
	isOpen: false,
	isClose: true,
	isHiden: true,
}

const overlayItemsSlice = createSlice({
	name: 'overlay',
	initialState,
	reducers: {
		openOverlay: (
			_,
			{
				payload,
			}: PayloadAction<
				Partial<Omit<OverlayState, 'isOpen' | 'isClose'>>
			>,
		) => {
			return {
				...initialState,
				...payload,
				isOpen: true,
				isHiden: false,
				isClose: false,
			}
		},
		closeOverlay: _ => {
			return {
				...initialState,
				isOpen: false,
				isHiden: false,
				isClose: true,
			}
		},
		hideOverlay: _ => {
			return {
				...initialState,
				isOpen: false,
				isHiden: true,
				isClose: true,
			}
		},
	},
})

export const { openOverlay, closeOverlay, hideOverlay } = overlayItemsSlice.actions

export const selectOverlay = (state: RootState) => state.overlay

export default overlayItemsSlice
