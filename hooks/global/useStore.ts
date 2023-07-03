/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { shallow } from "zustand/shallow";
import { lowerCase } from "lodash";
import useAdminStore from "@/hooks/store/useAdminStore";
import useUserStore from "@/hooks/store/useUserStore";

export const getSelector = (type?: string) => {
  if (lowerCase(type) === "admin") return useAdminStore;
  return useUserStore;
};
const useStore = (
  callback: (...args: any) => any,
  [type]: Array<"admin" | "user" | undefined>
) => {
  const selector = getSelector(type);
  return selector(callback, shallow);
};
export default useStore;
