import { Alert, Text, View } from 'react-native';
import YouTubePlayer from 'react-native-youtube-iframe';
import { PAGE_HEIGHT, PAGE_WIDTH } from '../../../../constants/WindowConstants';
import { useCallback, useState } from 'react';

type TrailerProps = {
  idTrailer: string;
};

const Trailer = (props: TrailerProps) => {
  const { idTrailer } = props;
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state: string) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);
  return (
    <View>
      <YouTubePlayer
        width={PAGE_WIDTH * 0.85}
        height={PAGE_HEIGHT * 0.25}
        play={playing}
        videoId={idTrailer}
        onChangeState={onStateChange}
      />
    </View>
  );
};

export default Trailer;
