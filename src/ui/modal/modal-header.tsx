import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef, ReactNode } from 'react'

interface ModalHeaderProps extends AreaHTMLAttributes<HTMLDivElement> {
	children: ReactNode
	className?: string
}

const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(function ModalHeaderRef(
	{ children, className, ...props },
	ref,
) {
	const cl = classNames('border-slate-700 border-b-2 px-5 py-3', className)
	return (
		<div className={cl} ref={ref} {...props}>
			{children}
		</div>
	)
})

export default ModalHeader
