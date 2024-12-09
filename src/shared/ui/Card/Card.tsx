import LikeSvg from 'shared/assets/like.svg?react'
import cls from './Card.module.css'
import Button from 'shared/ui/Button/Button'
import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	gameName: string
	gameImg: string
	liked: boolean
	handleLike: (event: React.MouseEvent<SVGElement>) => void
	handleDelete: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Card({
	gameName,
	gameImg,
	handleLike,
	liked,
	handleDelete,
	...props
}: CardProps) {
	return (
		<div className={cls.card} {...props}>
			<img className={cls.img} src={gameImg} alt='' />
			<strong className={cls.heading}>{gameName}</strong>
			<div className={cls.btn_container}>
				<Button onClick={handleDelete}>Удалить</Button>
				<LikeSvg
					style={liked ? { fill: 'red' } : { fill: 'gray' }}
					height={30}
					className={cls.like}
					onClick={handleLike}
				/>
			</div>
		</div>
	)
}
