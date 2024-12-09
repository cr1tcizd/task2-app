import { useEffect } from 'react'
import Card from 'shared/ui/Card/Card'
import cls from './Cards.module.css'
import { useAppDispatch, useAppSelector } from 'app/store/hooks'
import { deleteCard, fetchCards, setLike, Tab } from '../model/cardsSlice'
import { useNavigate } from 'react-router'

export default function Cards() {
	const dispatch = useAppDispatch()
	const { cards, loading, tab, search, currentPage } = useAppSelector(
		state => state.cards
	)
	const navigate = useNavigate()
	const filter = tab === Tab.FAVORITE ? cards.filter(c => c.liked) : cards
	const filteredCards = filter.filter(c =>
		c.title.toLowerCase().includes(search.toLowerCase())
	)
	const lastIndex = currentPage * 10
	const firstIndex = lastIndex - 10
	const currentCards = filteredCards.slice(firstIndex, lastIndex)

	useEffect(() => {}, [filteredCards])

	useEffect(() => {
		if (cards.length === 0) {
			dispatch(fetchCards())
		}
	}, [dispatch, cards.length])

	const handleLike = (event: React.MouseEvent, id: string) => {
		event.stopPropagation()
		dispatch(setLike(id))
	}

	const handleDelete = (event: React.MouseEvent, id: string) => {
		event.stopPropagation()
		dispatch(deleteCard(id))
	}

	if (loading) {
		return <div>loading</div>
	}

	return (
		<div className={cls.cards}>
			{currentCards.map(game => (
				<Card
					onClick={() => navigate(game.gameID)}
					key={game.gameID}
					gameName={game.title}
					gameImg={game.thumb}
					liked={game.liked ? game.liked : false}
					handleLike={(event: React.MouseEvent) => {
						handleLike(event, game.gameID)
					}}
					handleDelete={(event: React.MouseEvent) => {
						handleDelete(event, game.gameID)
					}}
				/>
			))}
		</div>
	)
}
