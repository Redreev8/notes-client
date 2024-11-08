import { FC, ReactNode } from 'react'

interface LayoutProps {
	children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<main className="px-2 pt-2 lg:px-6 lg:pt-6">{children}</main>
		</>
	)
}

export default Layout
