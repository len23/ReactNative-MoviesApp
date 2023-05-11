import { useState } from 'react';
import { Text, View, Image, Pressable, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import sylesMovieListItem from './MovieListItem.styles';
import { IMovie } from '../../../../types/IMovie';
import useFavSavedMoviesStore from '../../../../store/favMoviesStore';

const styles = { ...sylesMovieListItem };

type MovieListItemProps = {
  movie: IMovie;
  showList: boolean;
  onTapBookMark?: () => void;
  onMoviePress: (movie: IMovie) => void;
  saved?: boolean;
};

const MovieListItem = (props: MovieListItemProps) => {
  const [favs, isLoading, addToFav, removeFromFav] = useFavSavedMoviesStore((state) => [
    state.favs,
    state.isLoading,
    state.addToFav,
    state.removeFromFav,
  ]);

  const [showSpinner, setShowSpinner] = useState(false);

  const ItemHorizontalList = ({ movie }: { movie: IMovie }) => (
    <View style={styles.item}>
      <Pressable onPress={() => props.onMoviePress(movie)}>
        <Image
          style={styles.movieImage}
          source={{
            uri: movie.image,
          }}
        />
      </Pressable>
      <Text style={styles.title} numberOfLines={3}>
        {movie.title}
      </Text>
      <Text style={styles.features}>{movie.genre.join(', ')}</Text>
      <Text style={styles.features}>Rating: {movie.rating}</Text>
    </View>
  );

  const handleOnPress = async (movie: IMovie) => {
    setShowSpinner(true);
    const saved = favs.some((fav) => fav.imdbid === movie.imdbid);
    saved ? await removeFromFav(movie) : await addToFav(movie);
    setShowSpinner(false);
  };

  const ItemVerticalList = ({ movie }: { movie: IMovie }) => {
    return (
      <View style={styles.itemVerticalContainerList}>
        <Ionicons
          style={{ ...styles.iconBookmark, display: showSpinner ? `none` : `flex` }}
          name={!props.saved ? `bookmark-outline` : `bookmark`}
          onPress={() => handleOnPress(movie)}
          size={40}
          color="#FFF"
        />
        <ActivityIndicator
          style={{ ...styles.iconBookmark, display: showSpinner ? 'flex' : 'none' }}
          animating={showSpinner}
          size="large"
        />
        <View>
          <Text style={{ color: '#FFF' }}>
            {movie.title.length > 35 ? `${movie.title.slice(0, 35)}...` : movie.title}
          </Text>
          <Text style={styles.genreVertical}>{movie.genre.join(', ')}</Text>
        </View>
      </View>
    );
  };

  return !props.showList ? (
    <ItemHorizontalList movie={props.movie} />
  ) : (
    <ItemVerticalList movie={props.movie} />
  );
};

export default MovieListItem;
