import { Pressable, ScrollView, View, KeyboardAvoidingView, Alert } from 'react-native';
import ContImgBckgrd from '../../containers/ContImgBckgrd/ContImgBckgrd';
import TextIconInput from '../../components/TextInput/TextIconInput';
import { stylesSignUp } from './SignUp.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PresseableButton from '../../components/PresseableButton/PresseableButton';
import { useState } from 'react';
import { SignUpInputs } from './SignUp.types';
import { signUpUser } from '../../services/AuthServices';
import { IUser } from '../../types/IUser';

const styles = { ...stylesSignUp };
const SignUp = () => {
  const [signUpInputs, setSignUpInputs] = useState<SignUpInputs>({
    email: '',
    userName: '',
    password: '',
    repeatPassword: '',
  });

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSignUp = async () => {
    let msg = '';
    const invalidForm = Object.values<string>(signUpInputs).some(
      (value) => value.trim().length === 0,
    );
    const emailInvalid = !isValidEmail(signUpInputs.email);
    const passNotMatch = signUpInputs.password !== signUpInputs.repeatPassword;

    if (invalidForm || emailInvalid || passNotMatch) {
      msg = 'Invalid fields';
    } else {
      msg = 'All perefect';
      const { email, userName, password } = signUpInputs;
      const user: IUser = { email, userName, password };
      await signUpUser(user);
    }

    Alert.alert('Message', msg);
  };

  const handleChange = (text: string, key: string) => {
    if (key === 'userName' && text.endsWith(' ')) {
      Alert.alert('Alert Title', 'No spaces allowed for user name');
      return;
    }

    const newInput = { ...signUpInputs, [key]: text };
    setSignUpInputs(newInput);
  };

  return (
    <ContImgBckgrd
      gradientColors={['#0A3047', '#0A3047']}
      imgPath={require('../../../assets/movie-background-sing-up.jpg')}
    >
      <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
          <View style={styles.formContainer}>
            <View style={styles.photoUserContainer}>
              <Pressable style={styles.bordericon} onPress={() => {}}>
                <Ionicons name="camera-outline" size={80} color={'#6DB5BF'} />
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
        </KeyboardAvoidingView>
      </ScrollView>
    </ContImgBckgrd>
  );
};

export default SignUp;
