import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ICard } from 'app/types/ICard'

export const fetchCards = createAsyncThunk(
	'cards/fetchCards',
	async (_, { getState }) => {
		const response = await fetch(
			'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15'
		)
		const data: ICard[] = await response.json()
		return data
	}
)

const loadFromLocalStorage = () => {
	try {
		const state = localStorage.getItem('cards')
		return state ? JSON.parse(state) : []
	} catch (e) {
		console.error('Ошибка загрузки из localStorage', e)
		return []
	}
}

const saveToLocalStorage = (cards: ICard[]) => {
	try {
		const serializedState = JSON.stringify(cards)
		localStorage.setItem('cards', serializedState)
	} catch (e) {
		console.error('Ошибка сохранения в localStorage', e)
	}
}

export enum Tab {
	ALL = 'all',
	FAVORITE = 'favorite',
}

interface CardsState {
	cards: ICard[]
	search: string
	loading: boolean
	error: string | null
	tab: Tab
}

const initialState: CardsState = {
	cards: loadFromLocalStorage(),
	loading: false,
	error: null,
	tab: Tab.ALL,
	search: '',
}

export const cardsSlice = createSlice({
	name: 'cards',
	initialState,
	reducers: {
		setLike: (state, action) => {
			const cardId = action.payload
			const card = state.cards.find(c => c.gameID === cardId)
			if (card) {
				state.cards = state.cards.map(c => ({
					...c,
					liked: c.gameID === cardId ? !c.liked : c.liked,
				}))
				saveToLocalStorage(state.cards)
			}
		},
		setTab: (state, action) => {
			state.tab = action.payload === state.tab ? Tab.ALL : action.payload
		},
		deleteCard: (state, action) => {
			state.cards = state.cards.filter(c => c.gameID !== action.payload)
			saveToLocalStorage(state.cards)
		},
		setSearch: (state, action) => {
			state.search = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchCards.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(fetchCards.fulfilled, (state, action) => {
				state.cards = action.payload
				saveToLocalStorage(state.cards)
				state.loading = false
			})
			.addCase(fetchCards.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message || 'Failed to fetch cards'
			})
	},
})

export const { setLike, setTab, deleteCard, setSearch } = cardsSlice.actions
// export const selectCards = (state: RootState) => state.cards.value
export default cardsSlice.reducer
