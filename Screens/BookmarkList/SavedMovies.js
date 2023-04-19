import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useState } from "react";
import { deleteMovie, getSavedMovies } from "../../services/moviesService";
import MovieRow from "./MovieRow";

export default SavedMovies = ({navigation}) => {

    const [savedMoviesList, setSavedMovies] = useState([]);

    useEffect(() => {
        getSavedMovies(setSavedMovies);
    }, [])

    useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', () => {
            getSavedMovies(setSavedMovies);
          });

          return unsubscribe;
    },[navigation]);

    const handleOnPressBookmarkIcon = async (movie) => {
        await deleteMovie(movie.imdbid, (id) => setSavedMovies(savedMoviesList.filter(m => m.imdbid !== id)));
    }

    return (
        <View>
            <FlatList
                data={savedMoviesList}
                renderItem={({ item }) => <MovieRow item={item} onPressBookmarkIcon={handleOnPressBookmarkIcon}/>}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

// onPressBookmarkIcon={handleOnPressBookmarkIcon}
