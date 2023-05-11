import { StyleSheet } from 'react-native';
import {
  ColorConstants,
  FontSizeConstants,
  IconsSizesStyles,
  SizeConstants,
} from '../../../../constants/StyleConstants';

const stylesDropDownContainer = StyleSheet.create({
  dropdown: {
    marginLeft: SizeConstants.paddingRegular,
    paddingLeft: SizeConstants.paddingSmall,
    height: 25,
    width: 150,
    borderLeftWidth: 5,
    borderLeftColor: ColorConstants.borderLeftColor,
  },
  placeholderStyle: {
    fontSize: FontSizeConstants.mediumSize,
  },
  selectedTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: ColorConstants.primaryFont,
  },
  iconStyle: {
    ...IconsSizesStyles.iconsMediumSize,
  },
});

export default stylesDropDownContainer;
