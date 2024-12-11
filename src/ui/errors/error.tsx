import { AreaHTMLAttributes, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

export interface ErrorProps extends AreaHTMLAttributes<HTMLSpanElement> {
	error: FieldError | undefined
}

const Error = forwardRef<HTMLSpanElement, ErrorProps>(function ErrorRef({ error }, ref) {
	const getError = () => {
		if (!error) return null
		if (typeof error === 'object') return error.message as string
		return error as string
	}
	return (
		error && (
			<span className="text-red-300" ref={ref}>
				{getError()}
			</span>
		)
	)
})

export default Error
