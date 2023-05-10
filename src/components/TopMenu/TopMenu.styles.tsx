import { StyleSheet } from 'react-native';

const stylesTopMenu = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingVertical: 20,
    marginBottom: 30,
    backgroundColor: '#121212',
  },
  headerTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFF',
    marginLeft: 10,
  },
  searchLogo: {
    width: 35,
    height: 35,
  },
  imdbLogo: {
    width: 55,
    height: 55,
  },
});

export default stylesTopMenu;
