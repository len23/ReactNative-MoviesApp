import { StyleSheet } from 'react-native';
import {
  FontConstants,
  ColorConstants,
  SizeConstants,
  ContainerStyles,
  IconsSizesStyles,
  FontSizeConstants,
} from '../../constants/StyleConstants';

export const stylesLogin = StyleSheet.create({
  formContainer: {
    width: SizeConstants.widthLarge,
  },
  informativeText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: FontConstants.weightBold,
    marginVertical: 15,
  },
  loginIcons: {
    ...ContainerStyles.alignItemsStartRow,
    justifyContent: 'space-around',
    borderColor: '#FFF',
    width: SizeConstants.widthLarge,
  },
});
