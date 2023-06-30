import { create } from 'zustand';

const useAdminStore = create((set) => ({
  sidenav: 'dashboard',
  general: null,
  setSidenav: (data: string) => set(() => ({ sidenav: data })),
  setGeneral: (data: any) =>
    set((state: AdminStateTypes) => ({ ...state, general: data })),
  setGeneralContact: (data: {}) =>
    set((state: AdminStateTypes) => ({
      ...state,
      general: { ...state.general, contact: data },
    })),
}));

export default useAdminStore;

export type AdminStateTypes = {
  sidenav: string;
} & GeneralTypes;

export type GeneralTypes = {
  general: {
    id: string;
    contact: {
      firstName: string;
      lastName: string;
      address: string;
      state: string;
      zipCode: number;
      country: string;
      countryCode: string;
      phone: number | string;
      email: string;
    };
    users: [];
    collections: [];
  };
};
