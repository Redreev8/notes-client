import axiosFile from './axios-file'

export interface FileContent {
	name: string
	path: string[]
	content: string
}

const getFileContent = async (patch: string[]): Promise<{ data: FileContent }> => {
	return await axiosFile<FileContent>('/files/' + patch.join('/'))
}

export default getFileContent
