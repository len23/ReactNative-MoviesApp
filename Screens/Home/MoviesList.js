import { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from 'react-native';
import MovieDetails from "./MovieDetails";
import HeaderCategory from "./HeaderCategory";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { deleteMovie, saveMovie, getMovies, getSavedIdMovies } from '../../services/moviesService'
import { useNavigationState } from "@react-navigation/native";


export default MoviesList = ({ navigation }) => {

  const [data, setData] = useState([]);
  const [category, setCategory] = useState('Top_Ten');
  const [showList, setShowList] = useState(false);
  const [savedList, setSavedList] = useState([]);

  useEffect(() => {
    getMovies(setData);
    getSavedIdMovies(setSavedList);
  },[]);

  useEffect(() => {
    navigation.addListener('tabPress', () => {
      getSavedIdMovies(setSavedList)
    });
  }, [navigation])

  const handleOnTapBookMark = async (movie) => {
    try {
      const saved = savedList.some(imdbid => movie.imdbid === imdbid);
      if (!saved) {
        const resultMovie = await saveMovie(movie);
        setSavedList([...savedList, resultMovie.movie.imdbid])
      } else {
        deleteMovie(movie.imdbid, (id) => setSavedList(savedList.filter(imdbid => imdbid !== id)));
      }
    } catch (err) {
      console.error(err);
    }
  }

  const renderItem = ({ item }) => {
    const saved = savedList.some((imdbid) => item.imdbid === imdbid);
    return (
      <MovieDetails movie={item} navigation={navigation} showList={showList} onTapBookMark={handleOnTapBookMark} saved={saved} />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.categoryTitleContainer}>
        <HeaderCategory onChangeCategory={setCategory} />
        <View style={styles.iconsContainer}>
          <Ionicons name='albums-outline' color={!showList ? '#f5c518' : '#FFF'} size={40} onPress={() => { setShowList(false) }} />
          <Ionicons name='list-circle-outline' color={showList ? '#f5c518' : '#FFF'} size={40} onPress={() => { setShowList(true) }} />
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
    justifyContent: 'space-around',
    width: 110
  },
  viewIcon: {
    marginLeft: 20
  }
});
