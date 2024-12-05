import { ICard } from 'app/types/ICard'

import cls from './ProductPage.module.css'
import { useNavigate } from 'react-router'
import Button from 'shared/ui/Button/Button'

interface ProductHeaderProps {
	card: ICard | undefined
}

export default function ProductHeader({ card }: ProductHeaderProps) {
	const navigate = useNavigate()

	return (
		<div className={cls.header} onClick={() => navigate('/products')}>
			<Button>Назад</Button>
		</div>
	)
}
