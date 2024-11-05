import Editor from '../../ui/editor'
import inlineTools from './inline-tools'
import tools from './tolls'

const NoteFile = () => {
	const content = `# h1 markdown **bold** text *em* text **bold2**
## h1 markdown  text **bold and italics**
p markdown  text *bold and italics* text`
	return (
		<div>
			<Editor tools={tools} inlineTools={inlineTools}>
				{content}
			</Editor>
		</div>
	)
}

export default NoteFile
