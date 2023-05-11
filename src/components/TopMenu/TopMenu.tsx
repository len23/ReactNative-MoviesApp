import { Text, View, Image } from 'react-native';
import stylesTopMenu from './TopMenu.styles';

const styles = { ...stylesTopMenu };
const TopMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerTitleContainer}>
        <Image style={styles.imdbLogo} source={require('../../../assets/imdb_image_full.png')} />
        <Text style={styles.title}>Best Movies</Text>
      </View>
      <Image style={styles.searchLogo} source={require('../../../assets/search-icon-white.png')} />
    </View>
  );
};

export default TopMenu;
