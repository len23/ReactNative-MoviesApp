import { Camera, CameraPictureOptions, CameraType } from 'expo-camera';
import { useRef, useState } from 'react';
import {
  Alert,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type SignUpCameraProps = {
  onPressBack: () => void;
  onPressAccept: (uri: string | undefined) => void;
};
export default function SignUpCamera(props: SignUpCameraProps) {
  const [type, setType] = useState(CameraType.back);
  const cameraRef = useRef<Camera>(null);
  const [showPreview, setShowPreview] = useState<string>();
  const toggleCameraType = async () => {
    setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  };

  const takePicture = async () => {
    const as = await cameraRef.current?.takePictureAsync({ isImageMirror: false, scale: 10 });
    setShowPreview(as?.uri);
  };

  const handleAccept = () => {
    props.onPressAccept(showPreview);
    props.onPressBack();
  };

  if (showPreview) {
    return (
      <ImageBackground style={styles.container} source={{ uri: showPreview }}>
        <View style={styles.buttonContainer}>
          <Button title="Discard" onPress={() => setShowPreview(undefined)} />
          <Button title="Accept" onPress={handleAccept} />
        </View>
      </ImageBackground>
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <Ionicons name="arrow-back-outline" size={50} onPress={props.onPressBack} color="#FFF" />
          <Ionicons name="repeat-outline" size={50} onPress={toggleCameraType} color="#FFF" />
          <Ionicons name="camera-outline" size={50} onPress={takePicture} color="#FFF" />
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
