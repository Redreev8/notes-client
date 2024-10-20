import { FC, useEffect } from 'react'
import Btn from '../ui/btn'
import { fetchFiles, selectFiles } from '../store/files.slice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../store'
import { useLocation, useParams } from 'react-router-dom'
import transliterateRu from '../helper/transliterate-ru'
import File from '../api/files/type'

const getUrlFiles = (pathname: string, el: File) => {
	let prevURL = `${pathname}${pathname.length === 1 ? '' : '/'}`
	const next = `${transliterateRu(el.name).replaceAll(' ', '')}}`
	if (el.type === 'folder') return prevURL + next
	prevURL = prevURL.replace('/notes/', '')
	return '/note-file/' + prevURL + next
}

const notes: FC = () => {
	const dispatch = useDispatch<AppDispatch>()
	const params = useParams<{ '*': string | undefined }>()
	const { files } = useSelector(selectFiles)
	const { pathname } = useLocation()

	useEffect(() => {
		dispatch(fetchFiles(params['*']))
	}, [params['*']])
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
