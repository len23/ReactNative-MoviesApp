import {
  InputModeOptions,
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from 'react-native';
import { stylesTextIconInput } from './TextIconInput.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

type TextIconInputProps = {
  ionIconName: string;
  placeholder: string;
  inputMode?: InputModeOptions | undefined;
  onChangeInput?: (text: string, key: string) => void;
  value: string;
  name: string;
  secure?: boolean;
  onKeyPress?: (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => void;
  editable?: boolean;
};

const styles = { ...stylesTextIconInput };
const TextIconInput = (props: TextIconInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Ionicons name={props.ionIconName} color={'#FFF'} size={30} />
      <TextInput
        style={styles.inputText}
        placeholder={props.placeholder}
        placeholderTextColor={'#A8B6B8'}
        inputMode={props.inputMode ? props.inputMode : 'text'}
        onChangeText={(text) =>
          props.onChangeInput ? props.onChangeInput(text, props.name) : () => {}
        }
        value={props.value}
        secureTextEntry={props.secure}
        onKeyPress={props.onKeyPress}
        autoCorrect={false}
        editable={props.editable}
      />
    </View>
  );
};

export default TextIconInput;
