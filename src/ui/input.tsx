import classNames from 'classnames'
import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps {
	isError?: boolean
}

const Input = forwardRef<
	HTMLInputElement,
	InputProps & InputHTMLAttributes<HTMLInputElement>
>(function InputRef({ className, isError, ...props }, ref) {
	const cl = classNames(
		'bg-transparent text-base font-w lg:text-xl px-2 py-1 border rounded-lg outline-none',
		'transition-rounded-colors duration-500',
		'hover:border-green-300 hover:rounded-[100px] hover:px-4',
		'focus:border-green-300 focus:rounded-[100px] focus:px-4',
		className,
		{
			'border-slate-200': !isError,
			'border-red-300 text-red-300': isError,
		},
	)
	return <input className={cl} ref={ref} {...props} />
})

export default Input
