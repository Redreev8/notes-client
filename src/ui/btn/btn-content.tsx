import { ReactNode } from 'react'
import Svg from '../svg'

export interface BtnContentProps {
	iconLeft?: string
	iconRight?: string
	children?: ReactNode
}

function BtnContent({ children, iconLeft, iconRight }: BtnContentProps) {
	return (
		<span className="flex gap-1">
			{iconLeft && <Svg className="size-[24px]" name={iconLeft} />}
			{children && <span>{children}</span>}
			{iconRight && <Svg className="size-[24px]" name={iconRight} />}
		</span>
	)
}

export default BtnContent
