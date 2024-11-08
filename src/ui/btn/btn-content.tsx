import { FC, ReactNode } from 'react'
import Svg from '../svg'
import classNames from 'classnames'

export interface BtnContentProps {
	iconLeft?: string
	iconRight?: string
	children?: ReactNode
	isSamll?: boolean
}

const BtnContent: FC<BtnContentProps> = ({ children, iconLeft, iconRight }) => {
	const clIcon = classNames('size-[24px]', {})
	return (
		<span className="flex gap-1">
			{iconLeft && <Svg className={clIcon} name={iconLeft} />}
			{children && <span>{children}</span>}
			{iconRight && <Svg className={clIcon} name={iconRight} />}
		</span>
	)
}

export default BtnContent
