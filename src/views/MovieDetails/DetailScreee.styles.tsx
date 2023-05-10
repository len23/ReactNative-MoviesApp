import { StyleSheet } from 'react-native';

const detailScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  backgroundImageMovie: {
    resizeMode: 'contain',
    width: '100%',
    height: 600,
    flex: 5,
  },
  header: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 26,
  },
  goBackArrow: {
    width: 35,
    height: 35,
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
});

export default detailScreenStyles;
