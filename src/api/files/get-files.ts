import File from './type'

const getFiles = async (name: string | undefined) => {
	return {
		data: Array.from({ length: 50 }, (_, i) => {
			if (i % 5 === 0)
				return {
					type: 'folder',
					name: `${name ? `${name}-` : ''}text-${i}`,
				}
			return {
				type: 'file',
				name: `${name ? `${name}-` : ''}text-${i}`,
			}
		}) as File[],
	}
}

export default getFiles
