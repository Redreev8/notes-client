import { FC } from 'react'
import Btn from '../ui/btn'
import { fetchFiles, selectFiles } from '../store/files.slice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../store'
import { useLocation } from 'react-router-dom'
import transliterateRu from '../helper/transliterate-ru'
import File from '../api/files/type'
import { addItems } from '../store/header-items.slice'
import usePathname from '../hook/usePathname'
import { openOverlay } from '../store/overlay.slice'
import ModalCreateFile from '../components/modal-create-file'

const getUrlFiles = (pathname: string, el: File) => {
	let prevURL = `${pathname}${pathname.length === 1 ? '' : '/'}`
	const next = `${transliterateRu(el.name).replaceAll(' ', '')}`
	if (el.type === 'folder') return prevURL + next
	prevURL = prevURL.replace('/notes/', '')
	return '/note-file/' + prevURL + next
}

const notes: FC = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { files } = useSelector(selectFiles)
	const { pathname } = useLocation()
	usePathname(params => {
		dispatch(fetchFiles(params['*']))
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
												content: <ModalCreateFile/>,
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
								small
								iconRight="folder-plus"
							/>
						</li>
					</ul>
				),
			}),
		)
	})

	if (!Array.isArray(files)) return 'loding'
	return (
		<div className="flex w-full flex-wrap gap-1">
			{files.map(el => (
				<Btn
					href={getUrlFiles(pathname, el)}
					iconLeft={
						el.type === 'folder' ? 'folder' : 'file'
					}
					key={el.name}
				>
					{el.name}
				</Btn>
			))}
		</div>
	)
}

export default notes
