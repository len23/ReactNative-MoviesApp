import { SafeAreaView, StyleSheet } from 'react-native';
import TopMenu from '../../components/TopMenu/TopMenu';
import SavedMovies from './components/SavedMovies/SavedMovies';
import useFavSavedMoviesStore from '../../store/favMoviesStore';
import stylesBookMarkList from './BookMarkList.styles';
import { IMovie } from '../../types/IMovie';
import useThemeStore from '../../store/themeStore';
import MainContainer from '../../containers/MainContainer/MainContainer';

const styles = { ...stylesBookMarkList };

const BookMarkList = () => {
  const [favs, removeFromFav] = useFavSavedMoviesStore((state) => [
    state.favs,
    state.removeFromFav,
  ]);

  const [theme] = useThemeStore((state) => [state.optionTheme]);

  const handleRemoveFromFav = async (movie: IMovie) => {
    await removeFromFav(movie);
  };

  return (
    <MainContainer>
      <SavedMovies favs={favs} removeFromFav={handleRemoveFromFav} />
    </MainContainer>
  );
};

export default BookMarkList;
