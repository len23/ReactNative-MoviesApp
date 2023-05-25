import { Image, Pressable, View } from 'react-native';
import TextIconInput from '../../../components/TextInput/TextIconInput';
import PresseableButton from '../../../components/PresseableButton/PresseableButton';
import { stylesForm as styles } from './Form.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SignUpInputs } from '../SignUp.types';
import { useState } from 'react';
import SignUpCamera from '../SignUpCamera/SignUpCamera';

type FormProps = {
  handleChange: (text: string, key: string) => void;
  signUpInputs: SignUpInputs;
  handleSignUp: () => void;
  onPressCamera: () => void;
  profilePicture: string | undefined;
};

const Form = (props: FormProps) => {
  const { handleChange, signUpInputs, handleSignUp, onPressCamera, profilePicture } = props;

  return (
    <View style={styles.formContainer}>
      <View style={styles.photoUserContainer}>
        <Pressable
          style={!profilePicture ? styles.bordericon : styles.borderPicture}
          onPress={onPressCamera}
        >
          {!profilePicture ? (
            <Ionicons name="camera-outline" size={80} color={'#6DB5BF'} />
          ) : (
            <Image
              source={{ uri: profilePicture }}
              style={{ width: 150, height: 150, borderRadius: 80 }}
            />
          )}
        </Pressable>
      </View>
      <TextIconInput
        ionIconName="mail-outline"
        placeholder="Email Address"
        inputMode="email"
        name="email"
        onChangeInput={handleChange}
        value={signUpInputs.email}
      />
      <TextIconInput
        ionIconName="person-outline"
        placeholder="Username"
        name="userName"
        onChangeInput={handleChange}
        value={signUpInputs.userName}
      />
      <TextIconInput
        ionIconName="key-outline"
        placeholder="Password"
        name="password"
        onChangeInput={handleChange}
        value={signUpInputs.password}
        secure={true}
      />
      <TextIconInput
        ionIconName="key-outline"
        placeholder="Repeat Password"
        name="repeatPassword"
        onChangeInput={handleChange}
        value={signUpInputs.repeatPassword}
        secure={true}
      />
      <PresseableButton text="SIGN UP" onPressButton={handleSignUp} />
    </View>
  );
};

export default Form;
