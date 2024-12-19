import { FC } from 'react'
import Btn from '../ui/btn'
import File from '../api/files/type'
import useNotes from './useNotes'
import Loading from '../ui/loading'
import classNames from 'classnames'

const getUrlFiles = (pathname: string, el: File) => {
	let prevURL = `${pathname}${pathname.length === 1 ? '' : '/'}`
	const next = `${el.name.replaceAll(' ', '')}`
	if (el.type === 'folder') return prevURL + next
	prevURL = prevURL.replace('/notes/', '')
	return '/note-file/' + prevURL + next + `.${el.ext}`
}

const notes: FC = () => {
	const { files, pathname, loading } = useNotes()
	const isLoading = loading === 'pending'
	const clLoading = classNames(
		'fixed bg-slate-950 bottom-0 z-50 left-0 w-full transition-h overflow-hidden',
		{
			'h-0': !isLoading,
			'h-full': isLoading,
		},
	)
	if (loading === 'failed') {
		return <h1 className="text-6xl">404</h1>
	}
	return (
		<div className="flex w-full flex-wrap gap-1">
			{files.map(el => (
				<Btn
					href={getUrlFiles(pathname, el)}
					iconLeft={
						el.type === 'folder' ? 'folder' : 'file'
					}
					key={el.name + el.type}
				>
					{el.name +
						(el.type === 'folder'
							? ''
							: `.${el.ext}`)}
				</Btn>
			))}
			<Loading className={clLoading} isBig />
		</div>
	)
}

export default notes
