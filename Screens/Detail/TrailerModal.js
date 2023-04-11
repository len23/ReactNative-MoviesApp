import { Modal, StyleSheet, Text, Pressable, View, Button } from 'react-native';
import React, { useCallback, useState } from 'react';
import YoutubePlayer from "react-native-youtube-iframe";


const TrailerModal = ({ seeTrailer, setSeeTrailerProp, idTrailer }) => {
    const [playing, setPlaying] = useState(true);

    const closeModal =  () => {
        setPlaying(!playing)
        setSeeTrailerProp();
    }
    const onStateChange = useCallback((state) => {
        if (state === "ended") {
          setPlaying(false);
          Alert.alert("video has finished playing!");
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
                    <Button title='Close' color={'#FFF'} onPress={closeModal}/>
                    <YoutubePlayer
                        height={220}
                        width={400}
                        play={playing}
                        videoId={idTrailer}
                        initialPlayerParams={{
                            preventFullScreen:false
                        }}
                        onChangeState={onStateChange}
                        webViewProps={{
                            startInLoadingState: true
                        }}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 400
    },
    modalView: {
        alignItems: 'center',
        backgroundColor: '#000000c4',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
});

export default TrailerModal;