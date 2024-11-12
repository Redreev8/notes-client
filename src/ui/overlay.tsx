import { createContext, FC, SetStateAction, Dispatch, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	closeOverlay,
	hideOverlay,
	initialState,
	OverlayState,
	selectOverlay,
} from '../store/overlay.slice'
import classNames from 'classnames'
import { AppDispatch } from '../store'

interface OverlayContextProps extends Omit<OverlayState, 'content' | 'className'> {
	isOpenAnimate: boolean
	setIsOpenAnimate: Dispatch<SetStateAction<boolean>>
}

export const OverlayContext = createContext<OverlayContextProps>({
	...initialState,
	isOpenAnimate: false,
	setIsOpenAnimate: () => false,
})

const Overlay: FC = () => {
	const { isOpen, content, className, isClose, isHiden } =
		useSelector(selectOverlay)
	const dispatch = useDispatch<AppDispatch>()
	const [isOpenAnimate, setIsOpenAnimate] = useState<boolean>(false)
	const cl = classNames(
		'fixed left-0 top-0 z-50 flex size-full transition-opacity duration-500 overflow-auto opacity-0',
		className,
		{
			'opacity-100': isOpenAnimate,
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
			<div onTransitionEnd={handelTransitionEnd} className={cl}>
				<div
					className="fixed left-0 top-0 -z-10 size-full bg-slate-950 opacity-60"
					onClick={() => dispatch(closeOverlay())}
				/>
				<OverlayContext.Provider
					value={{
						isOpen,
						isOpenAnimate,
						setIsOpenAnimate,
						isClose,
						isHiden,
					}}
				>
					{content}
				</OverlayContext.Provider>
			</div>
		)
	)
}

export default Overlay
