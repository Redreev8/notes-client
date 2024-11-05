import { AnchorHTMLAttributes, createContext, FC, ReactNode } from 'react'
import useEditor from './useEditor'
import classNames from 'classnames'

export interface ToolFCProps extends AnchorHTMLAttributes<HTMLElement> {
	children: ReactNode
	markdown: string
	i: number
}

export interface Tool {
	render: FC<ToolFCProps>
	regex?: RegExp
	regexText?: RegExp
	mathIndex?: number
}

export interface Tools {
	[key: string]: Tool
}

export interface EditorProps {
	children: string
	className?: string
	tools: Tools
	inlineTools: Tools
}

export interface ContextEditorProps {
	markdownArr: string[]
	isRender: boolean
	onChange: (i: number, text: string) => void
	onRemove: (i: number) => void
	addBlock: (obj: {
		index: number
		contentPrevBlock: string
		content?: string
		blocks?: string
	}) => void
	tools: Tools
	inlineTools: Tools
}

export const ContextEditor = createContext<ContextEditorProps>({
	isRender: false,
	markdownArr: [],
	tools: {},
	inlineTools: {},
	addBlock: () => {},
	onChange: () => {},
	onRemove: () => {},
})

const Editor: FC<EditorProps> = ({ children, className, tools, inlineTools }) => {
	const { addBlock, onRemove, onChange, markdownArr, isRender, getMarkdownToTag } =
		useEditor({
			children,
			tools,
			inlineTools,
		})
	return (
		<ContextEditor.Provider
			value={{
				markdownArr,
				isRender,
				addBlock,
				onChange,
				onRemove,
				tools,
				inlineTools,
			}}
		>
			<div className={classNames(className)}>{getMarkdownToTag()}</div>
		</ContextEditor.Provider>
	)
}

export default Editor
