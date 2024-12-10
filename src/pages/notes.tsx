import { FC } from 'react'
import Btn from '../ui/btn'
import File from '../api/files/type'
import useNotes from './useNotes'

const getUrlFiles = (pathname: string, el: File) => {
	let prevURL = `${pathname}${pathname.length === 1 ? '' : '/'}`
	const next = `${el.name.replaceAll(' ', '')}`
	if (el.type === 'folder') return prevURL + next
	prevURL = prevURL.replace('/notes/', '')
	return '/note-file/' + prevURL + next
}

const notes: FC = () => {
	const { files, pathname } = useNotes()

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
