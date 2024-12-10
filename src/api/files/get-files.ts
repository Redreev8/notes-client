import axiosFile from './axios-file'
import File from './type'

const getFiles = async (name: string = '') => {
	return await axiosFile<File[]>('/folders/' + name)
}

export default getFiles
