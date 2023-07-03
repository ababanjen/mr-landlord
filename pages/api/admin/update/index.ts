import { type NextApiRequest, type NextApiResponse } from "next";
import { writeFile } from "fs";
import { fetchUsers } from "../user";

export default function updateUser(req: NextApiRequest, res: NextApiResponse) {
  const user = req.body;
  fetchUsers()
    .then(results => {
      const users = results.map((u: { id: string | string[] | undefined }) => {
        if (u.id === user.id) {
          return user;
        }
        return u;
      });
      writeFile(
        "pages/api/mock-db/test.json",
        JSON.stringify({ users }, null, 2),
        error => {
          if (error) {
            res.json({
              success: false,
              data: error,
            });
          }
          res.json({
            success: true,
            data: "Successfully updated",
          });
        }
      );
    })
    .catch(err => {
      res.json({
        success: false,
        data: err,
      });
    });
}
