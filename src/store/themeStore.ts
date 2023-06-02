import { create } from 'zustand';
import { MovieOptions } from '../types/MovieOptions';
import { ThemeAplication } from '../types/IThemes';
import { getLinearColors } from '../constants/linearColors';

type ThemeStore = {
  optionTheme: MovieOptions;
  themeStyles: ThemeAplication;
  setTheme: (theme: MovieOptions) => void;
  setThemeStyles: (theme: MovieOptions) => void;
};

const useThemeStore = create<ThemeStore>((set, get) => ({
  optionTheme: MovieOptions.IMDB,
  themeStyles: getLinearColors(MovieOptions.IMDB),
  setTheme: (theme) => {
    set({ optionTheme: theme });
    set({ themeStyles: getLinearColors(theme) });
  },
  setThemeStyles: (theme) => {
    set({ themeStyles: getLinearColors(theme) });
  },
}));

export default useThemeStore;
