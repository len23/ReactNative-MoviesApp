import { Modal, View, Button, Alert } from 'react-native';
import React, { useCallback, useState } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import stylesTrailerModal from './TraileModal.styles';
import { TrailerModalProps } from './TrailerModal.types';

const TrailerModal = ({ seeTrailer, onPlayTrailer, idTrailer }: TrailerModalProps) => {
  const styles = { ...stylesTrailerModal };
  const [playing, setPlaying] = useState(true);
  const closeModal = () => {
    setPlaying(!playing);
    onPlayTrailer();
  };
  const onStateChange = useCallback((state: string) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={seeTrailer}
      style={styles.centeredView}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Button title="Close" color={'#FFF'} onPress={closeModal} />
          <YoutubePlayer
            height={220}
            width={400}
            play={playing}
            videoId={idTrailer}
            initialPlayerParams={{
              preventFullScreen: false,
            }}
            onChangeState={onStateChange}
            webViewProps={{
              startInLoadingState: true,
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default TrailerModal;
