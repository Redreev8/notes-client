import classNames from 'classnames'
import { AreaHTMLAttributes, forwardRef } from 'react'

interface TextProps extends AreaHTMLAttributes<HTMLParagraphElement> {
	isBig?: boolean
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(function TextRef(
	{ children, className, isBig, ...props },
	ref,
) {
	const cl = classNames(className, {
		'text-xl': isBig,
		'text-base': !isBig,
	})
	return (
		<p ref={ref} className={cl} {...props}>
			{children}
		</p>
	)
})

export default Text
