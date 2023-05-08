import { StyleSheet } from 'react-native';
import { ColorConstants } from '../../../constants/StyleConstants';

const stylesMoviesList = StyleSheet.create({
  categoryTitleContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  list: {
    overflow: 'hidden',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 110,
  },
  viewIcon: {
    marginLeft: 20,
  },
});

export default stylesMoviesList;
