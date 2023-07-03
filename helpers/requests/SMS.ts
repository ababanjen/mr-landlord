// eslint-disable-next-line import/extensions, import/no-unresolved
import axios from "@/helpers/requests/axios";

export const SendSMS = async (body: { phone: string; message: string }) =>
  // eslint-disable-next-line no-return-await
  axios({
    url: "/send-sms",
    method: "POST",
    data: JSON.stringify(body),
  });
