import { InputHTMLAttributes, ReactNode } from 'react'
import cls from './Input.module.css'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'
import { FormValues } from 'pages/create-product/ui/CreateProduct'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	children: ReactNode
	register: UseFormRegister<FormValues>
	name: 'title' | 'gameID' | 'normalPrice' | 'salePrice'
	option?: RegisterOptions<
		FormValues,
		'title' | 'gameID' | 'normalPrice' | 'salePrice'
	>
}

export default function Input({
	children,
	id,
	register,
	name,
	option,
	...props
}: InputProps) {
	return (
		<label className={cls.label} htmlFor={id}>
			<p className={cls.text}>{children}</p>
			<input
				className={cls.input}
				type='text'
				id={id}
				{...register(name, option)}
				{...props}
			/>
		</label>
	)
}
