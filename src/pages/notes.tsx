import { FC, useEffect } from 'react'
import Btn from '../ui/btn'
import { fetchFiles, selectFiles } from '../store/files.slice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../store'

const notes: FC = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { files } = useSelector(selectFiles)
	useEffect(() => {
		dispatch(fetchFiles())
	}, [])
	return (
		<div className="flex w-full flex-wrap gap-1">
			{files.map((el, i) => (
				<Btn
					href={el}
					iconLeft={i % 3 === 0 ? 'folder' : 'file'}
					key={el}
				>
					{el}
				</Btn>
			))}
		</div>
	)
}

export default notes
