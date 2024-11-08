import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import filesSlice from './files.slice'
import headerItemsSlice from './header-items.slice'
import fileContentSlice from './file-content.slice'

export const store = configureStore({
	reducer: {
		[filesSlice.name]: filesSlice.reducer,
		[headerItemsSlice.name]: headerItemsSlice.reducer,
		[fileContentSlice.name]: fileContentSlice.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store
