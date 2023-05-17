import {
  ImageBackground,
  TextInput,
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { stylesLogin } from './Login.styles';

const styles = { ...stylesLogin };
const Login = () => {
  return (
    <LinearGradient style={stylesLogin.gradient} colors={['#0A3047', '#0A3047']}>
      <ImageBackground
        style={styles.backgroundLogin}
        source={require('../../../assets/cinema2.jpg')}
      >
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" color={'#FFF'} size={30} />
            <TextInput
              style={styles.inputText}
              placeholder="User Name"
              placeholderTextColor={'#A8B6B8'}
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" color={'#FFF'} size={30} />
            <TextInput
              style={styles.inputText}
              placeholder="Password"
              placeholderTextColor={'#A8B6B8'}
            />
          </View>
        </View>
        <Pressable style={styles.presseableButton}>
          <Text style={styles.presseableText}>LOG IN</Text>
        </Pressable>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.informativeText}>Don't have an account ?</Text>
          <Button title="Sing Up now" />
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ ...styles.informativeText, marginVertical: 15 }}>Or</Text>
          <Text style={{ ...styles.informativeText, marginVertical: 15 }}>Login With</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              borderColor: '#FFF',
              width: 300,
            }}
          >
            <Ionicons name="logo-facebook" color={'#FFF'} size={40} />
            <Ionicons name="logo-google" color={'#FFF'} size={40} />
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

export default Login;
