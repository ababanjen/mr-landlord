import { create } from 'zustand'

const useAdminStore = create((set) => ({
    sidenav: 'dashboard',
    setSidenav: (data: string) => set(() => ({ sidenav: data })),
}))

export default useAdminStore