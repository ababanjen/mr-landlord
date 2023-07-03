import { type NextApiRequest, type NextApiResponse } from "next";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const tempUsers = [
  {
    id: "1",
    contact: {
      firstName: "John",
      lastName: "Doe",
      address: "320 J. Marzan St, Sampaloc, Manila",
      state: "Metro Manila",
      zipCode: 1008,
      country: "Philippines",
      countryCode: "+63",
      phone: "2586122316",
      email: "wxtkymgsic@iubridge.com",
    },
    users: [],
    collections: [],
  },
];
export default function getUser(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const user = tempUsers.find(u => u.id === id);
  res.json({
    data: user,
    success: true,
  });
}
