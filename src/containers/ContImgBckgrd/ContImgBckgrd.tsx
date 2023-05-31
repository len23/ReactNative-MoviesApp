import { LinearGradient } from 'expo-linear-gradient';
import { Image, ImageBackground } from 'react-native';
import { stylesContImgBckgrd } from './ContImgBckgrd.styles';

type ContImgBckgrdPrps = {
  children: React.ReactNode;
  imgPath: any;
  gradientColors: Array<string>;
};

const styles = { ...stylesContImgBckgrd };
const ContImgBckgrd = (props: ContImgBckgrdPrps) => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={typeof props.imgPath === 'number' ? props.imgPath : { uri: props.imgPath }}
    >
      <LinearGradient style={styles.gradient} colors={props.gradientColors}>
        {props.children}
      </LinearGradient>
    </ImageBackground>
  );
};

export default ContImgBckgrd;
