import { StyleSheet } from 'react-native';
import { ContainerStyles } from '../../constants/StyleConstants';

const stylesTrailerModal = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginBottom: 400,
    ...ContainerStyles.alignItemscenterColumn,
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: '#000000c4',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});

export default stylesTrailerModal;
