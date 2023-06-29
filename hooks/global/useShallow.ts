import { shallow } from "zustand/shallow";

const useShallow = <T extends Function>(callback: T, [reducer]: any) =>
    reducer(callback, shallow)
export default useShallow