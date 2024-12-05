import { configureStore } from '@reduxjs/toolkit'
import CardsReducer from 'widget/Cards/model/cardsSlice'

const store = configureStore({
	reducer: {
		cards: CardsReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
