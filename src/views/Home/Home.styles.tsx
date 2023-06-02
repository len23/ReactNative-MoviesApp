import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { ColorConstants, ContainerStyles, SizeConstants } from '../../constants/StyleConstants';
import { MovieOptions } from '../../types/MovieOptions';

const stylesIMDB = StyleSheet.create({
  container: {
    flex: 1,
  },

  categoryTitleContainer: {
    ...ContainerStyles.alignItemscenterRow,
    marginBottom: SizeConstants.paddingSmall,
    marginHorizontal: SizeConstants.paddingSmall,
  },
  list: {
    overflow: 'hidden',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 110,
  },
  viewIcon: {
    marginLeft: SizeConstants.paddingRegular,
  },
});

const stylesNowPlaying = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryTitleContainer: {
    ...ContainerStyles.alignItemscenterRow,
    marginBottom: SizeConstants.paddingSmall,
    marginHorizontal: SizeConstants.paddingSmall,
  },
  list: {
    overflow: 'hidden',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 110,
  },
  viewIcon: {
    marginLeft: SizeConstants.paddingRegular,
  },
});

export const getThemeStyles = (theme: MovieOptions) => {
  if (theme === MovieOptions.IMDB) {
    return stylesIMDB;
  } else if (theme === MovieOptions.NOW_PLAYING) {
    return stylesNowPlaying;
  }
};
