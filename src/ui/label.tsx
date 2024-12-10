import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef, ReactNode } from 'react'

interface LabelProps extends AreaHTMLAttributes<HTMLLabelElement> {
	label: ReactNode
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(function LabelRef(
	{ label, className, children, ...props },
	ref,
) {
	const cl = classNames('flex flex-col gap-1 text-base', className)
	return (
		<label className={cl} ref={ref} {...props}>
			<span className="text-slate-300">{label}</span>
			{children}
		</label>
	)
})

export default Label
