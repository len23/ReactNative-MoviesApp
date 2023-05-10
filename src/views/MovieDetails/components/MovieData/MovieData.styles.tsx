import { StyleSheet } from 'react-native';

const stylesMovieData = StyleSheet.create({
  container: {
    flex: 5,
    position: 'relative',
  },
  movieInfoContainer: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 30,
  },
  movieTitle: {
    fontWeight: '900',
    fontSize: 35,
    marginTop: 60,
  },
  SectionVariable: {
    fontWeight: 'bold',
    fontSize: 17,
    marginVertical: 10,
  },
  playButton: {
    borderRadius: 300,
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -45,
    left: 150,
    shadowOffset: {
      width: -1.0,
      height: -4.0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 30.0,
  },
  playImage: {
    height: 38,
    width: 38,
  },
});

export default stylesMovieData;
