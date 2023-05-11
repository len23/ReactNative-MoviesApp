import { StyleSheet } from 'react-native';
import {
  ColorConstants,
  ContainerStyles,
  FontConstants,
  FontSizeConstants,
  SizeConstants,
} from '../../../../constants/StyleConstants';

const sylesMovieListItem = StyleSheet.create({
  item: {
    paddingHorizontal: SizeConstants.paddingRegular,
    paddingVertical: SizeConstants.paddingSmall,
    marginVertical: SizeConstants.paddingSmall,
    marginHorizontal: SizeConstants.paddingRegular,
    backgroundColor: ColorConstants.backgroundMedium,
    borderRadius: 40,
    justifyContent: 'center',
  },
  title: {
    fontSize: FontSizeConstants.mediumSize,
    marginTop: SizeConstants.paddingRegular,
    fontWeight: FontConstants.weightBold,
    width: 300,
    color: ColorConstants.primaryFont,
  },
  features: {
    fontSize: FontSizeConstants.mediumSize - 5,
    color: ColorConstants.primaryFont,
  },
  movieImage: {
    width: 280,
    height: 350,
    borderRadius: 35,
    alignSelf: 'center',
  },
  itemVerticalContainerList: {
    ...ContainerStyles.alignItemscenterRow,
    justifyContent: 'flex-start',
    paddingHorizontal: SizeConstants.paddingRegular,
    marginVertical: SizeConstants.paddingSmall,
    backgroundColor: ColorConstants.backgroundMedium,
    borderLeftWidth: SizeConstants.paddingSmall - 5,
    borderLeftColor: ColorConstants.primaryYellowColor,
    marginHorizontal: SizeConstants.paddingRegular + 5,
    height: 60,
  },
  iconBookmark: {
    marginRight: SizeConstants.paddingRegular,
  },
  genreVertical: {
    fontSize: FontSizeConstants.smallSize + 3,
    color: ColorConstants.scondaryFont,
  },
});

export default sylesMovieListItem;
