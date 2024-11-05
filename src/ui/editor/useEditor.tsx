import { ReactNode, useEffect, useState } from 'react'
import { ContextEditorProps, EditorProps } from './editor'
import Block from './block'
import getBlock from './helper/get-block'

const useEditor = ({ children, tools }: EditorProps) => {
	const [markdownArr, setMarkdownArr] = useState(children.split('\n'))
	const [isRender, setIsRender] = useState<boolean>(false)
	useEffect(() => {
		setIsRender(true)
	}, [])
	const getMarkdownToTag = () => {
		const blocks: ReactNode[] = []
		for (let i = 0; i < markdownArr.length; i++) {
			const row = markdownArr[i]
			const { render, children, markdown } = getBlock(row, tools)
			if (!children && typeof children !== 'string') continue
			blocks.push(
				<Block Block={render} markdown={markdown} i={i} key={i}>
					{children}
				</Block>,
			)
		}
		return blocks
	}
	const onChange = (index: number, text: string) => {
		setMarkdownArr(prev => {
			return prev.map((el, i) => {
				if (index === i) el = text
				return el
			})
		})
	}
	const onRemove = (index: number) => {
		setMarkdownArr(prev => prev.filter((_, i) => index !== i))
	}
	const addBlock: ContextEditorProps['addBlock'] = ({
		index,
		content,
		contentPrevBlock,
	}) => {
		setMarkdownArr(prev => {
			prev[index] = contentPrevBlock
			prev.splice(index + 1, 0, content ?? '')
			return [...prev]
		})
	}
	return {
		addBlock,
		onRemove,
		onChange,
		isRender,
		markdownArr,
		getMarkdownToTag,
	}
}

export default useEditor
