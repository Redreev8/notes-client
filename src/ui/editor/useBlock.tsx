import {
	FocusEvent,
	FormEvent,
	KeyboardEvent,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react'
import { ContextEditor } from './editor'
import { getCursor, setCursorEditable } from '../../helper/cursor'

const useBlock = (markdown: string, i: number) => {
	const { inlineTools, isRender, onChange, addBlock, onRemove } =
		useContext(ContextEditor)
	const [cursorSpanText, setCursorSpanText] = useState<HTMLSpanElement | null>(null)
	const [isRemove, setIsRemove] = useState<boolean>(false)
	const [isFocus, setIsFocus] = useState<boolean>(false)
	const refSpan = useRef<HTMLSpanElement>(null)
	const handelFocus = (e: FocusEvent<HTMLElement>) => {
		const target = e.currentTarget as HTMLHeadingElement
		if (target !== e.target) return
		const contentCursor = getCursor(target)
		const span = document.createElement('span')
		if (!contentCursor) return
		span.append(contentCursor)
		setCursorSpanText(span)
	}
	const handelBlur = () => setCursorSpanText(null)
	// const cheackCursorIsInlineblock = (contentCursor: DocumentFragment) => {
	// 	const lastElementCursor =
	// 		contentCursor.childNodes[contentCursor.childNodes.length - 1]
	// 	if (!lastElementCursor) return ''
	// 	if (lastElementCursor.nodeName !== '#text') {
	// 		const span = lastElementCursor.childNodes[
	// 			lastElementCursor.childNodes.length - 1
	// 		] as HTMLSpanElement
	// 		if (span.dataset.markdown) return ' '
	// 	}

	// 	return ''
	// }
	const handelDownKey = (e: KeyboardEvent<HTMLSpanElement>) => {
		const target = e.currentTarget as HTMLHeadingElement
		const value = target!.textContent!
		const contentCursor = getCursor(target)
		const span = document.createElement('span')
		if (e.key === 'Enter' && contentCursor) {
			e.preventDefault()
			span.append(contentCursor)
			const newBlockVlaue = value.replace(span.textContent!, '')
			return addBlock({
				index: i,
				content: newBlockVlaue.length === 0 ? ' ' : newBlockVlaue,
				contentPrevBlock: value.replace(newBlockVlaue, ''),
			})
		}
		if (e.key === 'Backspace' && value.length === 0 && !isRemove)
			return setIsRemove(true)
		if (e.key === 'Backspace' && isRemove) return onRemove(i)
	}
	const handelInput = (e: FormEvent<HTMLHeadingElement>) => {
		const target = e.currentTarget as HTMLHeadingElement
		const newValue = target!.textContent!
		const contentCursor = getCursor(target)
		const span = document.createElement('span')
		if (newValue.length > 0 && isRemove) setIsRemove(false)
		if (!contentCursor) return
		span.append(contentCursor)
		setCursorSpanText(span)
		onChange(i, newValue)
	}
	useEffect(() => {
		if (!refSpan.current) return
		if (!cursorSpanText) {
			setIsFocus(false)
			return
		}
		setCursorEditable(
			refSpan.current,
			cursorSpanText!.textContent!.length + (markdown ? 1 : 0),
		)
		setIsFocus(() => true)
		return () => {}
	}, [cursorSpanText])
	useEffect(() => {
		if (!isRender || !refSpan.current) return
		refSpan.current!.focus()
		setCursorSpanText(refSpan.current)
	}, [])

	return {
		isFocus,
		refSpan,
		handelDownKey,
		handelFocus,
		handelInput,
		handelBlur,
		inlineTools,
	}
}

export default useBlock
