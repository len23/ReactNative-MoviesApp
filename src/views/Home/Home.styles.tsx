import { StyleSheet } from 'react-native';
import { ColorConstants } from '../../constants/StyleConstants';

const stylesHome = StyleSheet.create({
  container: {
    backgroundColor: ColorConstants.background,
    height: '100%', //Temporary
  },
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

const sylesMovieItem = StyleSheet.create({
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

export { stylesHome, stylesDropDownContainer, sylesMovieItem };
