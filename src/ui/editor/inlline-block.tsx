import { ReactNode, useContext } from 'react'
import { Tool } from './editor'
import { ContenxtBlock } from './block'
import { alias } from './helper/get-inline-content'

interface BlockProps {
	Block: Tool['render']
	children: ReactNode | string
	markdown: string
	i: number
}

const InlineBlock = ({ Block, markdown, children, i }: BlockProps) => {
	const { isFocus } = useContext(ContenxtBlock)
	const markdownArr = markdown.split(alias)
	return (
		<Block markdown={markdown} i={i}>
			<span
				style={{ display: isFocus ? 'inline' : 'none' }}
				className="text-neutral-500"
				data-markdown="true"
			>
				{markdownArr[0]}
			</span>
			<span>{children}</span>
			<span
				style={{ display: isFocus ? 'inline' : 'none' }}
				className="text-neutral-500"
				data-markdown="true"
			>
				{markdownArr[1]}
			</span>
		</Block>
	)
}

export default InlineBlock
