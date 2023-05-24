import { StyleSheet } from 'react-native';
import { SizeConstants } from '../../constants/StyleConstants';

export const stylesPresseableButtton = StyleSheet.create({
  presseableButton: {
    backgroundColor: '#186491',
    paddingVertical: SizeConstants.paddingRegular,
    paddingHorizontal: SizeConstants.paddingLarge,
    alignItems: 'center',
    marginVertical: SizeConstants.paddingExtraLarge - 10,
  },
  presseableText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 25,
  },
});
