import axios from "@/helpers/requests/axios"
export const SendSMS = async (body: { phone: string, message: string }) =>
	await axios({
		url: '/send-sms',
		method: "POST",
		data: JSON.stringify(body),
	})