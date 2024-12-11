import { useForm } from 'react-hook-form'
import { AppDispatch, useAppDispatch } from '../../store'
import { fetchCreateFile } from '../../store/files.slice'
import { ErrorAxiosFile } from '../../api/files/axios-file'
import { FormCreateFileProps } from './form-create-file'

export interface FormDataFile {
	name: string
	fileType: FormCreateFileProps['fileType']
}

const useFormCreateFile = ({ onSubmit }: Pick<FormCreateFileProps, 'onSubmit'>) => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<FormDataFile>()
	const dispatch = useAppDispatch<AppDispatch>()
	const createFile = async (data: FormDataFile) => {
		const isFile = data.fileType === 'file'
		const resultAction = await dispatch(
			fetchCreateFile({
				name: isFile ? `${data.name}.md` : data.name,
				isFile,
			}),
		)
		if (resultAction.type === 'files/create/fulfilled') {
			if (onSubmit) onSubmit()
			return
		}
		if (resultAction.type === 'files/create/rejected') {
			const { message } = resultAction.payload as ErrorAxiosFile
			setError('name', { type: 'double', message })
			return
		}
	}

	return {
		register,
		handleSubmit: handleSubmit(createFile),
		errors,
	}
}

export default useFormCreateFile
