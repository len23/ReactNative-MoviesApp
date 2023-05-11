import { StyleSheet } from 'react-native';
import {
  ColorConstants,
  ContainerStyles,
  FontConstants,
  FontSizeConstants,
  IconsSizesStyles,
  SizeConstants,
} from '../../../../constants/StyleConstants';

const stylesMovieData = StyleSheet.create({
  container: {
    flex: 5,
    position: 'relative',
  },
  movieInfoContainer: {
    backgroundColor: ColorConstants.backgroundWhite,
    borderTopLeftRadius: SizeConstants.radiousSize,
    borderTopRightRadius: SizeConstants.radiousSize,
    paddingHorizontal: SizeConstants.paddingLarge,
  },
  movieTitle: {
    fontWeight: FontConstants.weightBold,
    fontSize: FontSizeConstants.bigSize + 5,
    marginTop: SizeConstants.paddingExtraLarge,
  },
  SectionVariable: {
    fontWeight: FontConstants.weightBold,
    fontSize: FontSizeConstants.mediumSize - 3,
    marginVertical: SizeConstants.paddingSmall - 6,
  },
  playButton: {
    ...IconsSizesStyles.iconsExtraBigSize,
    ...ContainerStyles.alignItemscenterColumn,
    borderRadius: 300,
    justifyContent: 'center',
  },
  playButtonContainer: {
    ...ContainerStyles.alignItemscenterColumn,
    position: 'absolute',
    top: -45,
    left: 150,
    shadowOffset: {
      width: -1.0,
      height: -4.0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 30.0,
  },
  playImage: {
    ...IconsSizesStyles.iconsMediumSize,
  },
});

export default stylesMovieData;
