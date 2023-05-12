import { StyleSheet } from 'react-native';
import {
  ColorConstants,
  FontConstants,
  FontSizeConstants,
  SizeConstants,
} from '../../../../constants/StyleConstants';

const stylesMovieRow = StyleSheet.create({
  contaierItem: {
    flexDirection: 'row',
    marginBottom: SizeConstants.paddingExtraLarge - 10,
    justifyContent: 'space-around',
    borderBottomColor: ColorConstants.backgroundWhite,
    borderBottomWidth: 1,
    paddingBottom: SizeConstants.paddingLarge,
    flex: 10,
    marginLeft: SizeConstants.paddingRegular,
    marginRight: SizeConstants.paddingRegular,
  },
  detalisContainer: {
    flexDirection: 'row',
    flex: 8,
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginRight: SizeConstants.paddingSmall,
  },
  starsContainer: {
    flexDirection: 'row',
    marginTop: SizeConstants.paddingSmall + 5,
  },
  title: {
    color: ColorConstants.backgroundWhite,
    fontSize: FontSizeConstants.mediumSize - 3,
    fontWeight: FontConstants.weightBold,
  },
  rating: {
    color: ColorConstants.backgroundWhite,
    fontSize: 15,
  },
  director: {
    color: ColorConstants.backgroundWhite,
    fontSize: FontSizeConstants.mediumSize - 5,
  },
  bookmarkIcon: {
    marginTop: FontSizeConstants.mediumSize - 5,
  },
  containerIcons: {
    alignItems: 'flex-end',
    flex: 2,
  },
});

export default stylesMovieRow;
