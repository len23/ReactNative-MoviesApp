import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

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

    const ItemVerticalList = ({title, genre, id}) => {
      return  (
        <View style={styles.itemVerticalContainerList}>
          <Pressable onPress={() => onTapBookMark(id)}>
            { !saved ? <Image style={styles.iconBookmark} source={require(`../../assets/icon-bookmark.png`)}/> : 
              <Image style={styles.iconBookmark} source={require(`../../assets/filled-bookmark.png`)}/>
            }
          </Pressable>
          <View>
            <Text style={{color:'#FFF'}}>{title.length > 35 ? `${title.slice(0,35)}...` : title}</Text>
            <Text style={styles.genreVertical}>{genre.join(', ')}</Text>
          </View>
        </View>
      )}

    const navigateToDetails = () => {
        navigation.navigate('DetailScreen', {movie});
    }

      return (
        !showList ? <ItemHorizontalList title={movie.title} image={movie.image} genre={movie.genre} rating={movie.rating}/>
                 : <ItemVerticalList style={styles.itemVerticalContainerList} title={movie.title} genre={movie.genre} id={movie.id}/>
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
      // paddingVertical: 5,
      paddingHorizontal: 20,
      marginVertical:10,
      backgroundColor: '#1a1a1a',
      borderLeftWidth: 2,
      borderLeftColor: "#f5c518",
      marginHorizontal: 15,
      height: 60
    },
    iconBookmark: {
      width: 30,
      height: 50,
      marginRight: 20
    },
    genreVertical: {
      fontSize: 10,
      color:'#aaaaaa'
    }
  });
  