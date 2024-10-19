import { FC } from 'react'
import Btn from '../ui/btn'

const notes: FC = () => {
	const arr = Array.from({ length: 50 }, (_, i) => {
		if (i % 5 === 0) return `${i} + text - ${i}`
		return `text ${i}`
	})
	return (
		<div className="flex w-full flex-wrap gap-1">
			{arr.map((el, i) => (
				<Btn
					href="#"
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
