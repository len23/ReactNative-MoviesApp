import { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import MovieDetails from "./MovieDetails";
import HeaderCategory from "./HeaderCategory";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { deleteMovie, saveMovie, getMovies, getSavedIdMovies } from '../../services/moviesService'

export default MoviesList = ({ navigation, route }) => {

  const [data, setData] = useState([]);
  const [category, setCategory] = useState('Top_Ten');
  const [showList, setShowList] = useState(false);
  const [savedList, setSavedList] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    getMovies((movies) => {
      setData(movies);
      setShowSpinner(false);
    });
    getSavedIdMovies(setSavedList);
  }, []);

  useEffect(() => {
    navigation.addListener('tabPress', () => {
      getSavedIdMovies(setSavedList)
    });

  }, [navigation])


  useEffect(() => {
    getSavedIdMovies(setSavedList)
  }, [route.params])

  const handleOnTapBookMark = async (movie, cb) => {
    try {
      const saved = savedList.some(imdbid => movie.imdbid === imdbid);
      if (!saved) {
        const resultMovie = await saveMovie(movie);
        setSavedList([...savedList, resultMovie.movie.imdbid])
        cb();
      } else {
        await deleteMovie(movie.imdbid, (id) => setSavedList(savedList.filter(imdbid => imdbid !== id)));
        cb();
      }
    } catch (err) {
      console.error(err);
    }
  }

  const renderItem = ({ item }) => {
    const saved = savedList.some((imdbid) => item.imdbid === imdbid);
    return (
      <MovieDetails movie={item} navigation={navigation} route={route} showList={showList} onTapBookMark={handleOnTapBookMark} saved={saved} />
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
          <ActivityIndicator style={{marginTop: 200}} size='large' color="#00ff00" animating={showSpinner} hidesWhenStopped={true}/>
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
