import { FC, useId } from 'react'
import Btn from '../../ui/btn'
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../../ui/modal'
import FormCreateFile from '../form-create-file'
import { FormCreateFileProps } from '../form-create-file/form-create-file'
import { closeOverlay } from '../../store/overlay.slice'
import { AppDispatch, useAppDispatch } from '../../store'

export interface ModalCreateFileProps {
	fileType: FormCreateFileProps['fileType']
}

const ModalCreateFile: FC<ModalCreateFileProps> = ({ fileType }) => {
	const id = useId()
	const dispatch = useAppDispatch<AppDispatch>()
	const closeModal = () => {
		dispatch(closeOverlay())
	}
	return (
		<Modal className="min-h-64 min-w-80">
			<ModalHeader className="text-xl">
				<h3>Создать файл</h3>
			</ModalHeader>
			<ModalBody>
				<FormCreateFile
					id={id}
					onSubmit={closeModal}
					fileType={fileType}
				/>
			</ModalBody>
			<ModalFooter className="flex justify-end gap-1">
				<Btn form={id} type="submit" small>
					Добавить
				</Btn>
				<Btn onClick={closeModal} small outline>
					Отмена
				</Btn>
			</ModalFooter>
		</Modal>
	)
}

export default ModalCreateFile
