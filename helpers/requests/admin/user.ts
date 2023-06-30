import axios from '@/helpers/requests/axios';
export const getAdminInfo = async () =>
  await axios({
    url: 'admin/user',
    method: 'GET',
    params: { id: 1 },
  });
