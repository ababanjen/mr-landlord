import { create } from 'zustand'

const generalInfo = {
	contact: {
		firstName: 'John',
		lastName: 'Doe',
		address: '320 J. Marzan St, Sampaloc, Manila',
		state: 'Metro Manila',
		zipCode: 1008,
		country: 'Philippines',
		countryCode: '+63',
		phone: '2586122316',
		email: 'wxtkymgsic@iubridge.com'
	}
}
const useAdminStore = create((set) => ({
	sidenav: 'dashboard',
	general: {
		...generalInfo
	},
	setSidenav: (data: string) => set(() => ({ sidenav: data })),
	setGeneralContact: (data: {}) => set((state: AdminStateTypes) => ({ ...state, general: { ...state.general, contact: data } }))
}))

export default useAdminStore

export type AdminStateTypes = {
	sidenav: string
	general: {
		contact: {
			firstName: string,
			lastName: string,
			address: string,
			state: string,
			zipCode: number,
			country: string,
			countryCode: string,
			phone: number | string,
			email: string
		}
	}
}