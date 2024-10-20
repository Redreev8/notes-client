const getFiles = async () => {
    return {
		data: Array.from({ length: 50 }, (_, i) => {
			if (i % 5 === 0) return `${i} + text - ${i}`
			return `название ${i}`
		})
	}
}

export default getFiles