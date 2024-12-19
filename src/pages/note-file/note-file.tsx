import Editor from '../../ui/editor'
import inlineTools from './inline-tools'
import tools from './tolls'
import { addItems } from '../../store/header-items.slice'
import Btn from '../../ui/btn'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../store'
import usePathname from '../../hook/usePathname'
import { fetchFileContent, selectFileContent } from '../../store/file-content.slice'
import { useEffect } from 'react'
import Loading from '../../ui/loading'
import classNames from 'classnames'

const getUrlFolder = (path: string[]) => {
	const p = [...path]
	p.pop()
	return '/notes/' + p.join('/')
}

const NoteFile = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { data, loading } = useSelector(selectFileContent)
	usePathname(params => {
		if (!params['*']) return
		dispatch(fetchFileContent(params['*']?.split('/')))
	})
	const isLoading = loading === 'pending'
	const clLoading = classNames(
		'fixed bg-slate-950 bottom-0 z-50 left-0 w-full transition-h overflow-hidden',
		{
			'h-0': !isLoading,
			'h-full': isLoading,
		},
	)
	useEffect(() => {
		if (!data) return
		if (!data.content) return
	}, [data])
	if (loading === 'failed') {
		return <h1 className="text-6xl">404</h1>
	}
	return (
		<div>
			<Editor tools={tools} inlineTools={inlineTools}>
				{data ? data.content : ' '}
			</Editor>
			<Loading className={clLoading} isBig />
		</div>
	)
}

export default NoteFile
