import classNames from 'classnames'
import { AreaHTMLAttributes, ChangeEvent, forwardRef, useId } from 'react'

interface RadioProps extends Omit<AreaHTMLAttributes<HTMLDivElement>, 'onChange'> {
	value: string
	name: string
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
	isError?: boolean
	checked?: boolean
	required?: boolean
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(function RadioCardRef(
	{ checked, className, name, isError, required, value, children, ...props },
	ref,
) {
	const cl = classNames(
		'box-decoration-clone border border-slate-200 px-2 rounded-md',
		'transition-rounded-colors duration-500',
		'peer-checked:border-green-300 peer-checked:text-green-300 hover:border-green-300 hover:text-green-300 hover:rounded-[100px]',
		className,
		{
			'border-red-300 text-red-300': isError,
		},
	)
	const id = useId()
	return (
		<div className="flex" {...props}>
			<input
				type="radio"
				checked={checked}
				id={id}
				name={name}
				value={value}
				className="peer hidden"
				required={required}
				ref={ref}
			/>
			<label htmlFor={id} className={cl}>
				{children}
			</label>
		</div>
	)
})

export default Radio
