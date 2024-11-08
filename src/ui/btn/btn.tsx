import {
	forwardRef,
	ForwardedRef,
	ButtonHTMLAttributes,
	AnchorHTMLAttributes,
} from 'react'
import BtnContent, { BtnContentProps } from './btn-content'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

export interface Props extends BtnContentProps {
	href?: string
	isSamll?: boolean
	isFilled?: boolean
}

export type ButtonProps = Props & ButtonHTMLAttributes<HTMLButtonElement>
export type LinkProps = Props & AnchorHTMLAttributes<HTMLAnchorElement>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function ButtonRef(
	{ iconLeft, isSamll, iconRight, children, ...props },
	ref,
) {
	return (
		<button type="button" ref={ref} {...props}>
			<BtnContent
				isSamll={isSamll}
				iconLeft={iconLeft}
				iconRight={iconRight}
			>
				{children}
			</BtnContent>
		</button>
	)
})
const A = forwardRef<HTMLAnchorElement, LinkProps>(function ARef(
	{ iconLeft, isSamll, href, iconRight, children, ...props },
	ref,
) {
	return (
		<Link to={href!} ref={ref} {...props}>
			<BtnContent
				isSamll={isSamll}
				iconLeft={iconLeft}
				iconRight={iconRight}
			>
				{children}
			</BtnContent>
		</Link>
	)
})

const Btn = forwardRef<HTMLButtonElement | HTMLAnchorElement, LinkProps | ButtonProps>(
	function BtnRef({ className, children, href, isFilled, isSamll, ...props }, ref) {
		const cl = classNames(
			className,
			'font-Jura dis block rounded-lg ease-in-out duration-700 delay-0 hover:rounded-[100px] hover:animate-shadow-drop',
			{
				'text-base px-2 py-1': isSamll,
				'text-base lg:text-xl px-3 py-1': !isSamll,
				'bg-neutral-50 text-gray-950 transition-rounded':
					!isFilled,
				'bg-transparent bg-transparent text-gray-50 border border-gray-50 transition-rounded-colors hover:bg-neutral-50 hover:text-gray-950':
					isFilled,
				'px-1': !children,
			},
		)

		if (href) {
			return (
				<A
					{...(props as LinkProps)}
					isSamll={isSamll}
					href={href}
					ref={ref as ForwardedRef<HTMLAnchorElement>}
					className={cl}
				>
					{children}
				</A>
			)
		}
		return (
			<Button
				{...(props as ButtonProps)}
				isSamll={isSamll}
				ref={ref as ForwardedRef<HTMLButtonElement>}
				className={cl}
			>
				{children}
			</Button>
		)
	},
)

export default Btn
