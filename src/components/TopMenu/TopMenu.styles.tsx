import { StyleSheet } from 'react-native';
import {
  ColorConstants,
  ContainerStyles,
  FontConstants,
  FontSizeConstants,
  IconsSizesStyles,
  SizeConstants,
} from '../../constants/StyleConstants';

const stylesTopMenu = StyleSheet.create({
  container: {
    ...ContainerStyles.alignItemscenterRow,
    paddingHorizontal: SizeConstants.paddingLarge,
    paddingVertical: SizeConstants.paddingRegular,
    marginBottom: SizeConstants.paddingLarge,
    backgroundColor: ColorConstants.backgroundMedium,
  },
  headerTitleContainer: {
    ...ContainerStyles.alignItemscenterRow,
  },
  title: {
    fontSize: FontSizeConstants.bigSize,
    fontWeight: FontConstants.weightBold,
    color: ColorConstants.primaryFont,
    marginLeft: SizeConstants.paddingRegular,
  },
  searchLogo: {
    ...IconsSizesStyles.iconsMediumSize,
  },
  imdbLogo: {
    ...IconsSizesStyles.iconsBigSize,
  },
});

export default stylesTopMenu;
