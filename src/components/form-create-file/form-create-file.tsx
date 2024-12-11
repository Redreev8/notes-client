import { FC } from 'react'
import Input from '../../ui/input'
import Label from '../../ui/label'
import Radio from '../../ui/radio'
import Error from '../../ui/errors/error'
import useFormCreateFile from './useFormCreateFile'

export interface FormCreateFileProps {
	id: string
	fileType: 'file' | 'folder'
	onSubmit?: () => void
}

const FormCreateFile: FC<FormCreateFileProps> = ({ id, fileType, onSubmit }) => {
	const { register, handleSubmit, errors } = useFormCreateFile({ onSubmit })

	return (
		<form className="flex flex-col gap-4" id={id} onSubmit={handleSubmit}>
			<Label label={'Имя'}>
				<Input
					type="string"
					isError={!!errors.name}
					{...register('name', {
						required: 'Имя обезательно',
					})}
					aria-invalid={errors.name ? 'true' : 'false'}
				/>
				<Error error={errors.name} />
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
