import { useCallback, useState } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';
import YouTubePlayer from 'react-player/youtube';

type VideoViewProps = {
  idTrailer?: string;
  playing: boolean;
  onStateChange: (state: string) => void;
};
const VideoView = (props: VideoViewProps) => {
  const { idTrailer, playing, onStateChange } = props;

  //   const onStateChange = useCallback((state: string) => {
  //     if (state === 'ended') {
  //       //   setPlaying(false);
  //       Alert.alert('video has finished playing!');
  //     }
  //   }, []);
  return (
    <View>
      <YouTubePlayer
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
  );
};

export default VideoView;
