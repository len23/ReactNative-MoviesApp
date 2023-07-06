import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import { LatLng } from 'react-native-maps';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type AuthStore = {
  token: string;
  login: boolean;
  userName: string | undefined;
  userLocation: LatLng | undefined;
  setUserLocation: () => void;
  setUserName: (userName: string) => void;
  getToken: () => void;
  setLogin: (islogin: boolean) => void;
};

const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      token: '',
      login: false,
      userLocation: undefined,
      userName: '',
      getToken: () => {},
      setLogin: (islogin: boolean) => {
        set({ login: islogin });
      },
      setUserName: (userNameResponse: string) => {
        set({ userName: userNameResponse });
      },
      setUserLocation: async () => {
        let { status } = await requestForegroundPermissionsAsync();
        if (status === 'granted') {
          const { coords } = await getCurrentPositionAsync();
          set({ userLocation: { latitude: coords.latitude, longitude: coords.longitude } });
        }
      },
    }),
    {
      name: 'is-login',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !['token', 'userLocation'].includes(key)),
        ),
    },
  ),
);

export default useAuthStore;
