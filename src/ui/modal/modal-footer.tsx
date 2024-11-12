import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef, ReactNode } from 'react'

interface ModalFooterProps extends AreaHTMLAttributes<HTMLDivElement> {
	children: ReactNode
	className?: string
}

const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
	function ModalFooterRef({ children, className, ...props }, ref) {
		const cl = classNames('border-slate-700 border-t-2 px-5 py-3', className)
		return (
			<div className={cl} ref={ref} {...props}>
				{children}
			</div>
		)
	},
)

export default ModalFooter
