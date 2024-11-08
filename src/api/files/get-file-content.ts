export interface FileContent {
	name: string
	patch: string[]
	content: string
}

const getFileContent = async (patch: string[]): Promise<{ data: FileContent }> => {
	return {
		data: {
			name: patch[patch.length - 1],
			patch: patch,
			content: `# h1 markdown **bold** text *em* text **bold2**
## h1 markdown  text **bold and italics**
p markdown  text *bold and italics* text`,
		},
	}
}

export default getFileContent
