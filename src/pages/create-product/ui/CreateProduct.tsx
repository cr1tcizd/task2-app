import { useForm } from 'react-hook-form'
import Button from 'shared/ui/Button/Button'
import cls from './CreateProduct.module.css'
import Input from 'shared/ui/Input/Input'
import { v4 as uuidv4 } from 'uuid'
import { useAppDispatch } from 'app/store/hooks'
import { addCard } from 'widget/Cards/model/cardsSlice'
import { useNavigate } from 'react-router'

export interface FormValues {
	thumb: string
	gameID: string
	title: string
	normalPrice: string
	salePrice: string
}

export default function CreateProduct() {
	const id = uuidv4()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const form = useForm({
		defaultValues: {
			thumb:
				'https://abrakadabra.fun/uploads/posts/2021-12/1639987748_47-abrakadabra-fun-p-kletchatoe-pole-cherno-beloe-49.jpg',
			gameID: id,
			title: '',
			normalPrice: '',
			salePrice: '',
		},
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = form
	const onSubmit = (data: FormValues) => {
		dispatch(addCard(data))
		navigate('/products')
	}

	return (
		<div className={cls.page}>
			<form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
				<h1>Добавление игры</h1>
				<Input
					id='title'
					name='title'
					register={register}
					option={{
						required: 'Название обязательно',
						minLength: {
							value: 8,
							message: 'Название должно содержать больше 8 символов',
						},
					}}
				>
					Название
				</Input>
				<div
					className={cls.error}
					style={{
						visibility: errors.title ? 'visible' : 'hidden',
					}}
				>
					{errors?.title?.message}
				</div>
				<Input
					id='normalPrice'
					type='number'
					step='0.01'
					name='normalPrice'
					register={register}
					option={{ required: 'Цена обязательное поле' }}
				>
					Цена без скидки
				</Input>
				<div
					className={cls.error}
					style={{
						visibility: errors.normalPrice ? 'visible' : 'hidden',
					}}
				>
					{errors?.normalPrice?.message}
				</div>
				<Input
					id='salePrice'
					type='number'
					step='0.01'
					name='salePrice'
					register={register}
					option={{ required: 'Цена со скидкой обязательное поле' }}
				>
					Цена со скидкой
				</Input>
				<div
					className={cls.error}
					style={{
						visibility: errors.salePrice ? 'visible' : 'hidden',
					}}
				>
					{errors?.salePrice?.message}
				</div>
				<Button type='submit'>Добавить</Button>
			</form>
		</div>
	)
}
