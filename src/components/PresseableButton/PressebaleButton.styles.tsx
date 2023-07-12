import { StyleSheet } from 'react-native';
import { SizeConstants } from '../../constants/StyleConstants';
import { PAGE_WIDTH } from '../../constants/WindowConstants';

export const stylesPresseableButtton = StyleSheet.create({
  presseableButton: {
    backgroundColor: '#186491',
    paddingVertical: SizeConstants.paddingRegular,
    paddingHorizontal: SizeConstants.paddingLarge,
    alignItems: 'center',
    marginVertical: SizeConstants.paddingExtraLarge - 10,
  },
  presseableIconButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#186491',
    paddingVertical: SizeConstants.paddingRegular * 0.7,
    paddingHorizontal: SizeConstants.paddingLarge,
    alignItems: 'center',
    marginVertical: SizeConstants.paddingExtraLarge - 10,
    width: PAGE_WIDTH * 0.6,
  },
  presseableText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 25,
  },
});
