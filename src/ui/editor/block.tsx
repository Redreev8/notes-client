import { createContext, ReactNode } from 'react'
import { Tool } from './editor'
import getInlineText from './helper/get-inline-content'
import useBlock from './useBlock'

export interface BlockProps {
	Block: Tool['render']
	children: ReactNode | string
	markdown: string
	i: number
}

interface ContenxtBlockValue {
	isFocus: boolean
}

export const ContenxtBlock = createContext<ContenxtBlockValue>({ isFocus: false })

const Block = ({ Block, markdown, children, i }: BlockProps) => {
	const {
		isFocus,
		refSpan,
		handelDownKey,
		handelFocus,
		handelInput,
		handelBlur,
		inlineTools,
	} = useBlock(markdown, i)
	return (
		<Block markdown={markdown} i={i}>
			<ContenxtBlock.Provider value={{ isFocus }}>
				<span
					ref={refSpan}
					onKeyDown={handelDownKey}
					onFocus={handelFocus}
					onInput={handelInput}
					onBlur={handelBlur}
					contentEditable
					suppressContentEditableWarning
				>
					{markdown && (
						<>
							<span
								style={{
									display: isFocus
										? 'inline-block'
										: 'none',
								}}
								className="text-neutral-500"
							>
								{markdown}
							</span>{' '}
						</>
					)}
					{...getInlineText(
						children as string,
						inlineTools,
					)}
				</span>
			</ContenxtBlock.Provider>
		</Block>
	)
}

export default Block
