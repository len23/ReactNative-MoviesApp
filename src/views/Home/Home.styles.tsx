import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { ColorConstants, ContainerStyles, SizeConstants } from '../../constants/StyleConstants';
import { MovieOptions } from '../../types/MovieOptions';

const stylesIMDB = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const stylesNowPlaying = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const getThemeStyles = (theme: MovieOptions) => {
  if (theme === MovieOptions.IMDB) {
    return stylesIMDB;
  } else if (theme === MovieOptions.NOW_PLAYING) {
    return stylesNowPlaying;
  }
};
