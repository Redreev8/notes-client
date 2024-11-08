import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const usePathname = (
	cb: (params: Readonly<Partial<{ '*': string | undefined }>>) => void,
) => {
	const params = useParams<{ '*': string | undefined }>()
	useEffect(() => {
		cb(params)
	}, [params['*']])
}

export default usePathname
