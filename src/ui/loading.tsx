import classNames from 'classnames'
import { FC } from 'react'

interface LoadingProps {
	className?: string
	isBig?: boolean
	isMedium?: boolean
	isFull?: boolean
	isSmall?: boolean
	isBlack?: boolean
}

const Loading: FC<LoadingProps> = ({
	className,
	isBig,
	isMedium,
	isFull,
	isSmall,
	isBlack,
}) => {
	const cl = classNames('flex justify-center items-center', className)
	const clSnipet = classNames('animate-spin rounded-full border-y-2', {
		'border-gray-900': isBlack,
		'border-gray-300': !isBlack,
		'size-4': isSmall,
		'size-4/5': isFull,
		'size-12': isMedium,
		'size-40': isBig,
		'size-6': !isBig && !isFull,
	})

	return (
		<div className={cl}>
			<div className={clSnipet}></div>
		</div>
	)
}

export default Loading
