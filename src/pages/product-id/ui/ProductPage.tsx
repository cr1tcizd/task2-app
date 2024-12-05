import { useAppSelector } from 'app/store/hooks'
import { useParams } from 'react-router'
import ProductHeader from './ProductHeader'
import ProductMain from './ProductMain'

export default function ProductPage() {
	const params = useParams()
	const { cards } = useAppSelector(state => state.cards)
	const card = cards.find(card => card.gameID === params.id)
	console.log(card?.salePrice)
	return (
		<div>
			<ProductHeader card={card} />
			<ProductMain card={card} />
		</div>
	)
}
