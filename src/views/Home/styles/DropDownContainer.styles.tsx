import { StyleSheet } from 'react-native';
import { ColorConstants } from '../../../constants/StyleConstants';

const stylesDropDownContainer = StyleSheet.create({
  dropdown: {
    marginLeft: 15,
    paddingLeft: 10,
    height: 25,
    width: 150,
    borderLeftWidth: 5,
    borderLeftColor: ColorConstants.borderLeftColor,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: ColorConstants.font,
  },
  iconStyle: {
    width: 30,
    height: 20,
  },
});

export default stylesDropDownContainer;
