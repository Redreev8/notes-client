import classNames from 'classnames'
import { InputHTMLAttributes, forwardRef } from 'react'

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function InputRef({ className, ...props }, ref) {
    const cl = classNames(
        'bg-transparent text-base font-w lg:text-xl px-2 py-1 border border-slate-200 outline-none',
        'transition-rounded-colors duration-500',
        'hover:border-green-300 hover:rounded-[100px] hover:px-4',
        'focus:border-green-300 focus:rounded-[100px] focus:px-4',
        className
    )
    return (
        <input
            className={ cl }
            ref={ref} 
            { ...props } 
        />
    )
})

export default Input