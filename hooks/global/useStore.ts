import { shallow } from "zustand/shallow";
import useAdminStore from "@/hooks/store/useAdminStore";
import useUserStore from "@/hooks/store/useUserStore"

const useStore = (callback: (...args: any) => any, [type]: Array<'admin' | 'user' | undefined>) => {
	const selector = getSelector(type)
	return selector(callback, shallow)
}
export default useStore

export const getSelector = (type?: string) => {
	switch (type) {
		case 'admin': return useAdminStore
		default: return useUserStore
	}

}