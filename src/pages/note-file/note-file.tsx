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

const getUrlFolder = (patch: string[]) => {
	const p = [...patch]
	p.pop()
	return '/notes/' + p.join('/')
}

const NoteFile = () => {
	const dispatch = useDispatch<AppDispatch>()
	const data = useSelector(selectFileContent)
	usePathname(params => {
		if (!params['*']) return
		dispatch(fetchFileContent(params['*']?.split('/')))
	})
	useEffect(() => {
		if (!data) return
		if (!data.content) return
		dispatch(
			addItems({
				right: (
					<ul className="flex gap-1" key="list-header">
						<li>
							<Btn
								className="uppercase"
								href={getUrlFolder(
									data.patch,
								)}
								isSamll
							>
								{
									data.patch[
										data.patch
											.length -
											1
									]
								}
							</Btn>
						</li>
					</ul>
				),
			}),
		)
	}, [data])

	return (
		<div>
			<Editor tools={tools} inlineTools={inlineTools}>
				{data ? data.content : ' '}
			</Editor>
		</div>
	)
}

export default NoteFile
