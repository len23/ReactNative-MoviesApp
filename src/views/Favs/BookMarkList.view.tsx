import { SafeAreaView, StyleSheet } from 'react-native';
import TopMenu from '../../components/TopMenu/TopMenu';
import SavedMovies from './components/SavedMovies/SavedMovies';
import useFavSavedMoviesStore from '../../store/favMoviesStore';
import stylesBookMarkList from './BookMarkList.styles';
import { IMovie } from '../../types/IMovie';
import { useState } from 'react';
import TrailerModal from '../../components/TrailerModal/TrailerModal';

const styles = { ...stylesBookMarkList };

const BookMarkList = () => {
  const [favs, removeFromFav] = useFavSavedMoviesStore((state) => [
    state.favs,
    state.removeFromFav,
  ]);

  const handleRemoveFromFav = async (movie: IMovie) => {
    await removeFromFav(movie);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopMenu />
      <SavedMovies favs={favs} removeFromFav={handleRemoveFromFav} />
    </SafeAreaView>
  );
};

export default BookMarkList;
