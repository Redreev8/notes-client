import { Tools } from '../../ui/editor/editor'
import Text from '../../ui/text'
import Title from '../../ui/title'

const tools: Tools = {
	title: {
		render: ({ children, markdown, ...props }) => (
			<Title level={markdown.length - 1} {...props}>
				{children}
			</Title>
		),
		regex: /(^#{1,6}\s).*/,
		mathIndex: 1,
	},
	default: {
		render: ({ children, ...props }) => (
			<Text isBig className="min-h-6 min-w-full" {...props}>
				{children}
			</Text>
		),
	},
}

export default tools
