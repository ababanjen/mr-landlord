// eslint-disable-next-line import/extensions, import/no-unresolved
import axios from "@/helpers/requests/axios";

export const getAdminInfo = async () =>
  // eslint-disable-next-line no-return-await
  axios({
    url: "admin/user",
    method: "GET",
    params: { id: 1 },
  });
