import { StyleSheet } from 'react-native';
import {
  ColorConstants,
  ContainerStyles,
  IconsSizesStyles,
  SizeConstants,
} from '../../constants/StyleConstants';

const detailScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: ColorConstants.backgroundDark,
    flex: 1,
  },
  backgroundImageMovie: {
    resizeMode: 'contain',
    width: '100%',
    height: 600,
    flex: 5,
  },
  header: {
    ...ContainerStyles.alignItemsStartRow,
    paddingTop: SizeConstants.paddingExtraLarge,
    paddingBottom: 15,
    paddingHorizontal: 26,
  },
  goBackArrow: {
    ...IconsSizesStyles.iconsMediumSize,
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
});

export default detailScreenStyles;
