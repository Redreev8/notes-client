import { Tools } from '../editor'
import InlineBlock from '../inlline-block'

export const alias = '#^$^#'

const getInlineText = (markdown: string, inlineTools: Tools) => {
	let templateMarkdown = markdown
	const res: (JSX.Element | string)[] = [markdown]
	const changeData = []
	for (const key in inlineTools) {
		const { render, regex, regexText } = inlineTools[key]
		if (typeof markdown !== 'string') break
		changeData.push({
			render,
			regex: regex ? regex : key,
			regexText,
			texts: templateMarkdown.match(regex ? regex : key) ?? [],
		})
		templateMarkdown = templateMarkdown.replaceAll(regex ? regex : key, alias)
	}
	for (let index = 0; index < changeData.length; index++) {
		const { render, regexText, texts } = changeData[index]
		texts.forEach((t, k) => {
			const textMatch = t.match(regexText!)

			if (!textMatch) return
			for (let i = 0; i < res.length; i++) {
				const el = res[i]
				if (typeof el !== 'string') continue
				if (!el.includes(t)) continue
				const split = [...el.split(t)]
				res.splice(
					i,
					1,
					split[0] ?? '',
					<InlineBlock
						Block={render}
						markdown={t.replace(textMatch[0], alias)}
						i={i}
						key={`${k} ${index}`}
					>
						{textMatch![0]}
					</InlineBlock>,
					split[1] ?? '',
				)
			}
		})
	}

	return res
}

export default getInlineText
