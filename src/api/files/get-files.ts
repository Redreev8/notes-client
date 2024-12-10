import axiosFile from './axios-file'
import File from './type'

const getFiles = async (name: string  = '') => {
	const res = await axiosFile<File[]>('/folders' + name)
	return res
}

export default getFiles
