import { Tools } from '../../ui/editor/editor'

const inlineTools: Tools = {
	bold: {
		render: ({ children }) => <strong>{children}</strong>,
		regex: /(\*\*(.+?)\*\*(?!\*))/g,
		regexText: /(?<=\*\*).+?(?=\*\*)/g,
	},
	italick: {
		render: ({ children }) => <em>{children}</em>,
		regex: /(\*{1}.+?\*{1})/g,
		regexText: /(?<=\*).+?(?=\*)/g,
	},
}

export default inlineTools
