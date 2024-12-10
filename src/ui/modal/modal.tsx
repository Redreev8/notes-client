import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef, ReactNode } from 'react'

interface ModalProps extends AreaHTMLAttributes<HTMLDivElement> {
	children: ReactNode
	className?: string
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(function ModalRef(
	{ children, className, ...props },
	ref,
) {
	const cl = classNames(
		'flex flex-col justify-between bg-slate-900 rounded-2xl m-auto',
		className,
	)
	return (
		<div className={cl} ref={ref} {...props}>
			{children}
		</div>
	)
})

export default Modal
