import { StyleSheet, ImageBackground, View, Image, Pressable, LayoutAnimation } from "react-native";
import { CommonActions } from '@react-navigation/native';
import MovieData from "./MovieData";
import { LinearGradient } from 'expo-linear-gradient';
import TrailerModal from "./TrailerModal";


import { useState } from "react";

export default DetailScreen = ({navigation, route}) => {

    const [seeTrailer, setSeeTrailer] = useState(false);
    const [colorButton, setColorButton] = useState('#FFF');
    
    const movie = route.params.movie;

    const handleSeeTrailer = () => {
        setSeeTrailer(!seeTrailer); 
        setColorButton( colorButton === '#FFF' ? '#f5c518' : '#FFF');
    }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImageMovie} source={{uri: movie.image}}>

                <View>
                        <LinearGradient style={styles.header} colors={['#000000c4', '#0000006e', '#0000004d', 'transparent' ]} locations={[0.4 ,0.8, 0.9, 1.0]} >
                            <Pressable  onPress={() => navigation.dispatch(CommonActions.goBack())} >
                                <Image style={styles.goBackArrow} source={require('../../assets/icon-left-arrow.png')}  />
                            </Pressable>
                            <Pressable  onPress={() => navigation.dispatch(CommonActions.goBack())} >
                                <Image style={styles.goBackArrow} source={require('../../assets/icon-bookmark.png')}  />
                            </Pressable>
                        </LinearGradient>
                </View>
            </ImageBackground>
            <MovieData movie={movie} onClickSeeTrailer={handleSeeTrailer} colorButton={colorButton}/>
            <TrailerModal seeTrailer={seeTrailer} setSeeTrailerProp={handleSeeTrailer} idTrailer={movie.trailer.split('/').pop()}/> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#000',
        flex:1,
    },
    backgroundImageMovie: { 
        resizeMode:"contain",
        width: '100%',
        height: 600,
        flex: 5,
    },
    header: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop:50,
        paddingBottom: 15,
        paddingHorizontal: 26
    },
    goBackArrow: {
        width: 35,
        height: 35
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
      },

  });