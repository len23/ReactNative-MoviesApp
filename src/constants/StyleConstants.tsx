import { Appearance } from 'react-native';

const isDarkMode = Appearance.getColorScheme() === 'dark';

const FontConstants: {
  familyRegular: string;
  sizeTitle: number;
  sizeRegular: number;
  weightBold:
    | 'bold'
    | 'normal'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
} = {
  familyRegular: 'sans-serif',
  sizeTitle: 18,
  sizeRegular: 14,
  weightBold: 'bold',
};

const ColorConstants: {
  background: string;
  backgroundMedium: string;
  borderLeftColor: string;
  font: string;
} = {
  background: '#000',
  backgroundMedium: '#1a1a1a',
  borderLeftColor: '#f5c518',
  font: '#aaaaaa',
};

const SizeConstants: {
  paddingSmall: number;
  paddingRegular: number;
  paddingLarge: number;
  borderRadius: number;
} = {
  paddingSmall: 2,
  paddingRegular: 8,
  paddingLarge: 16,
  borderRadius: 8,
};

export { FontConstants, ColorConstants, SizeConstants };
