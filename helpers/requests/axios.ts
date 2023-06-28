import axios from "axios"

//TODO:BE endpoints
//Credentials
const axiosRequest = ({ method = "GET", url, data }: AxiosTypes) => axios({
	method,
	url: `/api/${url}`,
	data,
	headers: {
		"Content-Type": "application/json",
	},
}).then(res => res.data).catch(err => err)

export default axiosRequest

type AxiosTypes = {
	method: string
	url: string
	data?: any
}