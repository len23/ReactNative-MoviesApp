import { Button } from 'react-native';
import useAuthStore from '../../store/authStore';
import { SafeAreaView } from 'react-native-safe-area-context';

const UserProfile = () => {
  const [setLogin] = useAuthStore((state) => [state.setLogin]);
  return (
    <SafeAreaView>
      <Button title="Log Out" onPress={() => setLogin(false)} />
    </SafeAreaView>
  );
};

export default UserProfile;
