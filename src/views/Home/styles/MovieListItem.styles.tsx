import { StyleSheet } from 'react-native';
import { ColorConstants } from '../../../constants/StyleConstants';

const sylesMovieListItem = StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    paddingVertical: 7,
    marginVertical: 5,
    marginHorizontal: 16,
    backgroundColor: ColorConstants.background,
    borderRadius: 40,
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    marginTop: 20,
    fontWeight: 'bold',
    width: 300,
    color: '#FFF',
  },
  features: {
    fontSize: 17,
    color: '#FFF',
  },
  movieImage: {
    width: 280,
    height: 350,
    borderRadius: 35,
    alignSelf: 'center',
  },
  itemVerticalContainerList: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#1a1a1a',
    borderLeftWidth: 2,
    borderLeftColor: '#f5c518',
    marginHorizontal: 15,
    height: 60,
  },
  iconBookmark: {
    marginRight: 20,
  },
  genreVertical: {
    fontSize: 10,
    color: '#aaaaaa',
  },
});

export default sylesMovieListItem;
