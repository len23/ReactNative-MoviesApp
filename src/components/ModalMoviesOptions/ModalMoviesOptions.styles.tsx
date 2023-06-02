import { StyleSheet } from 'react-native';
import { ColorConstants } from '../../constants/StyleConstants';

export const stylesModalMoviesOptions = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 150,
  },
  modalView: {
    backgroundColor: ColorConstants.backgroundLight,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative',
  },
  selectButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 5,
    borderColor: '#FFF',
    width: 150,
    alignItems: 'center',
    marginVertical: 20,
  },
  selectText: { color: '#FFF', fontSize: 20 },
  closeIcon: {
    alignSelf: 'flex-end',
    position: 'absolute',
    zIndex: 1,
  },
});
