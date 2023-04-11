import { useState, useEffect } from "react";
import { StyleSheet, Image, View, FlatList, Pressable } from 'react-native';
import MovieDetails from "./MovieDetails";
import { optionsGetListMovies } from "../../utils/options-headers";
import HeaderCategory from "./HeaderCategory";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default MoviesList = ({navigation}) => {
    const [data, setData] = useState([]);
    const [category, setCategory] = useState('Top_Ten');
    const [showList, setShowList] = useState(false);
    const [savedList, setSavedList] = useState([ ]);

    const getMovies = async () => {
        try {
            const movies = await (await fetch('https://imdbmovieservice.onrender.com/moviesByCategory', optionsGetListMovies)).json();
            setData(movies);
        } catch(err) {
            console.error(err);
        }
    }
    useEffect(() => {
        getMovies();
      }, []);

      const handleOnTapBookMark = (newMovieId) => {
        setSavedList([...savedList, newMovieId]);
      }

      const renderItem = ({item}) => {
        const saved = savedList.some(id => item.id === id);

        return (
          <MovieDetails movie={item} navigation={navigation} showList={showList} onTapBookMark={handleOnTapBookMark} saved={saved}/>
        );
      }

      

      return(
        <View style={styles.container}>
          <View style={styles.categoryTitleContainer}>
            <HeaderCategory onChangeCategory={setCategory}/>
            <View style={styles.iconsContainer}>
                <Ionicons name='albums-outline' color={!showList ? '#f5c518' : '#FFF'} size={40} onPress={() => {setShowList(false)}} />
                <Ionicons name='list-circle-outline' color={showList ? '#f5c518' : '#FFF'} size={40} onPress={() => {setShowList(true)}} />
            </View>
          </View>
            <FlatList
              data={data[category]}
              renderItem={renderItem}
              horizontal={!showList}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
            />
        </View>
      )
    
}

const styles = StyleSheet.create({
    categoryTitleContainer: {
      flexDirection: 'row',
      marginBottom: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20
    },
    list: {
        overflow: "hidden"
    },
    iconsContainer: {
      flexDirection: 'row',
      justifyContent:'space-around',
      width:110
    },
    viewIcon:{
      marginLeft: 20
    }
  });
  