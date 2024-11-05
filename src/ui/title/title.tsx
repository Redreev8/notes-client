import { forwardRef, HtmlHTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'
import titleList from './title-list'

export interface TitleProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
	children: ReactNode
	level?: number
	levelTag?: number
	className?: string
}

const Title = forwardRef<HTMLHeadingElement, TitleProps>(function TitleRef(
	{ className, level = 2, levelTag = level, children, ...props },
	ref,
) {
	const cl = classNames(className, {
		'text-6xl': level === 1,
		'text-5xl': level === 2,
		'text-4xl': level === 3,
		'text-3xl': level === 4,
		'text-2xl': level === 5,
		'text-xl': level === 6,
	})

	const Componet = titleList[levelTag]
	return (
		<Componet ref={ref} className={cl} {...props}>
			{children}
		</Componet>
	)
})

export default Title
