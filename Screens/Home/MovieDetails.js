import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default MouseEvent = ({movie, navigation, showList, onTapBookMark, saved}) => {

      const ItemHorizontalList = ({title, image, genre, rating}) => (
        <View style={styles.item}>
          <Pressable onPress={navigateToDetails} >
            <Image 
              style={styles.movieImage} 
              source={{
                uri: image,
              }}
            />
          </Pressable>
          <Text style={styles.title} numberOfLines={3}>{title}</Text>
          <Text style={styles.features}>{genre.join(', ')}</Text>
          <Text style={styles.features}>Rating: {rating}</Text>
        </View>
    );

    const ItemVerticalList = ({movie}) => {
      return  (
        <View style={styles.itemVerticalContainerList}>
          <Ionicons style={styles.iconBookmark} name={!saved ? `bookmark-outline` : `bookmark`} onPress={() => onTapBookMark(movie)} size={40} color='#FFF'/>
          <View>
            <Text style={{color:'#FFF'}}>{movie.title.length > 35 ? `${movie.title.slice(0,35)}...` : movie.title}</Text>
            <Text style={styles.genreVertical}>{movie.genre.join(', ')}</Text>
          </View>
        </View>
      )}

    const navigateToDetails = () => {
        navigation.navigate('DetailScreen', {
          movie, 
          saved,
        });
    }

      return (
        !showList ? <ItemHorizontalList title={movie.title} image={movie.image} genre={movie.genre} rating={movie.rating}/>
                 : <ItemVerticalList style={styles.itemVerticalContainerList} movie={movie}/>
      );
}




const styles = StyleSheet.create({
    item: {
      paddingHorizontal: 20,
      paddingVertical: 7,
      marginVertical: 5,
      marginHorizontal: 16,
      backgroundColor: '#1a1a1a',
      borderRadius: 40,
      justifyContent:'center',
    },
    title: {
      fontSize: 25,
      marginTop: 20,
      fontWeight: "bold",
      width:300,
      color: '#FFF'
    },
    features: {
        fontSize: 17,
        color: '#FFF'
    },
    movieImage: {
        width: 280,
        height: 350,
        borderRadius: 35,
        alignSelf: 'center'
    },
    itemVerticalContainerList: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginVertical:10,
      backgroundColor: '#1a1a1a',
      borderLeftWidth: 2,
      borderLeftColor: "#f5c518",
      marginHorizontal: 15,
      height: 60
    },
    iconBookmark: {
  
      marginRight: 20
    },
    genreVertical: {
      fontSize: 10,
      color:'#aaaaaa'
    }
  });
  