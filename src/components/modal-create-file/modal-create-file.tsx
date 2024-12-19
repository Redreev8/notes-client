import { FC, useId } from 'react'
import Btn from '../../ui/btn'
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../../ui/modal'
import FormCreateFile from '../form-create-file'
import { FormCreateFileProps } from '../form-create-file/form-create-file'
import { closeOverlay } from '../../store/overlay.slice'
import { AppDispatch, useAppDispatch, useAppSelector } from '../../store'
import { selectFiles } from '../../store/files.slice'
import Loading from '../../ui/loading'
import classNames from 'classnames'

export interface ModalCreateFileProps {
	fileType: FormCreateFileProps['fileType']
}

const ModalCreateFile: FC<ModalCreateFileProps> = ({ fileType }) => {
	const id = useId()
	const dispatch = useAppDispatch<AppDispatch>()
	const { loadingAction } = useAppSelector(selectFiles)
	const isLoading = loadingAction === 'pending'
	const closeModal = () => {
		dispatch(closeOverlay())
	}
	const clLoading = classNames(
		'absolute bg-slate-900 z-50 bottom-0 left-0 w-full transition-h overflow-hidden',
		{
			'h-0': !isLoading,
			'h-full': isLoading,
		},
	)
	return (
		<Modal className="relative min-h-64 min-w-80 overflow-hidden">
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
				<Btn form={id} disabled={isLoading} type="submit" small>
					Добавить
				</Btn>
				<Btn
					onClick={closeModal}
					disabled={isLoading}
					small
					outline
				>
					Отмена
				</Btn>
			</ModalFooter>
			<Loading className={clLoading} isBig />
		</Modal>
	)
}

export default ModalCreateFile
