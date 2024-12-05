import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react'
import cls from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

export default function Button({ children, ...props }: ButtonProps) {
	return (
		<button className={cls.button} {...props}>
			{children}
		</button>
	)
}
