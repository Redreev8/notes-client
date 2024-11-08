import { FC, ReactNode } from 'react'
import Header from '../components/header'

interface LayoutProps {
	children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main className="px-2 pt-2 lg:px-6 lg:pt-6">{children}</main>
		</>
	)
}

export default Layout
