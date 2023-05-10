import { StyleSheet } from 'react-native';

const stylesMovieRow = StyleSheet.create({
  contaierItem: {
    flexDirection: 'row',
    marginBottom: 50,
    justifyContent: 'space-around',
    borderBottomColor: '#FFF',
    borderBottomWidth: 1,
    paddingBottom: 35,
    flex: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  detalisContainer: {
    flexDirection: 'row',
    flex: 8,
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  starsContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  title: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '500',
  },
  rating: {
    color: '#a3a1a1',
    fontSize: 15,
  },
  director: {
    color: '#a3a1a1',
    fontSize: 15,
  },
  bookmarkIcon: {
    marginTop: 10,
  },
  containerIcons: {
    alignItems: 'flex-end',
    flex: 2,
  },
});

export default stylesMovieRow;
