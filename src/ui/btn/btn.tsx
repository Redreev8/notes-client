import {
	forwardRef,
	ForwardedRef,
	ButtonHTMLAttributes,
	AnchorHTMLAttributes,
} from 'react'
import BtnContent, { BtnContentProps } from './btn-content'

export interface Props extends BtnContentProps {
	href?: string
	isFilled?: boolean
}

export type ButtonProps = Props & ButtonHTMLAttributes<HTMLButtonElement>
export type LinkProps = Props & AnchorHTMLAttributes<HTMLAnchorElement>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function ButtonRef(
	{ iconLeft, iconRight, children, ...props },
	ref,
) {
	return (
		<button type='button' ref={ref} {...props}>
			<BtnContent iconLeft={iconLeft} iconRight={iconRight}>
				{children}
			</BtnContent>
		</button>
	)
})
const A = forwardRef<HTMLAnchorElement, LinkProps>(function ARef(
	{ iconLeft, iconRight, children, ...props },
	ref,
) {
	return (
		<a ref={ref} {...props}>
			<BtnContent iconLeft={iconLeft} iconRight={iconRight}>
				{children}
			</BtnContent>
		</a>
	)
})

const Btn = forwardRef<HTMLButtonElement | HTMLAnchorElement, LinkProps | ButtonProps>(
	function BtnRef({ className, children, href, isFilled, ...props }, ref) {
		const cl =
			'font-Jura text-slate-950 text-xl bg-slate-50 px-3 py-1 rounded-full transition-opacity delay-150 hover:opacity-75 hover:animate-shadow-drop'
		if (href) {
			return (
				<A
					{...(props as LinkProps)}
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
				ref={ref as ForwardedRef<HTMLButtonElement>}
				className={cl}
			>
				{children}
			</Button>
		)
	},
)

export default Btn
