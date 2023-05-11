import { Appearance, StyleSheet } from 'react-native';

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

const ColorConstants = {
  backgroundDark: '#000',
  backgroundWhite: '#FFF',
  backgroundMedium: '#121212',
  backgroundLight: '#1a1a1a',
  borderLeftColor: '#f5c518',

  primaryYellowColor: '#f5c518',

  primaryFont: '#FFF',
  scondaryFont: '#AAA',
};

const SizeConstants = {
  paddingSmall: 10,
  paddingRegular: 20,
  paddingLarge: 30,
  paddingExtraLarge: 60,

  radiousSize: 50,
};

const FontSizeConstants = {
  smallSize: 10,
  mediumSize: 20,
  bigSize: 30,
};

const ContainerStyles = StyleSheet.create({
  alignItemscenterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alignItemscenterColumn: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alignItemsStartRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const IconsSizesStyles = StyleSheet.create({
  iconsMediumSize: {
    width: 35,
    height: 35,
  },
  iconsBigSize: {
    width: 55,
    height: 55,
  },
  iconsExtraBigSize: {
    width: 80,
    height: 80,
  },
});

export {
  FontConstants,
  ColorConstants,
  SizeConstants,
  ContainerStyles,
  IconsSizesStyles,
  FontSizeConstants,
};
