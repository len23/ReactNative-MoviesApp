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
    <LinearGradient style={styles.gradient} colors={props.gradientColors}>
      <ImageBackground style={styles.backgroundImage} source={props.imgPath}>
        {props.children}
      </ImageBackground>
    </LinearGradient>
  );
};

export default ContImgBckgrd;
