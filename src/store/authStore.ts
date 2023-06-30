import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type AuthStore = {
  token: string;
  login: boolean;
  getToken: () => void;
  setLogin: (islogin: boolean) => void;
};

const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      token: '',
      login: true,
      getToken: () => {},
      setLogin: (islogin: boolean) => {
        set({ login: islogin });
      },
    }),
    {
      name: 'is-login',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useAuthStore;
