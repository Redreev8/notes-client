interface File {
	type: 'file'
	name: string
	ext: string
}

interface Folder {
	type: 'folder'
	name: string
}

type FileType = File | Folder

export default FileType
