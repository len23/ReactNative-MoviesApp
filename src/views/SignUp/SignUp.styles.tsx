import { StyleSheet } from 'react-native';
import { SizeConstants } from '../../constants/StyleConstants';

export const stylesSignUp = StyleSheet.create({
  screen: {
    flex: 1,
  },
  formContainer: {
    width: SizeConstants.widthLarge,
    marginTop: SizeConstants.paddingExtraLarge + 100,
  },
  photoUserContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  bordericon: {
    borderWidth: 3,
    borderColor: '#6DB5BF',
    borderRadius: 100,
    padding: 25,
  },
});
