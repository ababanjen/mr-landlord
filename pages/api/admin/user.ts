import { type NextApiRequest, type NextApiResponse } from "next";
import path from "path";
import { readFile } from "fs/promises";
import { toString } from "lodash";

export const fetchUsers = async () => {
  const filePath = path.join(process.cwd(), "pages/api/mock-db/test.json");
  const jsonData: Buffer = await readFile(filePath);
  return JSON.parse(toString(jsonData)).users;
};

export default function getUser(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  fetchUsers()
    .then(results => {
      const user = results.find(
        (u: { id: string | string[] | undefined }) => u.id === id
      );
      res.json({
        data: user ?? "Could not find user",
        success: !!user,
      });
    })
    .catch(err => {
      res.json({
        data: err,
        success: false,
      });
    });
}
