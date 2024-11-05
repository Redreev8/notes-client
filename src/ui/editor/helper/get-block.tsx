import { ReactNode } from 'react'
import { Tool, Tools } from '../editor'

export interface GetBlockReturn {
	render: Tool['render']
	children: ReactNode | string
	markdown: string
}

const getBlock = (row: string, tools: Tools): GetBlockReturn => {
	let children: ReactNode | string = row
	let markdown: string = ''
	let r: Tool['render']
	for (const key in tools) {
		const { render, regex, mathIndex } = tools[key]
		r = render
		if (key === 'default') continue
		const res = row.match(regex ? regex : key)

		if (!res) continue
		markdown = res[mathIndex ?? 0]
		children = row.replace(markdown, '')
		break
	}

	return {
		render: r!,
		children,
		markdown,
	}
}

export default getBlock
