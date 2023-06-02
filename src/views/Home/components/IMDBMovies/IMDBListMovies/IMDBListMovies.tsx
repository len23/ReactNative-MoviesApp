import { ActivityIndicator, FlatList, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { stylesIMDBListMovies } from './IMDBListMovies.styles';
import DropdownCategory from '../DropdownCategory/DropdownCategory';
import { useState } from 'react';
import { IMovie } from '../../../../../types/IMovie';
import MovieListItem from '../MovieListItem/MovieListItem';
import useFavSavedMoviesStore from '../../../../../store/favMoviesStore';
import useMoviesStore from '../../../../../store/moviesStore';

type IMDBListMoviesProps = {
  onMoviePress: (movie: IMovie) => void;
};

const styles = { ...stylesIMDBListMovies };

const IMDBListMovies = (props: IMDBListMoviesProps) => {
  const [showList, setShowList] = useState<boolean>(false);
  const [category, setCategory] = useState<string>('Top_Ten');

  const [favs, isLoading] = useFavSavedMoviesStore((state) => [state.favs, state.isLoading]);
  const [movies] = useMoviesStore((state) => [state.movies]);

  const renderItem = ({ item }: { item: IMovie }) => {
    const saved = favs.some((movie) => movie.imdbid === item.imdbid);
    return (
      <MovieListItem
        movie={item}
        onMoviePress={props.onMoviePress}
        showList={showList}
        saved={saved}
      />
    );
  };

  return (
    <View>
      <View style={styles.categoryTitleContainer}>
        <DropdownCategory onChangeCategory={setCategory} />
        <View style={styles.iconsContainer}>
          <Ionicons
            name="albums-outline"
            color={!showList ? '#f5c518' : '#FFF'}
            size={40}
            onPress={() => {
              setShowList(false);
            }}
          />
          <Ionicons
            name="list-circle-outline"
            color={showList ? '#f5c518' : '#FFF'}
            size={40}
            onPress={() => {
              setShowList(true);
            }}
          />
        </View>
      </View>
      <FlatList
        data={movies[category]}
        renderItem={renderItem}
        horizontal={!showList}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
      <ActivityIndicator
        style={{ marginTop: 200 }}
        size="large"
        color="#00ff00"
        animating={isLoading}
        hidesWhenStopped={true}
      />
    </View>
  );
};

export default IMDBListMovies;
