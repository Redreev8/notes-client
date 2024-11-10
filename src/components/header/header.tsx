import { FC } from 'react'
import Btn from '../../ui/btn'
import { useSelector } from 'react-redux'
import { selectHeaderItems } from '../../store/header-items.slice'
const Header: FC = () => {
	const { left, center, right } = useSelector(selectHeaderItems)
	return (
		<header className="fixed bottom-0 left-0 z-40 w-full overflow-auto border-t-2 border-gray-700 bg-gray-950">
			<div className="inline-flex min-w-full gap-1 border-gray-700 p-2 lg:px-6">
				<div className="flex flex-1 gap-1 justify-self-start">
					<Btn className="uppercase" isSamll>
						меню
					</Btn>
					{left && (
						<div className="flex-1 justify-items-center">
							{left}
						</div>
					)}
				</div>
				{center && (
					<div className="flex-1 justify-items-center">
						{center}
					</div>
				)}
				{right && (
					<div className="flex-1 justify-items-end">
						{right}
					</div>
				)}
			</div>
		</header>
	)
}

export default Header
