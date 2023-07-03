/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useEffect } from "react";
import { getAdminInfo } from "@/helpers/requests/admin/user";
import useStore from "@/hooks/global/useStore";

const useGetAdminInfo = () => {
  const setGeneral = useStore(state => state.setGeneral, ["admin"]);
  const getData = async () => {
    const res = await getAdminInfo();
    setGeneral(res.data ?? null);
  };
  useEffect(() => {
    getData();
  }, [getData]);
};

export default useGetAdminInfo;
