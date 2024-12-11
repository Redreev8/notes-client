import classNames from 'classnames'
import { FC } from 'react'

interface LoadingProps {
	className?: string
}

const Loading: FC<LoadingProps> = ({ className }) => {
	const cl = classNames('flex justify-center items-center', className)

	return (
		<div className={cl}>
			<div className="size-4/5 animate-spin rounded-full border-y-2 border-gray-300"></div>
		</div>
	)
}

export default Loading
