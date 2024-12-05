import { HTMLAttributes, ReactNode } from 'react'
import cls from './Input.module.css'

interface InputProps extends HTMLAttributes<HTMLInputElement> {
	children: ReactNode
}

export default function Input({ children, id, ...props }: InputProps) {
	return (
		<label className={cls.label} htmlFor={id}>
			<p className={cls.text}>{children}</p>
			<input className={cls.input} type='text' id={id} {...props} />
		</label>
	)
}
