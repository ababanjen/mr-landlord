/* eslint-disable sonarjs/no-identical-functions */
// eslint-disable-next-line import/extensions, import/no-unresolved
import axios from "@/helpers/requests/axios";
// eslint-disable-next-line no-return-await

export const getAdminInfo = async () =>
  axios({
    url: "admin/user",
    method: "GET",
    params: { id: 1 },
  });

export const updateAdminInfo = async (data: any) =>
  axios({
    url: "admin/update",
    method: "POST",
    data,
  });
