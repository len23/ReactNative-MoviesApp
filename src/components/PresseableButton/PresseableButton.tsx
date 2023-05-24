import { Pressable, Text, View } from 'react-native';
import { stylesPresseableButtton } from './PressebaleButton.styles';

type PresseableButtonProps = {
  text: string;
  onPressButton: () => any;
};

const styles = { ...stylesPresseableButtton };
const PresseableButton = (props: PresseableButtonProps) => {
  return (
    <Pressable style={styles.presseableButton} onPress={props.onPressButton}>
      <Text style={styles.presseableText}>{props.text}</Text>
    </Pressable>
  );
};

export default PresseableButton;
