import { useEffect } from 'react';
import { getAdminInfo } from '@/helpers/requests/admin/user';
import useStore from '@/hooks/global/useStore';

const useGetAdminInfo = () => {
  const setGeneral = useStore((state) => state.setGeneral, ['admin']);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await getAdminInfo();
    setGeneral(res.data ?? null);
  };
};

export default useGetAdminInfo;
