import { ScrollView, View, KeyboardAvoidingView, Alert, ActivityIndicator } from 'react-native';
import ContImgBckgrd from '../../containers/ContImgBckgrd/ContImgBckgrd';
import { stylesSignUp as styles } from './SignUp.styles';
import { useEffect, useState } from 'react';
import { SignUpInputs, SignUpProps } from './SignUp.types';
import { signUpUser } from '../../services/AuthServices';
import { IUser } from '../../types/IUser';
import Form from './Form/Form';
import SignUpCamera from './SignUpCamera/SignUpCamera';
import { Camera } from 'expo-camera';
import { uploadProfilepicture } from '../../services/fileService';
import { FileSystemUploadType } from 'expo-file-system';
import useAuthStore from '../../store/authStore';

const SignUp = (props: SignUpProps) => {
  // const [setLogin] = useAuthStore((state) => [state.setLogin]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showCamera, setShowCamera] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [uriPicture, setUriPicture] = useState<string>();
  const [signUpInputs, setSignUpInputs] = useState<SignUpInputs>({
    email: '',
    userName: '',
    password: '',
    repeatPassword: '',
    profilePictureName: '',
  });

  useEffect(() => {
    showCamera
      ? props.navigation.setOptions({ headerShown: false })
      : props.navigation.setOptions({ headerShown: true });
  }, [showCamera]);

  useEffect(() => {
    if (uriPicture) {
      setSignUpInputs({ ...signUpInputs, profilePictureName: uriPicture.split('/').pop() });
    }
  }, [uriPicture]);

  const handlePermission = async () => {
    const response = await requestPermission();
    if (response.granted) {
      setShowCamera(true);
    }
  };

  const handleCamera = async () => {
    if (!permission) {
      // Camera permissions are still loading
      return <View />;
    }
    if (!permission.granted) {
      Alert.alert('Camera permissions', 'We need your permission to show the camera', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: handlePermission },
      ]);
    } else {
      setShowCamera(true);
    }
  };

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSignUp = async () => {
    setIsLoading(true);
    try {
      let msg = '';
      const invalidForm = Object.entries<string>(signUpInputs).some(
        (value) => value[1].trim().length === 0 && value[0] != 'profilePictureName',
      );
      const emailInvalid = !isValidEmail(signUpInputs.email);
      const passNotMatch = signUpInputs.password !== signUpInputs.repeatPassword;
      if (invalidForm || emailInvalid || passNotMatch) {
        msg = 'Invalid fields';
        Alert.alert('Alert Title', 'Invalid fields');
      } else {
        const { email, userName, password, profilePictureName } = signUpInputs;
        const user: IUser = { email, userName, password, profilePictureName };

        await signUpUser(user);
        if (uriPicture && profilePictureName) {
          await uploadProfilepicture(
            uriPicture,
            FileSystemUploadType.BINARY_CONTENT,
            profilePictureName,
          );
        }
        msg = 'User Registered';
      }
      Alert.alert('Alert Title', msg, [
        {
          text: 'Go to login',
          onPress: () => {
            props.navigation.goBack();
          },
        },
      ]);
    } catch (error: any) {
      Alert.alert('Alert Title', error.message);
    }
    setIsLoading(false);
  };

  const handleChange = (text: string, key: string) => {
    if (key === 'userName' && text.endsWith(' ')) {
      Alert.alert('Alert Title', 'No spaces allowed for user name');
      return;
    }

    const newInput = { ...signUpInputs, [key]: text };
    setSignUpInputs(newInput);
  };

  if (showCamera) {
    return (
      <SignUpCamera
        onPressBack={() => {
          setShowCamera(!showCamera);
        }}
        onPressAccept={(uri: string | undefined) => {
          console.log('uri ===> ', uri);

          setUriPicture(uri);
        }}
      />
    );
  }

  return (
    <ContImgBckgrd
      gradientColors={['rgba(3,37,65, 0.4)', 'rgba(3,37,65, 0.8)']}
      imgPath={require('../../../assets/movie-background-sing-up.jpg')}
    >
      {!isLoading ? (
        <ScrollView style={styles.screen}>
          <KeyboardAvoidingView style={styles.screen} behavior="position">
            <Form
              signUpInputs={signUpInputs}
              handleChange={handleChange}
              handleSignUp={handleSignUp}
              onPressCamera={handleCamera}
              profilePicture={uriPicture}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      ) : (
        <ActivityIndicator
          size="large"
          color="#6DB5BF"
          animating={isLoading}
          hidesWhenStopped={true}
        />
      )}
    </ContImgBckgrd>
  );
};

export default SignUp;
