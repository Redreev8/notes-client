import Btn from '../../ui/btn'
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../../ui/modal'

const ModalCreateFile = () => {
	return (
		<Modal className="min-h-64 min-w-80">
			<ModalHeader className="text-xl">
				<h3>Создать файл</h3>
			</ModalHeader>
			<ModalBody>ModalBody</ModalBody>
			<ModalFooter className="flex justify-end gap-1">
				<Btn small>Добавить</Btn>
				<Btn small outline>
					Отмена
				</Btn>
			</ModalFooter>
		</Modal>
	)
}

export default ModalCreateFile
