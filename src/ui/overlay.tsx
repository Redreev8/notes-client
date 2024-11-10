import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeOverlay, hideOverlay, selectOverlay } from '../store/overlay.slice'
import classNames from 'classnames'
import { AppDispatch } from '../store'

const Overlay: FC = () => {
	const { isOpen, content, className, isClose, isHiden } =
		useSelector(selectOverlay)
	const dispatch = useDispatch<AppDispatch>()
	const [isOpenAnimate, setIsOpenAnimate] = useState<boolean>(false)
	const cl = classNames(
		'fixed left-0 top-0 z-50 size-full transition-opacity duration-1000 overflow-auto bg-slate-950 opacity-0',
		className,
		{
			'opacity-60': isOpenAnimate,
		},
	)
	useEffect(() => {
		setIsOpenAnimate(isOpen)
	}, [isOpen])
	const handelTransitionEnd = () => {
		if (isClose) {
			dispatch(hideOverlay())
		}
	}
	return (
		!isHiden && (
			<div
				onTransitionEnd={handelTransitionEnd}
				onClick={() => dispatch(closeOverlay())}
				className={cl}
			>
				{content}
			</div>
		)
	)
}

export default Overlay
