import { Button, Image } from 'react-native';
import useAuthStore from '../../store/authStore';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { getUserData } from '../../services/AuthServices';

const UserProfile = () => {
  const [setLogin, userName] = useAuthStore((state) => [state.setLogin, state.userName]);
  const [profilePicture, setProfilePicture] = useState<string>('');
  useEffect(() => {
    (async () => {
      try {
        if (userName) {
          const response = await getUserData(userName);
          setProfilePicture(response.profilePictureName || '');
        }
      } catch (err) {
        console.log('err ===> ', err);
      }
    })();
  }, []);
  return (
    <SafeAreaView>
      <Image
        source={{ uri: profilePicture }}
        style={{ width: 150, height: 150, borderRadius: 80 }}
      />
      <Button title="Log Out" onPress={() => setLogin(false)} />
    </SafeAreaView>
  );
};

export default UserProfile;
