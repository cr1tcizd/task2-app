import Button from 'shared/ui/Button/Button'
import cls from './ProductsPage.module.css'
import { useAppDispatch, useAppSelector } from 'app/store/hooks'
import { setSearch, setTab, Tab } from 'widget/Cards/model/cardsSlice'
import { useNavigate } from 'react-router'

export default function ProductsHeader() {
	const dispatch = useAppDispatch()
	const { search } = useAppSelector(state => state.cards)

	const navigate = useNavigate()

	const handleFilterFavorite = (tab: Tab) => {
		dispatch(setTab(tab))
	}

	const handleSearchGame = (text: string) => {
		dispatch(setSearch(text))
	}

	return (
		<div className={cls.header}>
			<input
				type='text'
				value={search}
				onChange={e => handleSearchGame(e.target.value)}
			/>
			<Button
				onClick={() => handleFilterFavorite(Tab.ALL)}
				style={{ border: '1px solid black' }}
			>
				Все
			</Button>
			<Button
				onClick={() => handleFilterFavorite(Tab.FAVORITE)}
				style={{ border: '1px solid black' }}
			>
				Избранное
			</Button>
			<Button
				onClick={() => navigate('/create-product')}
				style={{ marginLeft: 'auto' }}
			>
				Добавить игру
			</Button>
		</div>
	)
}
