import { useState } from "react";
import { StyleSheet, Text, SafeAreaView, View, Image, Pressable, ScrollView, LayoutAnimation } from "react-native";

export default MovieData = ({movie, onClickSeeTrailer, colorButton}) => {
    const Section = ({variable, value}) => (
        <Text style={styles.SectionVariable}>{variable}: <Text style={{fontWeight:'normal'}}>{value}</Text> </Text> 
);
        const handleSeeTrailer = () => {
            onClickSeeTrailer();
        }
    return (
        <View style={styles.container}>
            <ScrollView style={styles.movieInfoContainer}>
                <Text style={styles.movieTitle}>{movie.title}</Text>
                <Text>{movie.genre.join(', ')} {'\n'}</Text>
                <Section variable='Rankng' value={movie.rank}/>
                <Section variable='Year' value={movie.year}/>
                <Text style={{fontSize: 17}}>{'\n'}{movie.description}</Text>
                <Section variable='Director' value={movie.director.join(', ')}/>
                <Section variable='Writers' value={movie.writers.join(', ')}/>
            </ScrollView>
            <Pressable style={{...styles.playButtonContainer}} onPress={handleSeeTrailer} >
                <View style={{...styles.playButton, backgroundColor: colorButton}}><Image style={styles.playImage} source={require('../../assets/play-button.png')}/></View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        position: "relative"
    },
    movieInfoContainer: {
        backgroundColor:"#FFF",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 30,
        
    },
    movieTitle: {
        fontWeight: "900",
        fontSize: 35,
        marginTop: 60,
    },
    SectionVariable: {
        fontWeight:"bold", fontSize: 17, marginVertical: 10
    },
    playButton: {
        borderRadius: 300,
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playButtonContainer: {
      justifyContent: "center",
      alignItems:'center',
        position: 'absolute',
        top: -45,
        left: 150,
        shadowOffset: {
            width: -1.00,
            height: -4.00,
          },
          shadowOpacity: 0.60,
          shadowRadius: 30.00,
    },
    playImage: {
        height: 38,
        width: 38
    }

  });