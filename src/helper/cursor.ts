export const setCursorEditable = (editableElem: HTMLElement, position: number) => {
	const range = document.createRange()
	const sel = window.getSelection()
	const child = [...editableElem.childNodes].find(el => {
		if (position <= el!.textContent!.length) return true
		position -= el!.textContent!.length
		return false
	})
	if (!child) return
	if (child.nodeName != '#text') {
		setCursorEditable(child as HTMLElement, position)
		return
	}
	if (!sel) return

	range.setStart(child, position)
	range.collapse(true)

	sel.removeAllRanges()
	sel.addRange(range)
	editableElem.focus()
}

export const getCursor = (parent: HTMLElement) => {
	if (parent.textContent!.length === 0) return null
	const selection = document.getSelection()
	const range = new Range()
	range.setStart(parent, 0)
	if (!selection || !selection.anchorNode) return null
	range.setEnd(selection.anchorNode, selection.anchorOffset)
	return range.cloneContents()
}

export const getCursorPositionHTML = (parent: HTMLElement) => {
	const selection = document.getSelection()
	const range = new Range()
	range.setStart(parent, 0)
	range.setEnd(selection!.anchorNode!, selection!.anchorOffset)
	return range.toString().length
}
