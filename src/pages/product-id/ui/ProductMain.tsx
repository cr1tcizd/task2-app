import { ICard } from 'app/types/ICard'

import cls from './ProductPage.module.css'

interface ProductMainProps {
	card: ICard | undefined
}

export default function ProductMain({ card }: ProductMainProps) {
	return (
		<div className={cls.main}>
			<img className={cls.main_img} src={card?.thumb} alt='' />
			<strong className={cls.main_title}>{card?.title}</strong>
			<div className={cls.main_priceContainer}>
				<p className={cls.main_priceContainer_line}>{card?.normalPrice}$</p>
				<p>{card?.salePrice}$</p>
			</div>
		</div>
	)
}
