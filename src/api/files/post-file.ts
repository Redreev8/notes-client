import axiosFile from './axios-file'
import File from './type'

const postFile = async (name: string, isFiles: boolean) => {
	if (isFiles) {
		return await axiosFile.post<File>('/files/' + name)
	}
	return await axiosFile.post<File>('/folders/' + name)
}

export default postFile
