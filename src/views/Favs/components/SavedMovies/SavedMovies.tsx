import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import MovieRow from '../MovieRow/MovieRow';
import { SavedMoviesProps } from './SavedMovies.types';
import TrailerModal from '../../../../components/TrailerModal/TrailerModal';

const SavedMovies = ({ favs, removeFromFav }: SavedMoviesProps) => {
  return (
    <View>
      <FlatList
        data={favs}
        renderItem={({ item }) => (
          <MovieRow item={item} onPressBookmarkIcon={() => removeFromFav(item)} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default SavedMovies;
