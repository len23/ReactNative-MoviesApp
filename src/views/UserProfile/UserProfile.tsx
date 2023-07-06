import { Button, Image, Pressable, Text, View } from 'react-native';
import useAuthStore from '../../store/authStore';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { getUserData } from '../../services/AuthServices';
import { log } from 'react-native-reanimated';
import { IUser } from '../../types/IUser';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
    <SafeAreaView style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
      {userInfo && (
        <View>
          <Image
            source={{ uri: `http://192.168.100.48:5001/uploads/${userInfo.profilePictureName}` }}
            style={{ width: 150, height: 150, borderRadius: 80, marginBottom: 55 }}
          />
          <Text>{userInfo.email}</Text>
          <Text>{userInfo.userName}</Text>
        </View>
      )}
      <Pressable style={{ flexDirection: 'row' }} onPress={() => setLogin(false)}>
        <Text>Log Out</Text>
        <Ionicons name="close-circle-outline" size={40} color={'#000'} />
      </Pressable>
    </SafeAreaView>
  );
};

export default UserProfile;
