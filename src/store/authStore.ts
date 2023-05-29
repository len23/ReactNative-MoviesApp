import { create } from 'zustand';

type AuthStore = {
  token: string;
  login: boolean;
  getToken: () => void;
  setLogin: (islogin: boolean) => void;
};

const useAuthStore = create<AuthStore>((set, get) => ({
  token: '',
  login: true,
  getToken: () => {},
  setLogin: (islogin: boolean) => {
    set({ login: islogin });
  },
}));

export default useAuthStore;
