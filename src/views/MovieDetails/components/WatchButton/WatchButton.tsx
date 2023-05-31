import { Pressable, StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type WatchButtonProps = {
  onPressWatchNow: () => void;
};

const WatchButton = (props: WatchButtonProps) => {
  return (
    <Pressable style={styles.container} onPress={props.onPressWatchNow}>
      <Text style={{ fontWeight: '800', fontSize: 18 }}>Watch Now </Text>
      <Ionicons name="play" size={25} color="#000" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5c518',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
  },
});

export default WatchButton;
