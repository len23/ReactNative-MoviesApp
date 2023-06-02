import { StyleSheet } from 'react-native';
import {
  ColorConstants,
  ContainerStyles,
  SizeConstants,
} from '../../../../../constants/StyleConstants';

export const stylesIMDBListMovies = StyleSheet.create({
  container: {
    backgroundColor: ColorConstants.backgroundDark,
    height: '100%', //Temporary
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
