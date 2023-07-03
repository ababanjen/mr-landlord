import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

export default function sendMessage(req: NextApiRequest, res: NextApiResponse) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const client = twilio(accountSid, token);
  const { phone, message } = req.body;

  client.messages
    .create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    })
    .then(msg =>
      res.json({
        success: true,
        message: msg,
      })
    )
    .catch(error => {
      res.json({
        success: false,
        error,
      });
    });
}
