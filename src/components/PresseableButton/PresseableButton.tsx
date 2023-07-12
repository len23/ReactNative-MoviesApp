import { Pressable, Text, View } from 'react-native';
import { stylesPresseableButtton } from './PressebaleButton.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

type PresseableButtonProps = {
  text: string;
  ionIconName?: string;
  onPressButton: () => any;
};

const styles = { ...stylesPresseableButtton };
const PresseableButton = (props: PresseableButtonProps) => {
  return (
    <Pressable
      style={props.ionIconName ? styles.presseableIconButton : styles.presseableButton}
      onPress={props.onPressButton}
    >
      <Text style={styles.presseableText}>{props.text}</Text>
      {props.ionIconName && <Ionicons name={props.ionIconName} size={40} color={'#FFF'} />}
    </Pressable>
  );
};

export default PresseableButton;
