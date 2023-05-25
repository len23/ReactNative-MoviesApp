import { create } from 'zustand';

type AuthStore = {
  token: string;
  login: boolean;
  getToken: () => void;
  setLogin: () => void;
};

const useAuthStore = create<AuthStore>((set, get) => ({
  token: '',
  login: false,
  getToken: () => {},
  setLogin: () => {
    set({ login: true });
  },
}));

export default useAuthStore;
