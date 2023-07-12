import { Image, Pressable, Text, View } from 'react-native';
import useAuthStore from '../../store/authStore';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { getUserData } from '../../services/AuthServices';
import { IUser } from '../../types/IUser';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PAGE_WIDTH } from '../../constants/WindowConstants';
import ContImgBckgrd from '../../containers/ContImgBckgrd/ContImgBckgrd';
import TextIconInput from '../../components/TextInput/TextIconInput';
import PresseableButton from '../../components/PresseableButton/PresseableButton';

const UserProfile = () => {
  const [setLogin, userName] = useAuthStore((state) => [state.setLogin, state.userName]);
  const [userInfo, setUserInfo] = useState<IUser>();
  useEffect(() => {
    (async () => {
      try {
        if (userName) {
          const response = await getUserData(userName);
          setUserInfo(response);
        }
      } catch (err) {
        console.log('err ===> ', err);
      }
    })();
  }, []);
  return (
    <ContImgBckgrd
      gradientColors={['rgba(3,37,65, 0.4)', 'rgba(3,37,65, 0.8)']}
      imgPath={require('../../../assets/movie-background-collage.jpg')}
    >
      <SafeAreaView style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        {userInfo && (
          <View style={{}}>
            <Image
              source={{ uri: `http://192.168.100.48:5001/uploads/${userInfo.profilePictureName}` }}
              style={{
                width: 150,
                height: 150,
                borderRadius: 80,
                marginBottom: 35,
                alignSelf: 'center',
                borderWidth: 5,
                borderColor: '#186491',
              }}
            />
            <TextIconInput
              ionIconName="person-outline"
              placeholder="User Name"
              name="userName"
              editable={false}
              value={userInfo.userName}
            />
            <TextIconInput
              ionIconName="mail-outline"
              placeholder="Email"
              name="email"
              editable={false}
              value={userInfo.email}
            />
          </View>
        )}
        <PresseableButton
          text="LOG OUT"
          onPressButton={() => setLogin(false)}
          ionIconName="exit-outline"
        />
      </SafeAreaView>
    </ContImgBckgrd>
  );
};

export default UserProfile;
