import { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react'
import { TitleProps } from './title'

export interface TitleList {
	[key: number]: ForwardRefExoticComponent<
		Omit<TitleProps, 'level' | 'levelTag'> & RefAttributes<HTMLHeadingElement>
	>
}

const titleList: TitleList = {
	1: forwardRef<HTMLHeadingElement, Omit<TitleProps, 'level' | 'levelTag'>>(
		function H1Ref({ children, ...props }, ref) {
			return (
				<h1 ref={ref} {...props}>
					{children}
				</h1>
			)
		},
	),
	2: forwardRef<HTMLHeadingElement, Omit<TitleProps, 'level' | 'levelTag'>>(
		function H2Ref({ children, ...props }, ref) {
			return (
				<h2 ref={ref} {...props}>
					{children}
				</h2>
			)
		},
	),
	3: forwardRef<HTMLHeadingElement, Omit<TitleProps, 'level' | 'levelTag'>>(
		function H3Ref({ children, ...props }, ref) {
			return (
				<h3 ref={ref} {...props}>
					{children}
				</h3>
			)
		},
	),
	4: forwardRef<HTMLHeadingElement, Omit<TitleProps, 'level' | 'levelTag'>>(
		function H4Ref({ children, ...props }, ref) {
			return (
				<h4 ref={ref} {...props}>
					{children}
				</h4>
			)
		},
	),
	5: forwardRef<HTMLHeadingElement, Omit<TitleProps, 'level' | 'levelTag'>>(
		function H5Ref({ children, ...props }, ref) {
			return (
				<h5 ref={ref} {...props}>
					{children}
				</h5>
			)
		},
	),
	6: forwardRef<HTMLHeadingElement, Omit<TitleProps, 'level' | 'levelTag'>>(
		function H6Ref({ children, ...props }, ref) {
			return (
				<h6 ref={ref} {...props}>
					{children}
				</h6>
			)
		},
	),
}

export default titleList
