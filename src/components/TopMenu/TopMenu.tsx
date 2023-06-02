import { Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import stylesTopMenu from './TopMenu.styles';

type TopMenuProps = {
  onPressDownArrow: () => void;
  backgroundColor: string;
  logoMenu: any;
  titleMenu: string;
};

const styles = { ...stylesTopMenu };
const TopMenu = (props: TopMenuProps) => {
  const { onPressDownArrow, backgroundColor, logoMenu, titleMenu } = props;
  return (
    <View style={{ ...styles.container, backgroundColor: backgroundColor }}>
      <View style={styles.headerTitleContainer}>
        <Image style={styles.imdbLogo} source={logoMenu} />
        <Text style={styles.title}>{titleMenu}</Text>
      </View>
      <Ionicons name="caret-down-outline" color={'#FFF'} size={40} onPress={onPressDownArrow} />
    </View>
  );
};

export default TopMenu;
