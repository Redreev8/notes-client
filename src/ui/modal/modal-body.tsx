import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef, ReactNode } from 'react'

interface ModalBodyProps extends AreaHTMLAttributes<HTMLDivElement> {
	children: ReactNode
	className?: string
}

const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
	function ModalBodyRef({ children, className, ...props }, ref) {
		const cl = classNames('grow p-5', className)
		return (
			<div className={cl} ref={ref} {...props}>
				{children}
			</div>
		)
	},
)

export default ModalBody
