import { FC } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../ui/input'
import Label from '../../ui/label'
import Radio from '../../ui/radio'
import { AppDispatch, useAppDispatch } from '../../store'
import { fetchCreateFile } from '../../store/files.slice'

export interface FormCreateFileProps {
	id: string
	fileType: 'file' | 'folder'
	onSubmit?: () => void
}

export interface FormDataFile {
	name: string
	fileType: FormCreateFileProps['fileType']
}

const FormCreateFile: FC<FormCreateFileProps> = ({ id, fileType, onSubmit }) => {
	const {
		register,
		handleSubmit,
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
	}

	return (
		<form
			className="flex flex-col gap-4"
			id={id}
			onSubmit={handleSubmit(createFile)}
		>
			<Label label={'Имя'}>
				<Input
					type="string"
					isError={!!errors.name}
					{...register('name', {
						required: 'Имя обезательно',
					})}
					aria-invalid={errors.name ? 'true' : 'false'}
				/>
			</Label>
			<fieldset className="flex flex-wrap gap-1">
				<legend className="mb-1 text-base text-slate-300">
					Тип файла
				</legend>
				<Radio
					value="file"
					isError={!!errors.fileType}
					{...register('fileType', {
						required: 'Расширение обезательно',
						value: fileType,
					})}
					aria-invalid={errors.fileType ? 'true' : 'false'}
				>
					файл
				</Radio>
				<Radio
					value="folder"
					isError={!!errors.fileType}
					{...register('fileType', {
						required: 'Расширение обезательно',
						value: fileType,
					})}
					aria-invalid={errors.fileType ? 'true' : 'false'}
				>
					папка
				</Radio>
			</fieldset>
		</form>
	)
}

export default FormCreateFile
