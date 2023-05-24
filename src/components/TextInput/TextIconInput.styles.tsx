import { StyleSheet } from 'react-native';
import { ColorConstants } from '../../constants/StyleConstants';

export const stylesTextIconInput = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#6DB5BF',
    paddingBottom: 5,
    marginVertical: 10,
  },
  inputText: {
    fontSize: 17,
    color: ColorConstants.primaryFont,
    marginLeft: 15,
  },
});
