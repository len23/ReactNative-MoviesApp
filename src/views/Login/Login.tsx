import { View, Text, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { stylesLogin } from './Login.styles';
import ContImgBckgrd from '../../containers/ContImgBckgrd/ContImgBckgrd';
import TextIconInput from '../../components/TextInput/TextIconInput';
import { LoginForm, LoginProps } from './Login.types';
import PresseableButton from '../../components/PresseableButton/PresseableButton';
import { useState } from 'react';

const styles = { ...stylesLogin };

const Login = (props: LoginProps) => {
  const [logInForm, setLogInForm] = useState<LoginForm>({
    userName: '',
    password: '',
  });

  const handleLoginForm = (text: string, key: string) => {
    setLogInForm({ ...logInForm, [key]: text });
  };

  const submitLoginForm = () => {};

  return (
    <ContImgBckgrd
      gradientColors={['#0A3047', '#0A3047']}
      imgPath={require('../../../assets/movie-background-collage.jpg')}
    >
      <View style={styles.formContainer}>
        <TextIconInput
          ionIconName="person-outline"
          placeholder="User Name"
          name="userName"
          onChangeInput={handleLoginForm}
          value={logInForm.userName}
        />
        <TextIconInput
          ionIconName="lock-closed-outline"
          placeholder="Password"
          name="password"
          onChangeInput={handleLoginForm}
          value={logInForm.password}
          secure={true}
        />
      </View>
      <PresseableButton text="LOG IN" onPressButton={submitLoginForm} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.informativeText}>Don't have an account ?</Text>
        <Button title="Sign Up now" onPress={() => props.navigation.navigate('SignUp')} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ ...styles.informativeText }}>Or</Text>
        <Text style={{ ...styles.informativeText }}>Login With</Text>
        <View style={styles.loginIcons}>
          <Ionicons name="logo-facebook" color={'#FFF'} size={40} />
          <Ionicons name="logo-google" color={'#FFF'} size={40} />
        </View>
      </View>
    </ContImgBckgrd>
  );
};

export default Login;
