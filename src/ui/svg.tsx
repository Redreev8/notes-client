import { forwardRef } from 'react'

export interface SvgProps {
	className: string
	name: string
}

const Svg = forwardRef<SVGSVGElement, SvgProps>(function SvgRef(
	{ className, name },
	ref,
) {
	return (
		<svg ref={ref} className={className}>
			<use xlinkHref={`#${name}`} />
		</svg>
	)
})

export default Svg
