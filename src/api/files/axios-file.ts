import axios from 'axios'
export default axios.create({
	baseURL: 'http://localhost:3333/api/',
	headers: {
		'auth-token': process.env.USER__TOKEN,
	},
})

export interface ErrorAxiosFile {
	message: string
}
