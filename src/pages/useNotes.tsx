import { fetchFiles, selectFiles } from '../store/files.slice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../store'
import { useLocation } from 'react-router-dom'
import { addItems } from '../store/header-items.slice'
import usePathname from '../hook/usePathname'
import { openOverlay } from '../store/overlay.slice'
import ModalCreateFile from '../components/modal-create-file'
import Btn from '../ui/btn'

const useNotes = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { files } = useSelector(selectFiles)
	const { pathname } = useLocation()
	usePathname(params => {
		dispatch(fetchFiles(`/${params['*'] ?? ''}`))
		dispatch(
			addItems({
				right: (
					<ul className="flex gap-1" key="list-header">
						<li>
							<Btn
								className="uppercase"
								onClick={() =>
									dispatch(
										openOverlay(
											{
												content: (
													<ModalCreateFile fileType="file" />
												),
											},
										),
									)
								}
								small
								iconRight="file-plus"
							/>
						</li>
						<li>
							<Btn
								className="uppercase"
								onClick={() =>
									dispatch(
										openOverlay(
											{
												content: (
													<ModalCreateFile fileType="folder" />
												),
											},
										),
									)
								}
								small
								iconRight="folder-plus"
							/>
						</li>
					</ul>
				),
			}),
		)
	})

	return {
		files,
		pathname,
	}
}

export default useNotes
