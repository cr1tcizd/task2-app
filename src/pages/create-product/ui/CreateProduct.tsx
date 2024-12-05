import { useForm } from 'react-hook-form'
import Button from 'shared/ui/Button/Button'
import cls from './CreateProduct.module.css'
import Input from 'shared/ui/Input/Input'
import { ICard } from 'app/types/ICard'

interface FormValues {
	gameID: string
	title: string
	normalPrice: string
	salePrice: string
}

export default function CreateProduct() {
	const form = useForm({
		defaultValues: {
			gameID: '',
			title: '',
			normalPrice: '',
			salePrice: '',
		},
	})

	const { register, handleSubmit, formState } = form
	const { errors } = formState

	const onSubmit = (data: FormValues) => {
		console.log(data)
	}

	return (
		<div className={cls.page}>
			<form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
				<h1>Добавление игры</h1>
				<Input
					id='game'
					{...register('title', {
						required: 'Название игры обязательно',
					})}
				>
					Название
				</Input>
				<Input
					id='price'
					{...register('normalPrice', {
						required: 'Цена обязательный параметр',
					})}
				>
					Цена без скидки
				</Input>
				<Input
					id='price-discounted'
					{...register('salePrice', {
						required: 'Цена со скидкой обязательный параметр',
					})}
				>
					Цена со скидкой
				</Input>
				<Button type='submit'>Добавить</Button>
			</form>
		</div>
	)
}
